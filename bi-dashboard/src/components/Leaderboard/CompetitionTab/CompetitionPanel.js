import React, { Component } from 'react';

class CompetitionPanel extends Component {
    render() {
        return(
            <div className="progress-bar-wrapper">
                <progress max="100" value="40"></progress>
            </div>
        );
    }
};

export default CompetitionPanel;
