import React from 'react';

const CompetitionPanel = (props) => {
    let data = {};
    let totalScore = 0;
    console.log(props.users);
    if(props.data[0]){
        data = props.data[0].data.goals[1];
    }

    if (props.users.length > 0) {
        const usersScore = props.users.filter(score => score.points).map(score => score.points);
        totalScore = usersScore.reduce((a, b) => a + b);
    }
        return(
            <div className="progress-bar-wrapper">
                <progress max={data.points} value={totalScore}></progress>
            </div>
        );
    
};

export default CompetitionPanel;
