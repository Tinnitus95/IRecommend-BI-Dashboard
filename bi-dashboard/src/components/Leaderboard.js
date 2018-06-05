import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UserPanel from './Leaderboard/UserLeaderboard/UserPanel';
import TeamPanel from './Leaderboard/TeamLeaderboard/TeamPanel';
import { injectIntl } from 'react-intl';
import {fetchTips} from '../actions/';

class Leaderboard extends Component {

  // Takes in the user and team array and sort the users in the right team
  calculateTeamPointsHandler = (props) => {
    const team = this.props.team;
    const user = this.props.user;
    let teams = [],
        points = 0,
        teamMembers = 0;

    //Loop over all teams and bind the users to the right team
    for( let i = 0, x = team.length; i < x; i++) {
      for( let j = 0, k = user.length; j < k; j++) {
        if( team[i].href === user[j].teamhref ) {
          points += user[j].points;
          teamMembers++;
        }
        if( j === user.length - 1){
          let totalPoints = (points / teamMembers);
          teams.push( { name: team[i].name, points: totalPoints, totalMembers: teamMembers, picture: team[i].picture } );
          points = 0;
          teamMembers = 0;
        }
      }
    }
    // sort the teams by points
    let sortedTeams = teams.slice().sort( ( a, b ) => a.points < b.points);
    return sortedTeams;
  }

  render() {
    const { intl, user, team } = this.props;
    let teamData = this.calculateTeamPointsHandler();
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
