import React, {Component} from 'react';
import Topnav from './Topnav/Topnav';
// import Auth from '../Auth';
import ClientContent from './ClientContent';
import Callback from './Views/Callback';
import {BrowserRouter} from 'react-router-dom';

class ClientMain extends Component {
    login() {
      this.props.auth.login();
    }
    render(){
        const { isAuthenticated } = this.props.auth;
        return(
            <BrowserRouter>
                <div className="client-main">
                    {/* <Callback/> */}
                          <Topnav />
                          <ClientContent/>
                </div>
            </BrowserRouter>
        );
    }
}

export default ClientMain;
