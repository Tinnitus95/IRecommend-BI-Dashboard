import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SideNav from './components/SideNav'
import 'normalize.css/normalize.css'
import './styles/styles.scss';

class Main extends Component {
    render(){
        return(
            <div>
                <SideNav/>
            </div>
        );
    }
}


ReactDOM.render(<Main/>, document.getElementById('app'))
