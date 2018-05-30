import React, { Component } from 'react';

class CompetitionPanel extends Component {
    render() {
        return(
            <progress 
                    max="100" 
                    value="10">
            </progress>
        );
    }
};

export default CompetitionPanel;