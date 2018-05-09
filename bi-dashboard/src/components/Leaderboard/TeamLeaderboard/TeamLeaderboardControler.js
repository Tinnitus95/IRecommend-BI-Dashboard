import React from 'react';
import TeamLeaderboard from './TeamLeaderboard';

const teamLeaderboardControler = (props) => {
    if (!props) {
        return <div>loading</div>;
    }
  return (
    //<div className="LeaderboardContent">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Lag</th>
            <th>Poäng</th>
            {/* <th onClick={() => props.sortColumn('points')}>Poäng</th> */}
          </tr>
        </thead>
        <tbody>
          <TeamLeaderboard data={props.data} />
        </tbody>
      </table>
  //  </div>
  );
};

export default teamLeaderboardControler;