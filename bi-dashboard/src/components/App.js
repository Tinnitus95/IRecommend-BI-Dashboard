import React, {Component} from 'react';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import ReduxPromise from 'redux-promise';
// import reducers from '../reducers';
import Aux from './ReactAux';

import {makeMainRoutes} from './Routes'

import Auth from '../Auth/Auth';

import LoginPage from './Views/LoginPage';
import ClientMain from './ClientMain';

const auth = new Auth();
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

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
