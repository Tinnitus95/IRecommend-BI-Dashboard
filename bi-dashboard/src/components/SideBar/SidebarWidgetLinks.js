import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { injectIntl } from 'react-intl';


class sidebarWidgetLinks extends Component {
    render() {
    const { intl } = this.props;
        return(
        <ul className="sidebar-widget-links">
            <li>
                <NavLink to="/home">{intl.formatMessage({ id: 'sidebar-route-default' })}</NavLink>
            </li>
            <li>
                <NavLink to="/numbers">{intl.formatMessage({ id: 'sidebar-route-numbers' })}</NavLink>
            </li>
            <li>
                <NavLink to="/highscores">{intl.formatMessage({ id: 'sidebar-route-highscore' })}</NavLink>
            </li>
            <li>
                <NavLink to="/time">{intl.formatMessage({ id: 'sidebar-route-time-graphs' })}</NavLink>
            </li>
        </ul>
        );
    }
};

export default injectIntl(sidebarWidgetLinks);
