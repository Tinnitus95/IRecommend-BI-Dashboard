import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPositions} from '../actions';
import {Bar} from 'react-chartjs-2';
import _ from 'lodash';
class BarDiagram extends Component {
    constructor(props){
        super(props);
        this.state = {
            barData: {
                labels: [],
                datasets: [{
                    label: "Antal tips",
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    data: []
                }, {
                    label: "Days",
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    data: []
                }, {
                    label: "Yellow",
                    backgroundColor: 'rgba(255, 206, 86, 0.6)',
                    data: []
                }]
            }
        }
    }

    componentDidMount(){
        this.props.fetchPositions();

        setTimeout( () => {
            const unix_combine = [];
            const positions = this.props.positions;
            const title = this.props.positions.map( title => title.title);
            // const recommendations = this.props.position.map(recommendations => recommendations)
            const recData = this.props.positions.map( rec => rec.recommendations);

            const startDates = this.props.positions.map( start => start.startDate);
            let unix_start = []
            startDates.forEach(function(date){
                unix_start.push(((new Date(date)).getTime()) /1000);
            });

            const endDates = this.props.positions.map( end => end.endDate);
            let unix_end = []
            endDates.forEach(function(date){
                unix_end.push(((new Date(date)).getTime()) /1000);
            });

            for (var i = 0; i < unix_start.length; i++) {
                unix_combine.push((unix_end[i] - unix_start[i])/86400);
            }
            // console.log(unix_combine);
            // var unix_seconds = this.props.positions.map(unix_epoch => return {new Date((unix_epoch).getTime() /1000)})

            // console.log(unix_end);

            const barDataCopy = Object.assign({}, this.state.barData);
            barDataCopy.labels = title;
            barDataCopy.datasets[0].data = recData;
            barDataCopy.datasets[1].data = unix_combine;



            // barDataCopy.datasets[0].data = recommendations;

            /* let startDate = positions[0].startDate.slice(0,10);
            let start = startDate.split();

            let endDate = positions[0].endDate;

            console.log(`startDate: ${startDate} and endDate: ${endDate}`); */

            // console.log(positions);
            // console.log(startDates);



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
                    }
                }}/>
            );
        }
    }





    function mapStateToProps(state){
        // console.log(state.position);
        return {
            positions: state.positions

        };
    }

    export default connect(mapStateToProps, {fetchPositions})(BarDiagram);
