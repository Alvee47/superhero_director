import React from 'react';
import MemberCart from '../MemberCart/MemberCart';
import { useEffect, useState } from 'react';
import PersonList from '../PersonList/PersonList';
import "./Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    // useState part 
    const [members, setMembers] = useState([]);
    const [membersCart, setMembersCart] = useState([]);
    let totalBalance = 0;
    // useEffect part 
    useEffect(() => {
        // fetch local data 
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setMembers(data));

    }, []);
    // for loop for total blance 
    for (const member of membersCart) {
        totalBalance = totalBalance + parseInt(member.balance)
    }
    // add to member cart button handler
    const addHandler = (member) => {
        const updateMemberCart = [...membersCart, member];
        setMembersCart(updateMemberCart);
    }
    return (
        // full Dashboard 
        <div className="dashboard-container">
            {/* person three column */}
            <div className="person-container">
                {
                    members.map(member => <PersonList
                        key={member.index}
                        member={member}
                        addHandler={addHandler}
                    >
                    </PersonList>)
                }
            </div>
            <div>
                {/* right side part total member,cost and member cart  */}
                <h3><FontAwesomeIcon icon={faUser} /> Total Member: {membersCart.length}</h3>
                <h3><FontAwesomeIcon icon={faMoneyBill} /> Total Cost: {totalBalance}Tk</h3>

                <MemberCart key={membersCart.index} membersCart={membersCart}></MemberCart>
            </div>
        </div>
    );
};

export default Dashboard;