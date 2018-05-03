import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTeamScore, fetchUserScore} from '../actions';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import _ from 'lodash';

import UserLeaderboardControler from './Leaderboard/userLeaderboardControler';
import Data from './Leaderboard/LeaderboardData.json';


class Leaderboard extends Component {
    state = {
        data: [],
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
                data: this.props.userscore
            })
        }, 1500);


    }
    render(){

        return (
            //Bör flytta stylen så att tabs ligger utanför Leaderboard containern
            <div className="Leaderboard">
                <Tabs>
                    <TabList>
                        <Tab> Title 1</Tab>
                        <Tab> Title 2</Tab>
                        <Tab> Title 3</Tab>
                    </TabList>

                    <TabPanel>
                        <UserLeaderboardControler
                            data={this.state.data}
                            sortColumn={this.sortColumnHandler}
                        />
                    </TabPanel>
                    <TabPanel>
                        <div>Hello</div>
                    </TabPanel>
                    <TabPanel>
                        <div>Hello again</div>
                    </TabPanel>
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
