import React, {Component} from 'react';
import Aux from './ReactAux';
import {makeMainRoutes} from './Routes';
import Auth from '../Auth/Auth';
import LoginPage from './Views/LoginPage';
import ClientMain from './ClientMain';

const auth = new Auth();
const routes = makeMainRoutes();

export default class App extends Component {
    render(){
        return(
            <Aux>
                {routes}
            </Aux>
        );
    }
}
