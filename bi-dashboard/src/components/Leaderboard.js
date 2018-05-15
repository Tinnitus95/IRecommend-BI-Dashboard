import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UserPanel from './Leaderboard/UserLeaderboard/UserPanel';
import TeamPanel from './Leaderboard/TeamLeaderboard/TeamPanel';

const Leaderboard = ({user, team}) => {
    return (
        <div className="Leaderboard">
            <Tabs>
                <TabList>
                    <Tab> Leaderboard</Tab>
                    <Tab> Team Leaderboard</Tab>
                </TabList>
                <div className="leaderboard-content">
                    <TabPanel>
                        <UserPanel data={user} />
                    </TabPanel>
                    <TabPanel>
                        <TeamPanel data={team}/>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
}

export default Leaderboard;
