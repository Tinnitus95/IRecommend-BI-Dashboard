import React from 'react';
import CountUp from 'react-countup';

const TeamListItem = (props) => {
    return (
        //Create a row in team list for every team and set their score and members
        props.data.map((row, index) => {
            return (
                <tr key={index} className="team-list-item">
                    <td>{index + 1}</td>
                    {/*  if there is no image set a default img as logo*/
                        // TODO: Check Error forbidden picture
                    }
                    <td><img src={!row.picture ? '../images/bi-logo.png' :row.picture } draggable="false" alt="team"/>{` ${row.name}`}</td>
                    <td><CountUp start={0} end={row.totalMembers} duration={1} /></td>
                    <td><CountUp start={0} end={row.points} duration={1} /></td>
                </tr>
            );
        }));
    };

export default TeamListItem;
