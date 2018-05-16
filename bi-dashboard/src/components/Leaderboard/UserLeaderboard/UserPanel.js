import React, { Component } from 'react';
import UserListItem from './UserListItem';
import { injectIntl } from 'react-intl';


class UserPanel extends Component {
  render() {
    const { intl } = this.props;
    return (
        <table className="user-panel">
          <thead>
            <tr>
              <th>{intl.formatMessage({ id: 'leaderboard-rank' })}</th>
              <th>{intl.formatMessage({ id: 'leaderboard-user' })}</th>
              <th>{intl.formatMessage({ id: 'leaderboard-tips' })}</th>
              <th>{intl.formatMessage({ id: 'leaderboard-score' })}</th>
            </tr>
          </thead>
          <tbody>
            <UserListItem data={this.props.data} />
          </tbody>
        </table>
    );
  }
};

export default injectIntl(UserPanel);
