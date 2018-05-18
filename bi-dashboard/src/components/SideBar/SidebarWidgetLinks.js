import React from 'react';
import {NavLink} from 'react-router-dom'
const sidebarWidgetLinks = () => (
    <ul className="sidebar-widget-links">
        <li>
            <NavLink to="/home">Default</NavLink>
        </li>
        <li>
            <NavLink to="/numbers">Siffror</NavLink>
        </li>
        <li>
            <NavLink to="/highscores">Highscores</NavLink>
        </li>
        <li>
            <NavLink to="/time">Tids-grafer</NavLink>
        </li>
    </ul>
);

export default sidebarWidgetLinks;
