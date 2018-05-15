import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from '../reducers';
import Auth from '../Auth';

import ClientMain from './ClientMain';

const auth = new Auth();
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default class App extends Component {
    render(){

        return(
            <Provider store={createStoreWithMiddleware(reducers)}>
                {/*check if logged in <Login /> */}
                {/* If logged in render Main */}


                <ClientMain/>

            </Provider>
        );
    }
}
// FLytta till reducer
// let username = auth.getProfile().given_name || "Anna-Lena";
// let state = {};
// window.setState = (changes) => {
//     state = Object.assign({}, state, changes);
//
//
// }
//
// let initialState = {
//     name: username,
//     company: 'Telia',
//     location: location.pathname.replace(/^\?|\/$/g, ""),
//     auth
// };

//window.setState(initialState);
