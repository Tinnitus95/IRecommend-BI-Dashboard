import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPositions} from '../actions';
import {Bar} from 'react-chartjs-2';

class BarDiagram extends Component {
    constructor(props){
        super(props);
        this.state = {
            barData: {
                labels: [],
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
        
        setTimeout( () => {
            const title = this.props.positions.map( title => title.title);
            const positions = this.props.positions;
            const barDataCopy = Object.assign({}, this.state.barData);
            barDataCopy.labels = title;
            barDataCopy.
            
            /* let startDate = positions[0].startDate.slice(0,10);
            let start = startDate.split();
            
            let endDate = positions[0].endDate;

            console.log(`startDate: ${startDate} and endDate: ${endDate}`); */

            console.log(positions);
            

        

            // försöker att uppdatera statet med våra labels så vi inte har hårdkodad data
            // dock blir det undefined vet inte om man måste in i barData först eller om man
            // kan välja labels direkt i setState ?
            
            this.setState({
                barData: barDataCopy 
            });
            
        
        }, 2000);
    }

    render() {
        
        return(
            <Bar
	            data={this.state.barData}
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
                },
                scales: {
                yAxes: [{
                ticks: {
                min: 0,
                max: 10
                }
                }]
              }
            }}/>
        );
    }
}





function mapStateToProps(state){
    return {
        positions: state.positions
        
    };
}

export default connect(mapStateToProps, {fetchPositions})(BarDiagram);

