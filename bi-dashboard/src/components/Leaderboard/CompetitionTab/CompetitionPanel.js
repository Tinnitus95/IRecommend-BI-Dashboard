import React from 'react';

// initial work for the CompetitionPanel
const CompetitionPanel = (props) => {
    // get props from Leaderboard.js
    let data = {};
    let totalScore = 0;
    if(props.data[0]){
        data = props.data[0].data.goals[1];
    }
    //Get the total score for the company
    if (props.users.length > 0) {
        const usersScore = props.users.filter(score => score.points).map(score => score.points);
        totalScore = usersScore.reduce((a, b) => a + b);
        console.log(totalScore);
    }
    return(
        //Draw up a progressbar with the value of totalScore
        <div className="progress-bar-wrapper">
            <progress max={data.points} value={totalScore}></progress>
        </div>
    );

};

export default CompetitionPanel;
