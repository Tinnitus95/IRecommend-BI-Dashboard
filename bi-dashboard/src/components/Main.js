import React, {Component} from 'react';
import SideNav from './SideBar/SideNav';
import NumberWidget from './NumberWidget';
import PositionContainer from './PositionContainer'
import Leaderboard from './Leaderboard';
import BarDiagram from './BarDiagram';
import LineCharts from './LineCharts';
import Auth from '../Auth';

// import 'react-tabs/style/react-tabs.scss';

class Main extends Component {

    render(){  
        console.log(this.props);
        return(
            <div className="flex">
                <SideNav {...this.props}/>
                <div className="content">
                    <div>
                        <button onClick={this.props.auth.login}>Login</button>
                        <button onClick={this.props.auth.logout}>Logout</button>
                    </div>
                    <NumberWidget />
                    <div className="wrapper">
                        <PositionContainer/>
                        <Leaderboard/>
                    </div>
                    <LineCharts />
                </div>
            </div>
        );
    }
}

export default Main;
