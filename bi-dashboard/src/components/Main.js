import React, {Component} from 'react';

import SideNav from './SideNav';
import NumberWidget from './NumberWidget';


class Main extends Component {
    render(){
        return(
            <div>
                <SideNav/>
                <div className="content">
                    <NumberWidget />
                </div>
            </div>
        );
    }
}

export default Main;
