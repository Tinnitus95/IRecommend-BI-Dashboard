import React from 'react';



const UserOrbs = ({top, position}) => (



    console.log(top),
    <div className={`user-orbs ${top.classes}`}>
        <figure>
            <img draggable="false" src={top.picture} alt="userpictuere"/>
            <div className="position-orb">
                <span>
                    {top.position}
                </span>
            </div>
            <figcaption></figcaption>
        </figure>
    </div>
)

export default UserOrbs;
