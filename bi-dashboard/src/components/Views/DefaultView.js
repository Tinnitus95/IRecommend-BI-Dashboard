import React, {Component} from 'react';
import {connect} from 'react-redux';
import NumberWidget from '../NumberWidget';

import BarDiagram from '../BarDiagram';
import Leaderboard from '../Leaderboard';
import LineCharts from '../LineCharts';

//Main route
class DefaultView extends Component{
    render(){
        const {numbers, userscore, teamscore, positions, teamgoals} = this.props;
        return (
            <div className="default-view">
                <NumberWidget data={numbers} users={userscore}/>
                <div className="wrapper">
                    <div className="position-graph">
                        <BarDiagram data={positions}/>
                    </div>
                    <Leaderboard user={userscore} team={teamscore} comp={teamgoals}/>
                </div>
                <LineCharts/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        numbers: state.number,
        userscore: state.userscore,
        teamscore: state.teamscore,
        positions: state.positions,
        teamgoals: state.teamgoals
    };
}

export default connect(mapStateToProps)(DefaultView);
