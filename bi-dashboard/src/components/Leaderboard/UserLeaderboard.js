import React from 'react';
import CountUp from 'react-countup';

const userLeaderboard = (props) => {

    return (
        props.data.map(row => (
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.first}</td>
                <td>{row.last}</td>
                <td>
                    <CountUp
                        start={0}
                        end={row.tips}
                    />
                </td>
                <td>
                    <CountUp
                        start={0}
                        end={row.score}
                    />
                </td>
            </tr>
        ))
    );
};

export default userLeaderboard;
