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

    const getLocation = (e) => {
        if (e.target.parentElement.parentElement.previousSibling.defaultValue !== '') {
                props.selectedSuburb(e.target.parentElement.parentElement.previousSibling.defaultValue);
        }
    }

    const disableList = (disable) => {
        setIsDisabled(disable);
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
                <input className="input_control" type="text" placeholder="Search for your suburb..." value={props.term} onChange={getSearchTerm} />
                <div className="btn_container" onClick={getLocation}>
                    <div className="btn_inner">
                        <button className="search_btn" >Search</button><FaSistrix className="search_icon" />
                    </div>
                </div>
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
