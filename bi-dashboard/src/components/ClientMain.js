import React, {Component} from 'react';
import TopnavLinks from './Topnav/TopnavLinks';

import ClientContent from './ClientContent';
import Callback from './Views/Callback';
import {BrowserRouter} from 'react-router-dom';

class ClientMain extends Component {
    login() {
        this.props.auth.login();
    }
    //We should do all the fetches here and then redirect to dashboard/default
    render(){
        const { isAuthenticated } = this.props.auth;
        return(
            <BrowserRouter>
                <div className="client-main">
                    {isAuthenticated() ?
                        <div>
                            <TopnavLinks />
                            {/* why are we passing props? */}
                            <ClientContent {...this.props}/>
                        </div>
                        :
                        <div style={{
                            width: '100%',
                            marginTop: '100px',
                            textAlign: 'center'}}>
                            <h2>Please login..</h2>
                            <button onClick={this.login()}>Login</button>
                        </div>
                    }
                </div>
            </BrowserRouter>
        );
    }
}

export default ClientMain;
