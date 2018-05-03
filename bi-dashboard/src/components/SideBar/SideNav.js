import React, {Component} from 'react';
// import {IRecommendLogo} from '../assets/images/bi-logo.png';
import SidebarLogo from './SidebarLogo'
import SidebarHeader from './SidebarHeader';
import SidebarWidgetLinks from './SidebarWidgetLinks';

class SideNav extends Component{
    render(){
        return (
            <nav className="sidebar">
                <div className="fixed">
                    <SidebarHeader
                        name="Anna-Lena"
                        company="Telenor"
                    />
                    <SidebarWidgetLinks />
                    <SidebarLogo/>
                </div>
            </nav>
        );
    }
}

export default SideNav;
