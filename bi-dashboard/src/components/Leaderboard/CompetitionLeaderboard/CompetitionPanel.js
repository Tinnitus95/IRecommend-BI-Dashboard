import React, { Component } from 'react';



class CompetitionPanel extends Component {
    render() {
        return(
            <div className="timeline">
                {/* goals */}
                <ol>
                    <li>
                        <div>
                            <h2>100 poäng</h2>
                            <p>Vi köper en hest</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>1000 poäng</h2>
                            <p>vi köper två hestar</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>10000 poäng</h2>
                            <p>vi köper tre hestar</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>100000 poäng</h2>
                            <p>vi köper fyra hestar</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>1000000 poäng</h2>
                            <p>vi köper fem hestar</p>
                        </div>
                    </li>
                </ol>

            
            </div>
        );
    }
};

export default CompetitionPanel;