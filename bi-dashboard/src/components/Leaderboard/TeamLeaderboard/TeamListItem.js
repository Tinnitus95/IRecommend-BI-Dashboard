import React from 'react';
import CountUp from 'react-countup';

const TeamListItem = (props) => {
    // if(props.data.length === 0){
    //     return null;
    // }
    return (
        props.data.map((row, index) => (
            <tr key={index} className="team-list-item">
                <td>{index + 1}</td>
                <td><img src={row.picture} alt="team"/>{` ${row.name}`}</td>
                <td>
                    <CountUp
                        start={0}
                        end={row.points}
                    />
                </td>
            </tr>
        ))
    );
};



export default TeamListItem;