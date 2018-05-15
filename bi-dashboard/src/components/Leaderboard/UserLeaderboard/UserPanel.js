import React from 'react';
import UserListItem from './UserListItem';

const UserPanel = (props) => {
  return (
      <table className="user-panel">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Användare</th>
            <th>Tips</th>
            <th>Poäng</th>
          </tr>
        </thead>
        <tbody>
          <UserListItem data={props.data} />
        </tbody>
      </table>

  );
};

export default UserPanel;
