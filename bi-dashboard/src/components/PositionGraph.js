import React, {Component} from 'react';
import BarDiagram from './BarDiagram';


export default class PositionGraph extends Component {

    render(){

      return (
        <div className="position-graph">
            <BarDiagram data={this.props.data} />
        </div>
    );
  }
}
