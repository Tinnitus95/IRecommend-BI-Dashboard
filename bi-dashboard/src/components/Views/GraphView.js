import React, {Component} from 'react';
import LineChart from '../LineChart';
import { injectIntl } from 'react-intl';
import {connect} from 'react-redux';
import {fetchIdvBar} from '../../actions';
import BarDiagram from '../BarDiagram';
import Aux from '../ReactAux';



class GraphView extends Component {
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
                <LineChart
                    chartData={this.props.time.chartData}
                    options={this.props.time.options}
                    size={this.props.time.size}
                    classes="graphView-lineChart" />
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

function mapStateToProps(state){
    return {
        time: state.time,
        positions: state.idvBar
    };
}


export default connect(mapStateToProps, {fetchIdvBar})(GraphView);
