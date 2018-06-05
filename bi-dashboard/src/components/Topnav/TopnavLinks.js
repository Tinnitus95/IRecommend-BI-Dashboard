import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import FontAwesome from 'react-fontawesome';


class TopnavLinks extends Component {
    render() {
    const { intl } = this.props;
        return(
        <ul className="topnav-links">
            <li>
                <NavLink to="/dashboard/default" activeClassName='active-link'>
                <FontAwesome
                  className='fontawesome'
                  name='home' />
                  {/* {intl.formatMessage({ id: 'sidebar-route-default' })} */}
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/numbers" activeClassName='active-link'>
                <FontAwesome
                  className='fontawesome'
                  name='list-ol'/>
                  {/* {intl.formatMessage({ id: 'sidebar-route-numbers' })} */}
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/highscores" activeClassName='active-link'>
                <FontAwesome
                  className='fontawesome'
                  name='trophy'/>
                  {/* {intl.formatMessage({ id: 'sidebar-route-highscore' })} */}
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/time" activeClassName='active-link'>
                <FontAwesome
                  className='fontawesome'
                  name='clock'/>
                  {/* {intl.formatMessage({ id: 'sidebar-route-time-graphs' })} */}
                </NavLink>
            </li>

        </ul>
        );
    }
};

export default injectIntl(TopnavLinks);
