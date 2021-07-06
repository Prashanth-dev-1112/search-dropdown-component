import React, { useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import "@fontsource/source-sans-pro";
import './SearchbarDropdown.css';
import SuburbItem from './SuburbItem';

const SearchbarDropdown = (props) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const getSearchTerm = (e) => {
        props.searchKeyword(e.target.value);
        if (e.target.value !== "") {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }

    const disableList = (disable) => {
        setIsDisabled(disable);
        props.searchKeyword('');
    }

    const renderSearchList = props.suburbs.map((suburb, index) => {
        return (
            <SuburbItem
                suburb={suburb}
                key={index}
                disableList={disableList}
                selectSuburb={props.selectSuburb}
            />
        );
    });

    return (
        <div className=" search_control">
            <div className="search_container">
                <input id="input_txt" className="input_control" type="text" placeholder="Search for your suburb..." value={props.term} onChange={getSearchTerm} />
                <button className="search_btn">Search<FaSistrix className="search_icon" /></button>
            </div>
            <div className="search_list">
                {renderSearchList.length > 0 && isDisabled
                    ? renderSearchList
                    : ""}
            </div>
        </div>
    )
}

export default SearchbarDropdown
