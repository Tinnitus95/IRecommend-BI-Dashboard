import React from 'react';
import { Route, Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../reducers';
import Aux from './ReactAux';

import LoginPage from './Views/LoginPage';
// import App from './App';
// import Home from './Views/Home';
import ClientMain from './ClientMain';
import Callback from './Views/Callback';
import Auth from '../Auth/Auth';
import history from '../history';


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
        <Aux>
          <Route exact path="/" render={(props) => <LoginPage auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <ClientMain auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
      </Aux>
      </Router>
      </Provider>
  );
}
