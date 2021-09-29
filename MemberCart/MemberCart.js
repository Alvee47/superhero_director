import React from 'react';
import SingleMember from '../SingleMember/SingleMember';

const MemberCart = (props) => {
    const { membersCart } = props;
    return (
        // member cart option 
        <div>
            <h1 className="member-length">{membersCart.lenght}</h1>
            {
                membersCart.map(member => <SingleMember key={member.index} member={member}></SingleMember>)
            }
        </div>
    );
};

export default MemberCart;