import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import 'normalize.css/normalize.css'
import './styles/styles.scss';

import { IntlProvider, addLocaleData } from 'react-intl';
import { getLanguage } from './api';

import enLocaleData from 'react-intl/locale-data/en';
import svLocaleData from 'react-intl/locale-data/sv';
import translations from './translations';

addLocaleData([...svLocaleData, ...enLocaleData]);
const language = getLanguage();



ReactDOM.render(<IntlProvider locale={language} messages={translations[language]}>
                    <App />
                </IntlProvider>,
                 document.getElementById('app'));
