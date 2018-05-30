import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from 'react-router';
import DefaultView from './Views/DefaultView';
import NumberView from './Views/NumberView';
import GraphView from './Views/GraphView';
import LeaderboardView from './Views/LeaderboardView';

// import Highscores from './Views/Highscores';
// import TimeGraphs from './Views/Time'

import {connect} from 'react-redux';
import {fetchNumbers,
    fetchUserScore,
    fetchTeamScore,
    fetchPositions,
    fetchGoals,
    // fetchProtected,
    fetchIdvBar,
    fetchTips,
    fetchTime
} from '../actions';






class ClientContent extends Component {
    state= {
        tips: false
    }

    componentDidMount(){
        const accessToken = localStorage.getItem('access_token')

        this.props.fetchNumbers(accessToken);
        this.props.fetchTeamScore(accessToken);
        this.props.fetchUserScore(accessToken);
        this.props.fetchTime(accessToken);
        this.props.fetchGoals(accessToken);
        this.props.fetchPositions();
        // this.props.fetchProtected();
        this.props.fetchIdvBar();
        // this.props.fetchTips(localStorage.getItem('access_token'));

    }
    render(){
        return (
                <div className="client-content">
                <Switch>
                    <Route path="/dashboard/default" render={(props) => (<DefaultView {...props} data={this.props}/>)} />
                    <Route path="/dashboard/numbers" render={(props) => (<NumberView {...props} data={this.props} /> )} />
                    <Route path="/dashboard/time" render={(props) => (<GraphView {...props} data={this.props}/>)} />
                    <Route path="/dashboard/highscores" render={(props)=> (<LeaderboardView {...props} data={this.props} />)} />
                </Switch>
            </div>


        );
    }
}
//
//

function mapStateToProps(state){
    return {
        numbers: state.number,
        userscore: state.userscore,
        teamscore: state.teamscore,
        positions: state.positions,
        tips: state.tips,
        teamgoals: state.teamgoals
        // protected: state.protected
    };
}


export default withRouter(connect(mapStateToProps,
    {fetchNumbers,
        fetchUserScore,
        fetchTeamScore,
        fetchPositions,
        fetchGoals,
        // fetchProtected,
        fetchIdvBar,
        fetchTips,
        fetchTime
    })(ClientContent));
