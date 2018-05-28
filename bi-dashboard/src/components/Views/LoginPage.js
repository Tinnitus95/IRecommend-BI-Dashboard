import React, { Component } from 'react';

class App extends Component {

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

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div>
                <button onClick={this.goTo.bind(this, 'home')}>Home</button>
                {!isAuthenticated() && (<button onClick={this.login.bind(this)}> login</button>)}

                {isAuthenticated() && (<button onClick={this.logout.bind(this)}>Log Out</button>)}

            </div>
        );
    }
}

export default App;
