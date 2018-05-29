import React, {Component} from 'react';
import NumberWidget from '../NumberWidget';
import PositionGraph from '../PositionGraph'
import Leaderboard from '../Leaderboard';
import BarDiagram from '../BarDiagram';
import LineCharts from '../LineCharts';


export default class DefaultView extends Component{
    render(){
        const data = this.props.data;
        
        return (

            <div className="default-view">
                <NumberWidget data={data.numbers} users={data.userscore}/>
                <div className="wrapper">
                    <PositionGraph data={data.positions}/>
                    <Leaderboard user={data.userscore} team={data.teamscore}/>
                </div>
                <LineCharts />
            </div>
        );
    }
}
