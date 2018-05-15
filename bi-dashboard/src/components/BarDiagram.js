import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class BarDiagram extends Component {
  render() {
    if (!this.props.data) {
        return <div>Loading</div>;
    }
    return(
      <Bar
          data={this.props.data}
          width={500}
          height={350}
          options={{
              barValueSpacing: 60,
              title:{
                  display: true,
                  fontSize:25
              },
              legend:{
                  display: true,
                  position: 'top'
              }
          }}/>
      );
   }
}

    export default BarDiagram;
