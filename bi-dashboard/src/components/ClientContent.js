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
    fetchProtected,
    fetchIdvBar
} from '../actions';






class ClientContent extends Component {
    componentDidMount(){

        this.props.fetchNumbers(localStorage.getItem('access_token'));
        this.props.fetchTeamScore();
        this.props.fetchUserScore();
        this.props.fetchPositions();
        this.props.fetchProtected();
        this.props.fetchIdvBar();

    }
    render(){

        return (
                <div className="client-content">
                <Switch>
                    <Route exact path="/home" render={(props) => (<DefaultView {...props} data={this.props}/>)} />
                    <Route path="/numbers" render={(props) => (<NumberView {...props} data={this.props} /> )} />
                    <Route path="/time" render={(props) => (<GraphView {...props} data={this.props}/>)} />
                    <Route path="/highscores" render={(props)=> (<LeaderboardView {...props} data={this.props} />)} />
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
        protected: state.protected
    };
}


export default withRouter(connect(mapStateToProps,
    {fetchNumbers,
        fetchUserScore,
        fetchTeamScore,
        fetchPositions,
        fetchProtected,
        fetchIdvBar
    })(ClientContent));
