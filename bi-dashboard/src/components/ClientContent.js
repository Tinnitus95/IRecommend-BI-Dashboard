import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from 'react-router';
import {connect} from 'react-redux';

import DefaultView from './Views/DefaultView';
import NumberView from './Views/NumberView';
import GraphView from './Views/GraphView';
import LeaderboardView from './Views/LeaderboardView';

import {fetchNumbers,
        fetchUserScore,
        fetchTeamScore,
        fetchPositions,
        fetchGoals,
        fetchIdvBar,
        fetchTips,
        fetchWeek,
        fetchTime
} from '../actions';


class ClientContent extends Component {
    //trigger all the fetches at login to fill the redux store.
    //should move fetches to an earlier component to prevent blank data
    componentDidMount(){
        const accessToken = localStorage.getItem('access_token')
        //pass the accessToken to the action creators
        this.props.fetchNumbers(accessToken);
        this.props.fetchTeamScore(accessToken);
        this.props.fetchUserScore(accessToken);
        this.props.fetchWeek(accessToken);
        this.props.fetchGoals(accessToken);
        this.props.fetchTime(accessToken);
        this.props.fetchPositions();
        this.props.fetchIdvBar();
        //TODO: 401 errors
        // this.props.fetchTips(localStorage.getItem(accessToken));
        //maybe redirect in when this component mounts to prevent blank start data?
    }
    render(){
        return (
                <div className="client-content">
                <Switch>
                    <Route path="/dashboard/default" render={(props) => (<DefaultView {...props} data={this.props}/>)} />
                    <Route path="/dashboard/numbers" component={NumberView} />
                    <Route path="/dashboard/time" component={GraphView} />
                    <Route path="/dashboard/highscores" component={LeaderboardView} />
                </Switch>
            </div>
        );
    }
}

// HACK individual components need to take in application state
function mapStateToProps(state){
    return {
        numbers: state.number,
        userscore: state.userscore,
        teamscore: state.teamscore,
        positions: state.positions,
        tips: state.tips,
        teamgoals: state.teamgoals,
        time: state.time
    };
}
const mapDispatchToProps = {
        fetchNumbers,
        fetchUserScore,
        fetchTeamScore,
        fetchPositions,
        fetchGoals,
        fetchIdvBar,
        fetchTips,
        fetchWeek,
        fetchTime
}


//withRouter needed when using react router inside of a connect
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientContent));
