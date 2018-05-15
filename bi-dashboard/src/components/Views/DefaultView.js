import React, {Component} from 'react';

import NumberWidget from '../NumberWidget';
import PositionContainer from '../PositionContainer'
import Leaderboard from '../Leaderboard';
import BarDiagram from '../BarDiagram';
import LineCharts from '../LineCharts';




export default class DefaultView extends Component{

    render(){
        // console.log(this.props.data);
        return (
            <div className="default-view">
                <NumberWidget data={this.props.data.numbers} users={this.props.data.userscore}/>
                <div className="wrapper">
                    <PositionContainer/>
                    <Leaderboard/>
                </div>
                <LineCharts />
            </div>
        );
    }
}
