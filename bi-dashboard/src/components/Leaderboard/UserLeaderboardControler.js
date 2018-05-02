import React from 'react';
import UserLeaderboard from './UserLeaderboard';

const userLeaderboardControler = (props) => {
  return (
    //<div className="LeaderboardContent">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Förnamn</th>
            <th>Efternamn</th>
            <th>Tips</th>
            <th onClick={() => props.sortColumn('points')}>Poäng</th>
          </tr>
        </thead>
        <tbody>
          <UserLeaderboard data={props.data} />
        </tbody>
      </table>
  //  </div>
  );
};

export default userLeaderboardControler;
