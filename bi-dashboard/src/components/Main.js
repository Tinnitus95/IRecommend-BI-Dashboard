import React, {Component} from 'react';
import SideNav from './SideBar/SideNav';
import NumberWidget from './NumberWidget';
import PositionContainer from './PositionContainer'
import Leaderboard from './Leaderboard';
import BarDiagram from './BarDiagram';
import LineCharts from './LineCharts';

// import 'react-tabs/style/react-tabs.scss';

class Main extends Component {
    render(){
        return(
            <div className="flex">
                <SideNav/>
                <div className="content">
                    <NumberWidget />
                    <PositionContainer/>
                    <Leaderboard/>
                    <LineCharts />
                </div>
            </div>
        );
    }
}

export default Main;
