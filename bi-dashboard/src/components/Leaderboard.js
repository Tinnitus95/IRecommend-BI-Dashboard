import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTeamScore, fetchUserScore} from '../actions';
import UserLeaderboardControler from './Leaderboard/userLeaderboardControler';
import _ from 'lodash';
import Data from './Leaderboard/LeaderboardData.json';


class Leaderboard extends Component {


  state = {
    data: Data,
      direction: {
        id: 'asc',
        tips: 'asc',
        score: 'asc',
      }
  }

  sortColumnHandler = (key) => {
    const dataCopy = [...this.state.data];
    dataCopy.sort( (a, b) => (
      this.state.direction[key] === 'asc'
        ? parseFloat(a[key]) - parseFloat(b[key])
        : parseFloat(b[key]) - parseFloat(a[key])
    ));
    this.setState({
      data: dataCopy,
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    });
  }

    componentDidMount(){
        this.props.fetchTeamScore();
        this.props.fetchUserScore();
    }
    render(){
        return (
            <div className="Leaderboard">
              <UserLeaderboardControler
                data={this.state.data}
                sortColumn={this.sortColumnHandler}/>
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
