import React from 'react';

const UserOrbs = ({top, position}) => (
    // Props from LeaderboardView.js
    <div className={`user-orbs ${top.classes}`}>
        <figure>
            <img draggable="false" src={top.picture} alt="userpictuere"/>
            <div className="position-orb">
                <span>
                    {top.position}
                </span>
            </div>
        </figure>
    </div>
)

export default UserOrbs;
