import React, {Component} from 'react';
import BarDiagram from './BarDiagram';


export default class PositionGraph extends Component {

    render(){
      console.log(this.props.data);

      return (
        <div className="position-graph">
            <BarDiagram data={this.props.data} />
        </div>
    );
  }
}
