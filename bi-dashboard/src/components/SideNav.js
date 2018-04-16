import React, {Component} from 'react';
// import {IRecommendLogo} from '../assets/images/bi-logo.png';
import SidebarLogo from './SidebarLogo'
class SideNav extends Component{
    render(){
        return (
            <nav className="sidebar">
                <div className="sidebar-header">
                    <h3>Telenor</h3>
                    <h4>Anna-Lena</h4>
                </div>
                    <p>Visualisera Data</p>
                    <ul className="components">
                        <li>
                            <a>Highscore</a>
                            {/* Render list items here*/}
                        </li>
                        <li>
                            <a>Tid</a>
                            {/* Render list items here*/}
                        </li>
                        <li>
                            <a>Siffror</a>
                            {/* Render list items here*/}
                        </li>
                        <li>
                            <a>Återställ</a>
                            {/* Render list items here*/}
                        </li>
                    </ul>
                    <SidebarLogo/>
            </nav>
        );
    }
}

export default SideNav;
