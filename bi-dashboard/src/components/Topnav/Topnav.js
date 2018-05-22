import React, {Component} from 'react';
// import {IRecommendLogo} from '../assets/images/bi-logo.png';
import TopnavLinks from './TopnavLinks';

class Topnav extends Component{
    render(){
        return (
            <nav className="topnav">
                    <TopnavLinks />
            </nav>
        );
    }
}

export default Topnav;
