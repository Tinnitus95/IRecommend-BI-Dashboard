import React, {Component} from 'react';
import NumberWidget from '../NumberWidget';

import BarDiagram from '../BarDiagram';
import Leaderboard from '../Leaderboard';
import LineCharts from '../LineCharts';

//Main route
export default class DefaultView extends Component{
    render(){
        //get props from ClientContent.js
        const data = this.props.data;
        return (
            <div className="default-view">
                <NumberWidget data={data.numbers} users={data.userscore}/>
                <div className="wrapper">
                    <div className="position-graph">
                        <BarDiagram data={data.positions}/>
                    </div>
                    <Leaderboard user={data.userscore} team={data.teamscore} comp={data.teamgoals}/>
                </div>
                <LineCharts/>
            </div>
        );
    }
}
