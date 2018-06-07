import React, {Component} from 'react';
import { injectIntl } from 'react-intl';
import {connect} from 'react-redux';

import LineChart from '../LineChart';
import BarDiagram from '../BarDiagram';

class GraphView extends Component {
    //create a bar chart for every data
    renderBarcharts(){
        return this.props.positions.map( bar => {
            return(
                <div className="idv-bar" key={bar.id}>
                    <BarDiagram data={bar} />
                </div>
            );
        })
    }

    render(){
        return (
            <div>
                <div className="row">
                    {/* set required props for hourchart */}
                    <LineChart
                        chartData={this.props.time.chartData}
                        options={this.props.time.options}
                        size={this.props.time.size}
                        classes="graphView-lineChart" />
                        {/* set required props for weekChart */}
                        <LineChart
                            chartData={this.props.time.weekChart}
                            options={this.props.time.weekOptions}
                            size={this.props.time.size}
                            classes="graphView-lineChart" />
                        </div>
                        <div className="row">
                            {this.renderBarcharts()}
                        </div>
                    </div>
                );
            }
    }

    //map application state to component
    function mapStateToProps(state){
        return {
            time: state.time,
            positions: state.idvBar
        };
    }

export default connect(mapStateToProps)(GraphView);
