import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTeamScore, fetchUserScore} from '../actions';

import _ from 'lodash';

class Leaderboard extends Component {
    componentDidMount(){
        this.props.fetchTeamScore();
        this.props.fetchUserScore();
    }
    render(){
        return (
            <div>hi</div>
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
