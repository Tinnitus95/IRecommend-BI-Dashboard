import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UserPanel from './Leaderboard/UserLeaderboard/UserPanel';
import TeamPanel from './Leaderboard/TeamLeaderboard/TeamPanel';
import CompetitionPanel from './Leaderboard/CompetitionTab/CompetitionPanel';
import { injectIntl } from 'react-intl';
import {fetchTips} from '../actions/';

class Leaderboard extends Component {


calculateTeamPointsHandler = (props) => {
  const team = this.props.team;
  const user = this.props.user;
  const teams = [];

  //Checks if the user is in a team and push them to the teams array.
  for(let i = 0, x = user.length; i < x; i++){
    for(let j = 0, k = team.length; j < k; j++){
      if( user[i].teamhref === team[j].href) {
        teams.push({team: team[j].name, user: user[i].firstname, points: user[i].points });
      }
    }
  }

    // Sorting the users to the right team
    let sortedTeams = teams.reduce( (line, team) => {
      line[team.team] = (line[team.team] || [])
      line[team.team].push({
        name: team.user,
        points: team.points
      });
      return line
    }, []);

    // Calculating total team-score


    // const usersScore = this.props.data.userscore.filter( score => score.points).map( score => score.points);
    // const totalScore = usersScore.reduce( (a, b) => a + b);
this.newHandler( sortedTeams );
return sortedTeams;
}

newHandler = (data) => {

  console.log(data['Team Tornet']);

}

    render() {
    const { intl, user, team, comp } = this.props;
    console.log(this.calculateTeamPointsHandler());
    return (
        <div className="Leaderboard">
            <h2 className="highscore-title">High-Scores</h2>
            <Tabs>
                <TabList>
                    <Tab>{intl.formatMessage({ id:'leaderboard-tab'})}</Tab>
                    <Tab>{intl.formatMessage({ id:'leaderboard-tab-team'})}</Tab>
                    <Tab>{intl.formatMessage({ id:'leaderboard-tab-comp'})}</Tab>
                </TabList>
                <div className="leaderboard-content">
                    <TabPanel>
                        <UserPanel data={user} />
                    </TabPanel>
                    <TabPanel>
                        <TeamPanel data={team}/>
                    </TabPanel>
                    <TabPanel>
                        <CompetitionPanel data={comp} users={user}/>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
    }
}

export default injectIntl(Leaderboard);
