import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';


class TopnavLinks extends Component {
    render() {
        return(
            <div className="topnav">
                <ul className="topnav-links">
                    <li>
                        <NavLink to="/dashboard/default" activeClassName='active-link'>
                        <FontAwesome
                            className='fontawesome'
                            name='home' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/numbers" activeClassName='active-link'>
                        <FontAwesome
                            className='fontawesome'
                            name='list-ol'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/highscores" activeClassName='active-link'>
                        <FontAwesome
                            className='fontawesome'
                            name='trophy'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/time" activeClassName='active-link'>
                        <FontAwesome
                            className='fontawesome'
                            name='clock'/>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
};

export default TopnavLinks;
