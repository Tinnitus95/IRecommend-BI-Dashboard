import React from 'react';
import { Route, Router , Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../reducers';

import LoginPage from './Views/LoginPage';

import ClientMain from './ClientMain';
import Callback from './Views/Callback';
import Auth from '../Auth/Auth';
import history from '../history';

//create the redux store
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const auth = new Auth();

const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

export const makeMainRoutes = () => {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" render={(props) => <LoginPage auth={auth} {...props} />} />
                    <Route path="/dashboard" render={(props) => <ClientMain auth={auth} {...props} />} />
                    <Route path="/callback" render={(props) => {
                        handleAuthentication(props);
                        return <Callback {...props} />
                    }}/>
                </Switch>
            </Router>
        </Provider>
    );
}
