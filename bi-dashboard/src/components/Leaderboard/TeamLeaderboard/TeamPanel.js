import React, { Component } from 'react';
import TeamListItem from './TeamListItem';
import { injectIntl } from 'react-intl';

class TeamPanel extends Component {
    render() {
        const { intl } = this.props;
        return (
            <table className="team-panel">
                <thead>
                    <tr>
                        <th>{intl.formatMessage({ id: 'leaderboard-rank' })}</th>
                        <th>{intl.formatMessage({ id: 'leaderboard-team' })}</th>
                        <th>Medlemmar</th>
                        <th>{intl.formatMessage({ id: 'leaderboard-score' })}</th>
                    </tr>
                </thead>
                <tbody>
                    <TeamListItem data={this.props.data} />
                </tbody>
            </table>
        );
    }
};

export default injectIntl(TeamPanel);
