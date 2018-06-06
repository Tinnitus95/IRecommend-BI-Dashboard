import React, {Component} from 'react';
import UserOrbs from '../UserOrbs';
import UserPanel from '../Leaderboard/UserLeaderboard/UserPanel';
import TeamPanel from '../Leaderboard/TeamLeaderboard/TeamPanel';
import _ from 'lodash';
import { calculateTeamPointsHandler } from '../CalculateTeamPointsHandler';

class LeaderboardView extends Component {
    renderTop(){
        const {userscore} = this.props.data;
        const topThree = userscore.slice(0,3);

        for (var i = 0; i < topThree.length; i++) {

            if( i === 0 ){
                topThree[i].classes = 'leader';
            }else if (i === 1) {
                topThree[i].classes = 'not-leader silver';
            }
            else{
                topThree[i].classes = 'not-leader bronze'
            }

            topThree[i].position = i +1;


        }

        return _.map(topThree, top => {
            return <UserOrbs
                key= {top.id}
                top= {top}

            />;
        })
    }

    render(){

        const { userscore, teamscore,  } = this.props.data;
        let teamData = calculateTeamPointsHandler(userscore, teamscore);
        return (
            <div className="leaderboard-view">
                <div className="top-three">
                    {this.renderTop()}
                </div>
                <div className="leaderboard-wrapper">
                <div className="leaderboard-view-content">
                  <UserPanel data={userscore} />
                </div>
                <div className="leaderboard-view-content">
                  <TeamPanel data={teamData} />
                </div>
                </div>
            </div>
        );
    }
}

export default LeaderboardView;
