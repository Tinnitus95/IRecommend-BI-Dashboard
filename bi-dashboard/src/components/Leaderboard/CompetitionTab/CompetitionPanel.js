import React from 'react';

const CompetitionPanel = (props) => {
        let data = {};
        if(props.data[0]){
            data = props.data[0].data.goals[1];
        }

        return(
            <div className="progress-bar-wrapper">
                <progress max="60000" value={data.points}></progress>
            </div>
        );
    
};

export default CompetitionPanel;
