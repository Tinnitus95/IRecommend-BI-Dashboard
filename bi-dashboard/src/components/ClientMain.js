import React, {Component} from 'react';
import SideNav from './SideBar/SideNav';
import Auth from '../Auth';
import ClientContent from './ClientContent';

import {BrowserRouter} from 'react-router-dom';

class ClientMain extends Component {
    render(){
        return(
            <BrowserRouter>
                <div className="client-main">
                    <SideNav />
                    <ClientContent/>
                </div>
            </BrowserRouter>
        );
    }
}

export default ClientMain;
