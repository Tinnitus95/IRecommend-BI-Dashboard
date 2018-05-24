import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class LineChart extends Component {
    constructor(props){
        super(props);
        this.state ={
            chartData: props.chartData,
            options: props.options,
            size: props.size

        }
    }
    // static defaultProps ={
    //     displayTitle: true,
    //     displayLegend: true,
    //     legendPosition: 'top'
    // }

    render(){
        return (
            <div className={this.props.classes}>
                <Line
                    data={this.state.chartData}
                    width={this.state.size.width}
                    height={this.state.size.height}
                    options={this.state.options}
                />
            </div>
        );
    }
}

export default LineChart;
