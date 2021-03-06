import React, {Component} from 'react';
import { injectIntl } from 'react-intl';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { calculateTeamPointsHandler } from './CalculateTeamPointsHandler';

import UserPanel from './Leaderboard/UserLeaderboard/UserPanel';
import TeamPanel from './Leaderboard/TeamLeaderboard/TeamPanel';
import CompetitionPanel from './Leaderboard/CompetitionTab/CompetitionPanel';



class Leaderboard extends Component {
  render() {
    const { intl, user, team, comp } = this.props;
    let teamData = calculateTeamPointsHandler(user, team);
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
                        <TeamPanel data={teamData}/>
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
