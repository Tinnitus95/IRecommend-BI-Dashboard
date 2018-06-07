import React, { Component } from 'react';

class App extends Component {

    // trigger Auth0 login
    componentWillMount(){
        if(!this.props.auth.isAuthenticated()){
            this.login()
        }
    }
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }
    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div>
                {/* backup button in case of CWM not working correctly */}
                <button onClick={this.goTo.bind(this, 'home')}>Home</button>
                {!isAuthenticated() && (<button onClick={this.login.bind(this)}> login</button>)}

                {isAuthenticated() && this.goTo('dashboard/default')}

            </div>
        );
    }
}

export default App;
