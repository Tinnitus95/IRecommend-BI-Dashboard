import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTeamScore, fetchUserScore} from '../actions';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import _ from 'lodash';
import UserLeaderboardControler from './Leaderboard/UserLeaderboard/UserLeaderboardControler';
import TeamLeaderboardControler from './Leaderboard/TeamLeaderboard/TeamLeaderboardControler';



class Leaderboard extends Component {
    state = {
        data: [],
        team: [],
        direction: {
            id: 'asc',
            tips: 'asc',
            points: 'asc'
        }
    }
    sortColumnHandler = (key) => {
        const dataCopy = [...this.state.data];
        dataCopy.sort( (a, b) => (
            this.state.direction[key] === 'asc'
            ? parseFloat(a[key]) - parseFloat(b[key])
            : parseFloat(b[key]) - parseFloat(a[key])
        ));
        this.setState({
            data: dataCopy,
            direction: {
                [key]: this.state.direction[key] === 'asc'
                ? 'desc'
                : 'asc'
            }
        });
    }

    componentDidMount(){
        this.props.fetchTeamScore();
        this.props.fetchUserScore();
        // TODO: update the setState
        setTimeout( () => {
            this.setState({
                data: this.props.userscore,
                team: this.props.teamscore
            })
        }, 1500);


    }
    render(){

        return (
            //Bör flytta stylen så att tabs ligger utanför Leaderboard containern
            <div className="Leaderboard">
                <Tabs>
                    <TabList>
                        <Tab> Leaderboard</Tab>
                        <Tab> Top Tips</Tab>
                        <Tab> Team Leaderboard</Tab>
                    </TabList>
                    <div className="leaderboard-content">
                    <TabPanel>
                        <UserLeaderboardControler
                            data={this.state.data}
                            sortColumn={this.sortColumnHandler}
                        />
                    </TabPanel>
                    <TabPanel>
                        <div>Coming soon...</div>
                    </TabPanel>
                    <TabPanel>
                        <TeamLeaderboardControler 
                            data={this.state.team}/>
                    </TabPanel>
                    </div>
                </Tabs>

            </div>
        );
    }
}

function mapStateToProps(state){

    return {
        teamscore: state.teamscore,
        userscore: state.userscore

    };
}

export default connect(mapStateToProps, {fetchTeamScore, fetchUserScore})(Leaderboard);
