import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import LineChart from './LineChart';

class LineCharts extends Component {
    state= {
        chartData:{}
    }

    componentWillMount(){
        this.getChartData();
    }
    getChartData(){
        this.setState({
            chartData:{
                labels: ["01", "02", "03", "04", "05", "06", "07","08","09","10","11","12","13","14","15","16", "17","18","19","20","21","22","23","24"],
                datasets:[
                    {
                        label: "Antal tips",
                        data: [1, 0, 0, 0, 1, 2, 2,3,6,2,1,12,9,3,4,4,12,16,21,18,12,6,4,1],
                        lineTension: 0.3,
                        fill: true,
                        borderColor: 'rgb(255, 102, 163)',
                        backgroundColor: 'rgba(255, 26, 179, 0.2)',
                        pointBorderColor: 'rgba(255, 102, 163, 0.2)',
                        pointBackgroundColor: 'rgb(255, 179, 217)',
                        pointRadius: 5,
                        pointHoverRadius: 15,
                        pointHitRadius: 30,
                        pointBorderWidth: 2,
                        pointStyle: 'circle'
                    },
                    {
                        label: "Antal svar",
                        data: [0, 0, 0, 0, 0, 1, 1, 2, 4,8,1,0,20,11,2,0,0,12,11,21,2,2,1,0,1],
                        lineTension: 0.3,
                        fill: true,
                        borderColor: '#2a9a9e',
                        backgroundColor: 'rgba(42, 154, 158, 0.2)',
                        pointBorderColor: '#2a9a9e',
                        pointBackgroundColor: '#8fc7ca',
                        pointRadius: 5,
                        pointHoverRadius: 15,
                        pointHitRadius: 30,
                        pointBorderWidth: 2
                    }

                ]

            },
            options: {
                title:{
                    display:true,
                    text: 'DayData',
                    fontSize:25
                },
                legend:{
                    display:true,
                    position: "top"
                }
            },
            size: {
                width: 800,
                height: 200
            },
            weekChart:{
                labels: ["mon", "tue", "wed", "thu", "fri"],
                datasets:[
                    {
                        label: "Antal tips",
                        data: [1, 0, 0, 0, 1, 2, 2,3,6,2,1,12,9,3,4,4,12,16,21,18,12,6,4,1],
                        lineTension: 0.3,
                        fill: true,
                        borderColor: 'rgb(255, 102, 163)',
                        backgroundColor: 'rgba(255, 26, 179, 0.2)',
                        pointBorderColor: 'rgba(255, 102, 163, 0.2)',
                        pointBackgroundColor: 'rgb(255, 179, 217)',
                        pointRadius: 5,
                        pointHoverRadius: 15,
                        pointHitRadius: 30,
                        pointBorderWidth: 2,
                        pointStyle: 'circle'
                    },
                    {
                        label: "Antal svar",
                        data: [0, 0, 0, 0, 0, 1, 1, 2, 4,8,1,0,20,11,2,0,0,12,11,21,2,2,1,0,1],
                        lineTension: 0.3,
                        fill: true,
                        borderColor: '#2a9a9e',
                        backgroundColor: 'rgba(42, 154, 158, 0.2)',
                        pointBorderColor: '#2a9a9e',
                        pointBackgroundColor: '#8fc7ca',
                        pointRadius: 5,
                        pointHoverRadius: 15,
                        pointHitRadius: 30,
                        pointBorderWidth: 2
                    }

                ]

            },
            weekOptions:{
                title:{
                    display:true,
                    text: 'weekData',
                    fontSize:25
                },
                legend:{
                    display:true,
                    position: "top"
                }
            }
        });
    }
    render() {
        return(
            <Tabs>
                <TabList>
                    <Tab>Klockslag</Tab>
                    <Tab>Veckodag</Tab>
                </TabList>
                <TabPanel>
                    <LineChart
                        chartData={this.state.chartData}
                        options={this.state.options}
                        size={this.state.size}
                    />
                </TabPanel>
                <TabPanel>
                    <LineChart
                        chartData={this.state.weekChart}
                        options={this.state.weekOptions}
                        size={this.state.size}
                    />
                </TabPanel>
            </Tabs>
        );
    }
}

export default LineCharts;