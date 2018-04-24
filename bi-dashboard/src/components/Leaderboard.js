import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTeamScore, fetchUserScore} from '../actions';
import UserLeaderboardControler from './Leaderboard/userLeaderboardControler';

import _ from 'lodash';

class Leaderboard extends Component {
  state = {
    users: [
      {first: 'dakioso', last: 'milo', tips: 144, score: 1255},
      {first: 'fadi', last: 'gorre', tips: 299, score: 1149},
      {first: 'oscar', last: 'freddysson', tips: 324, score: 795},
      {first: 'mikey', last: 'gsson', tips: 1440, score: 12550},
    ]
  }


    componentDidMount(){
        this.props.fetchTeamScore();
        this.props.fetchUserScore();
    }
    render(){
        return (
            <div className="Leaderboard">
              <UserLeaderboardControler users={this.state.users} />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        teamscore: state.teamscore,
        userscore: state.userscore
    };
}

export default connect(mapStateToProps, {fetchTeamScore, fetchUserScore})(Leaderboard);
