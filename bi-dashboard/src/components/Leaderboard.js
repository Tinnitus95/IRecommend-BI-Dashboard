import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UserPanel from './Leaderboard/UserLeaderboard/UserPanel';
import TeamPanel from './Leaderboard/TeamLeaderboard/TeamPanel';
import { injectIntl } from 'react-intl';
import {fetchTips} from '../actions/';
import { calculateTeamPointsHandler } from './CalculateTeamPointsHandler';

class Leaderboard extends Component {
  render() {
    const { intl, user, team } = this.props;
    let teamData = calculateTeamPointsHandler(user, team);
    return (
        <div className="Leaderboard">
            <h2 className="highscore-title">High-Scores</h2>
            <Tabs>
                <TabList>
                    <Tab>{intl.formatMessage({ id:'leaderboard-tab'})}</Tab>
                    <Tab>{intl.formatMessage({ id:'leaderboard-tab-team'})}</Tab>
                </TabList>
                <div className="leaderboard-content">
                    <TabPanel>
                        <UserPanel data={user} />
                    </TabPanel>
                    <TabPanel>
                        <TeamPanel data={teamData}/>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
  }
}

export default injectIntl(Leaderboard);


//
//
// for teams
// teampoints = 0
// teammembers = 0
// for users
// if user.team = team then teampoints+= user.teampoints
// teammembers++
// end for users
// array.push(name: team[i].name, points: teampoints, members: teamember )
// let tornet = teams.filter( team => team.team === 'Team Tornet' );
//
//
// console.log(tornet);
//     // Sorting the users to the right team
//     let sortedTeams = teams.reduce( (line, team) => {
//       line[team.team] = (line[team.team] || [])
//       line[team.team].push({
//         name: team.user,
//         points: team.points
//       });
//       return line
//     }, []);



    // Calculating total team-score


    // const usersScore = this.props.data.userscore.filter( score => score.points).map( score => score.points);
    // const totalScore = usersScore.reduce( (a, b) => a + b);
// this.newHandler( teams );
