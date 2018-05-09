import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPositions} from '../actions';
import {Bar} from 'react-chartjs-2';

class BarDiagram extends Component {
    constructor(props){
        super(props);
        this.state = {
            barData: {
                labels: ['efwewveewf', 'afqefqef', 'qefqeqefvfeq'],
                datasets: [{
                label: "Red",
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                data: [5, 6, 4]
            }, {
                label: "Blue",
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                data: [4, 5, 5]
            }, {
                label: "Yellow",
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
                data: [6, 6, 6]
            }]
        }
        }
    }

    componentDidMount(){
        
        this.props.fetchPositions();
    }

clickHandler = () => {
    console.log(this.props.positions);
    
}

    render() {
        return(
            <div>
            <button onClick={this.clickHandler}></button>
                <Bar
	              data={this.state.barData}
                  width={1000}
      	        height={400}
	              options={{
                      barValueSpacing: 60,
            title:{
              display: true,
              fontSize:25
            },
            legend:{
              display: true,
              position: 'top'
          },
          scales: {
          yAxes: [{
        ticks: {
          min: 0,
          max: 10
      }
    }]
  }
          }}
/>
            </div>
        )
    }
}





function mapStateToProps(state){
    return {
        positions: state.positions
        
    };
}

export default connect(mapStateToProps, {fetchPositions})(BarDiagram);


