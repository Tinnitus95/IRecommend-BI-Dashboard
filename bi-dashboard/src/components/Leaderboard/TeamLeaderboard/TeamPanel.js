import React from 'react';
import TeamListItem from './TeamListItem';

const TeamPanel = (props) => {

    return (
        <table className="team-panel">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Lag</th>
                    <th>Poäng</th>
                </tr>
            </thead>
            <tbody>
                <TeamListItem data={props.data} />
            </tbody>
        </table>
    );
};

export default TeamPanel;
