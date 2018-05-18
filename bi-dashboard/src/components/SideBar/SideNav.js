import React, {Component} from 'react';
// import {IRecommendLogo} from '../assets/images/bi-logo.png';
import SidebarLogo from './SidebarLogo'
import SidebarHeader from './SidebarHeader';
import SidebarWidgetLinks from './SidebarWidgetLinks';

import Auth from '../../Auth/Auth';

const auth = new Auth();



class SideNav extends Component{
    state= {
        username: ''
    }
    componentDidMount(){
        this.setState({
            username: auth.getProfile().given_name
        })
        
    }

    render(){
        return (
            <nav className="sidebar">
                <div className="fixed">
                    <SidebarHeader
                        name={this.state.username}
                    />
                    <SidebarWidgetLinks />
                    <SidebarLogo/>
                </div>
            </nav>
        );
    }
}

export default SideNav;
