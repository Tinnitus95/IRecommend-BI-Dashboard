import React, {Component} from 'react';

import SideNav from './SideNav';
import NumberWidget from './NumberWidget';
import PositionContainer from './PositionContainer'
import Leaderboard from './Leaderboard';

class Main extends Component {

    render(){
        return(
            <div>
                <SideNav/>
                <div className="content">
                    <NumberWidget

                    />
                    <PositionContainer/>
                    <Leaderboard/>
                </div>
            </div>
        );
    }
}

export default Main;
