import React, {Component} from 'react';
import UserOrbs from '../UserOrbs';
import UserPanel from '../Leaderboard/UserLeaderboard/UserPanel';
import TeamPanel from '../Leaderboard/TeamLeaderboard/TeamPanel';


class LeaderboardView extends Component {
    render(){
        const { user, team } = this.props;
        return (
            <div className="Leaderboard-view">
                <div className="leaderboard-view-content">
                  <UserPanel data={this.props.data.userscore} />
                </div>
                <div className="leaderboard-view-content">
                  <TeamPanel data={this.props.data.teamscore} />
                </div>
            </div>
        );
    }
}

export default LeaderboardView;
