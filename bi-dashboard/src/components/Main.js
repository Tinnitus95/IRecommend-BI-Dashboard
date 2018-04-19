import React, {Component} from 'react';

import SideNav from './SideNav';
import NumberWidget from './NumberWidget';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
             numbers:[
            //{
            //     name:'Antal Tips',
            //     amount: 200
            // },
            // {
            //     name:'Intresserade rekommendationer',
            //     amount: 200
            // },
            // {
            //     name:'Intervjuade kandidater',
            //     amount: 200
            // },
            // {
            //     name:'Tips som lett till anställning',
            //     amount: 200
            // },
            // {
            //     name:'Tips per person',
            //     amount: 200
            // }
        ]
        }
    }
    render(){
        return(
            <div>
                <SideNav/>
                <div className="content">
                    <NumberWidget
                        numbers={this.state.numbers}
                    />
                </div>
            </div>
        );
    }
}

export default Main;
