import React, {Component} from 'react';
import LineChart from '../LineChart';
import { injectIntl } from 'react-intl';
import {connect} from 'react-redux';
import {fetchTime, fetchPositions} from '../../actions';
import BarDiagram from '../BarDiagram';
import Aux from '../ReactAux';
import _ from 'lodash';


class GraphView extends Component {
    state= {
        chartData:{}
    }

    // renderBarcharts(){
    //   this.props.positions.datasets.map( bar => {
    //     return(
    //
    //     );
    //   });
    // }

    renderBarcharts(){
        return _.map(this.props.positions, bar => {
            return <BarDiagram data={this.props.positions}/>
        });
    }




    render(){
      console.log(this.props.positions.datasets);
      return (
          <div>
            <div className="row">
                    <LineChart
                        chartData={this.props.time.chartData}
                        options={this.props.time.options}
                        size={this.props.time.size}
                        classes="test"
                    />
                    <LineChart
                        chartData={this.props.time.weekChart}
                        options={this.props.time.weekOptions}
                        size={this.props.time.size}
                        classes="test"
                    />
            </div>
            <div className="row">
                {this.renderBarcharts()}
                {/* <BarDiagram data={this.props.positions} /> */}
            </div>


          </div>

        );
    }
}

function mapStateToProps(state){
    return {
        time: state.time,
        positions: state.positions
    };
}


export default connect(mapStateToProps, {fetchTime, fetchPositions})(GraphView);
