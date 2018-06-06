import React from 'react';
import CountUp from 'react-countup';

const TeamListItem = (props) => {
    return (
      props.data.map((row, index) => {
            return (
                <tr key={index} className="team-list-item">
                    <td>{index + 1}</td>
                    <td><img src={!row.picture ? '../images/bi-logo.png' :row.picture } draggable="false" alt="team"/>{` ${row.name}`}</td>
                    <td><CountUp start={0} end={row.totalMembers} /></td>
                    <td><CountUp start={0} end={row.points} /></td>
                </tr>
            );
        }));
    };



    export default TeamListItem;
