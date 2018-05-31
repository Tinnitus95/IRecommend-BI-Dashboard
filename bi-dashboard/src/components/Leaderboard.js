import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UserPanel from './Leaderboard/UserLeaderboard/UserPanel';
import TeamPanel from './Leaderboard/TeamLeaderboard/TeamPanel';
import CompetitionPanel from './Leaderboard/CompetitionTab/CompetitionPanel';
import { injectIntl } from 'react-intl';
import {fetchTips} from '../actions/';

class Leaderboard extends Component {

    render() {
    const { intl, user, team, comp } = this.props;
    return (
        <div className="Leaderboard">
            <h2 className="highscore-title">High-Scores</h2>
            <Tabs>
                <TabList>
                    <Tab>{intl.formatMessage({ id:'leaderboard-tab'})}</Tab>
                    <Tab>{intl.formatMessage({ id:'leaderboard-tab-team'})}</Tab>
                    <Tab>{intl.formatMessage({ id:'leaderboard-tab-team'})}</Tab>
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
