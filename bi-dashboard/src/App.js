import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';


import Main from './components/Main';
import reducers from './reducers';
import Auth from './Auth';

import 'normalize.css/normalize.css'
import './styles/styles.scss';

import { IntlProvider, addLocaleData } from 'react-intl';
import { getLanguage } from './api';

import enLocaleData from 'react-intl/locale-data/en';
import svLocaleData from 'react-intl/locale-data/sv';
import translations from './translations';

addLocaleData([...svLocaleData, ...enLocaleData]);
const language = getLanguage();

const auth = new Auth();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {


    render(){
        let mainComponent = ""
        switch (this.props.location) {
            case "":
            mainComponent = <Main {...state} />;
            break;

            case "callback":
            mainComponent = <Callback />;
            break;
        }
        return(
            <Provider store={createStoreWithMiddleware(reducers)}>
                <Main {...state}/>
            </Provider>
        );
    }
}
let username = auth.getProfile().given_name || "Anna-Lena";
let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes);
    document.title = 'irecommend';

    ReactDOM.render(<IntlProvider locale={language} messages={translations[language]}>
    <App />
    </IntlProvider>,
     document.getElementById('app'));
}

let initialState = {
    name: username,
    company: 'Telia',
    location: location.pathname.replace(/^\?|\/$/g, ""),
    auth
};

window.setState(initialState);
