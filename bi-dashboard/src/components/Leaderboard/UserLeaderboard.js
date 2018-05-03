import React from 'react';
import CountUp from 'react-countup';

const userLeaderboard = (props) => {
    if(props.data.length === 0){
        return null;
    }
    return (
        props.data.map((row, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.firstname}</td>
                <td>{row.lastname}</td>
                <td>
                    <CountUp
                        start={0}
                        end={100}
                    />
                </td>
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



export default userLeaderboard;
