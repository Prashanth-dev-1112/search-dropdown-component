import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import './SuburbItem.css'

const SuburbItem = (props) => {
    const getSelectedSuburb = (e) => {
        e.preventDefault();
        props.selectSuburb(e.target.parentElement.childNodes[0].innerHTML);
        props.disableList(false);
    }

    return (
        <ul className="item" >
            <div className="location_item"><FaMapMarkerAlt className="location_icon" /></div>
            <div className="detail_item" onClick={getSelectedSuburb}>
                <li className="item_suburb">{props.suburb.suburb}</li>
                <li className="item_city">{props.suburb.city}</li>
            </div>
        </ul>

    )
}

export default SuburbItem
