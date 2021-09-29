import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./PersonList.css";

const PersonList = (props) => {
    const { name, picture, company, phone, balance, age } = props.member;
    return (
        // single person list on lift side 
        <div className="person">
            <div>
                <img src={picture} alt="" />
            </div>
            <div className="text-set">
                <h4>Name: {name}</h4>
                <h4>Age: {age}</h4>
                <h4>Company: {company}</h4>
                <h4>Phone: {phone}</h4>
                <h4>Balance: {parseInt(balance)}Tk</h4>
            </div>
            <a href="#" className="btn-add" onClick={() => props.addHandler(props.member)}><FontAwesomeIcon icon={faUserPlus} />  Add</a>

        </div>
    );
};

export default PersonList;