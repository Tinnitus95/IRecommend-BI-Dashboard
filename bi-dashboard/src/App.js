import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SideNav from './components/SideNav';
import NumberWidget from './components/NumberWidget';

import 'normalize.css/normalize.css'
import './styles/styles.scss';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            numbers:[{
                name:'Antal Tips',
                amount: 200
            },
            {
                name:'Intresserade rekommendationer',
                amount: 200
            },
            {
                name:'Intervjuade kandidater',
                amount: 200
            },
            {
                name:'Tips som lett till anställning',
                amount: 200
            },
            {
                name:'Tips per person',
                amount: 200
            }]
        }
    }

    render(){
        return(
            <div>
                <SideNav/>
                <div className="content">
                    <div className="wrapper">
                        <NumberWidget
                            numbers={this.state.numbers}
                        />
                    </div>

                </div>
            </div>
        );
    }
}


ReactDOM.render(<Main/>, document.getElementById('app'))
