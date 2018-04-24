import React from 'react';
import UserLeaderboard from './UserLeaderboard';

const userLeaderboardControler = (props) => {

  const userArr = props.users.map( user => {
    return <UserLeaderboard
      key={user.last}
      first={user.first}
      last={user.last}
      tips={user.tips}
      score={user.score}/>
  });

  return (
    <div className="LeaderboardContent">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Användare</th>
            <th>Tips</th>
            <th>Poäng</th>
          </tr>
        </thead>
        <tbody>
          {userArr}
        </tbody>
      </table>
    </div>
  );
};

export default userLeaderboardControler;
