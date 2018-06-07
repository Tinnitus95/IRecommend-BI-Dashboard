import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import TopnavLinks from './Topnav/TopnavLinks';
import ClientContent from './ClientContent';
import Callback from './Views/Callback';

import {fetchNumbers,
        fetchUserScore,
        fetchTeamScore,
        fetchPositions,
        fetchGoals,
        fetchIdvBar,
        fetchTips,
        fetchWeek,
        fetchTime
} from '../actions';

class ClientMain extends Component {
    //trigger all the fetches at login to fill the redux store.
    componentDidMount(){
        const accessToken = localStorage.getItem('access_token')
        //pass the accessToken to the action creators
        this.props.fetchNumbers(accessToken);
        this.props.fetchTeamScore(accessToken);
        this.props.fetchUserScore(accessToken);
        this.props.fetchWeek(accessToken);
        this.props.fetchGoals(accessToken);
        this.props.fetchTime(accessToken);
        // TODO: connect to headagents api
        this.props.fetchPositions();
        this.props.fetchIdvBar();
        //TODO: 401 errors
        // this.props.fetchTips(localStorage.getItem(accessToken));
    }
    login() {
        this.props.auth.login();
    }

    render(){
        const { isAuthenticated } = this.props.auth;
        return(
            <BrowserRouter>
                <div className="client-main">
                    {isAuthenticated() ?
                        <div>
                            <TopnavLinks />
                            <ClientContent/>
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
const mapDispatchToProps = {
      fetchNumbers,
      fetchUserScore,
      fetchTeamScore,
      fetchPositions,
      fetchGoals,
      fetchIdvBar,
      fetchTips,
      fetchWeek,
      fetchTime
}

export default connect(null, mapDispatchToProps)(ClientMain);
