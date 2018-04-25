import React from 'react';
import UserLeaderboard from './UserLeaderboard';

const userLeaderboardControler = (props) => {
  return (
    //<div className="LeaderboardContent">
      <table>
        <thead>
          <tr>
            <th onClick={() => props.sortColumn('id')}>Rank</th>
            <th>Förnamn</th>
            <th>Efternamn</th>
            <th onClick={() => props.sortColumn('tips')}>Tips</th>
            <th onClick={() => props.sortColumn('score')}>Poäng</th>
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
