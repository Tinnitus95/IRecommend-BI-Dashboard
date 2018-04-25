import React from 'react';

const userLeaderboard = (props) => {

  return (
    props.data.map(row => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.first}</td>
            <td>{row.last}</td>
            <td>{row.tips}</td>
            <td>{row.score}</td>
          </tr>
    ))
  );
};

export default userLeaderboard;
