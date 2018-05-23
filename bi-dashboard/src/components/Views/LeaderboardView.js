import React, {Component} from 'react';
import UserOrbs from '../UserOrbs';
import _ from 'lodash';

class LeaderboardView extends Component {


    renderTop(){
        const {userscore} = this.props.data;
        const topThree = userscore.slice(0,3);

        for (var i = 0; i < topThree.length; i++) {

            if( i === 0 ){
                topThree[i].classes = 'leader';
            }
            else{
                topThree[i].classes = 'not-leader'
            }
            topThree[i].position = i +1;


        }
        console.log(topThree);
        return _.map(topThree, top => {
            return <UserOrbs
                key= {top.id}
                top= {top}

            />;
        })
    }
    render(){


        return (
            <div className="leaderboard-view">
                <div className="top-three">
                    {this.renderTop()}
                </div>
            </div>
        );
    }
}

export default LeaderboardView;
