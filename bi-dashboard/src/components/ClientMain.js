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
        console.log(this.props);
        console.log(localStorage.getItem('access_token'));
        return(
            <BrowserRouter>
                <div className="client-main">
                    {isAuthenticated() ?
                        <div>
                            <Topnav />
                            <ClientContent {...this.props}/>
                        </div>
                        :
                        <div style={{
                          width: '100%',
                          marginTop: '100px',
                          textAlign: 'center'}}>
                            <h2>Please login..</h2>
                        </div>
                    }

                    </div>
                </BrowserRouter>
            );
        }
    }

    export default ClientMain;
