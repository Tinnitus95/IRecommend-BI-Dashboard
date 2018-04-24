import React from 'react';

const userLeaderboard = (props) => {

  return (
      <tr>
        <td>1</td>
        <td><img src={props.imgSrc} alt="picture" /><span>{`${props.first} ${props.last}`}</span></td>
        <td>{props.tips}</td>
        <td>{props.score}</td>
      </tr>
  );
};

export default userLeaderboard;
