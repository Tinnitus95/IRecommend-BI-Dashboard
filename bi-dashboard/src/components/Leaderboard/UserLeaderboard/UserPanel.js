import React, { Component } from 'react';
import UserListItem from './UserListItem';
import { injectIntl } from 'react-intl';
import {fetchTips} from '../../../actions';
import {connect} from 'react-redux';

class UserPanel extends Component {

    // componentDidMount(props){
    //     console.log(this.props);
    //     const accessToken = localStorage.getItem('access_token');
    //     const userData = this.props.data;
    //     // const newData = userData.slice(0);
    //
    //     if(!userData.length === 0 && accessToken){
    //         console.log(userData, accessToken);
    //         userData.forEach((user) => {
    //

    //         });
    //
    //     }
    // }

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

function mapStateToProps(state) {
    return {
        tips: state.tips
    }

}

export default connect(mapStateToProps,{fetchTips})(injectIntl(UserPanel));
