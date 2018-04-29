import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';


import Main from './components/Main';
import reducers from './reducers';

import 'normalize.css/normalize.css'
import './styles/styles.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {


    render(){
        return(
            <Provider store={createStoreWithMiddleware(reducers)}>
                <Main/>
            </Provider>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'))
