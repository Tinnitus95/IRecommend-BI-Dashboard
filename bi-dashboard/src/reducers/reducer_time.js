import {FETCH_WEEK, FETCH_TIME} from '../actions';
import moment from 'moment';
import _ from 'lodash';

const daylabels= [];
const weeklabels = [];

for (var i = 24; i >= 1; i--) {
    daylabels.push(moment().add(-i, 'hours').format('HH'));
    console.log(daylabels);
}
for (var i = 7; i >= 1; i--) {
    weeklabels.push(moment().add(-i, 'days').format('Do'))
}

const defaultState = {
    chartData:{
        labels: daylabels,
        datasets:[
            {
                label: 'line-chart-total-tips',
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
                label: 'line-chart-total-answers',
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
            text: 'line-chart-tab-hourly',
            fontSize:25
        },
        legend:{
            display:true,
            position: "top"
        }
    },
    size: {
        width: 400,
        height: 250
    },
    weekChart:{
        labels: weeklabels,
        datasets:[
            {
                label: 'line-chart-total-tips',
                data: [/*1, 0, 0, 0, 1, 2, 2,3,6,2,1,12,9,3,4,4,12,16,21,18,12,6,4,1*/],
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
                label: 'line-chart-total-answers',
                data: [/*0, 0, 0, 0, 0, 1, 1, 2, 4,8,1,0,20,11,2,0,0,12,11,21,2,2,1,0,1*/],
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
            text: 'line-chart-tab-weekly',
            fontSize:25
        },
        legend:{
            display:true,
            position: "top"
        }
    }
}
export default function(state = defaultState, action){
    switch (action.type) {
        case FETCH_WEEK:
        const sortedByDate = action.payload.data.sort((a,b) => {
            return a.created < b.created ? 1: -1;
        });

        const weektips = [];
        const
            seven= [],
            six= [],
            five= [],
            four= [],
            three= [],
            two= [],
            one= [];

        var last7DayStart = moment().startOf('day').subtract(1,'week');
        var yesterdayEndOfRange = moment().endOf('day').subtract(1,'day');

        // console.log(sortedByDate);
        sortedByDate.forEach(recommendation => {
            if(moment(recommendation.created)
              .isBetween(last7DayStart, yesterdayEndOfRange)){
                  weektips.push(moment(recommendation.created).format('DD'));
                  if (moment(recommendation.created).format('Do') === moment().add(-1, 'days').format('Do')) {
                      one.push(moment(recommendation.created).format('Do'));
                  }
                  else if (moment(recommendation.created).format('Do') === moment().add(-2, 'days').format('Do')) {
                      two.push(moment(recommendation.created).format('Do'));
                  }
                  else if (moment(recommendation.created).format('Do') === moment().add(-3, 'days').format('Do')) {
                      three.push(moment(recommendation.created).format('Do'));
                  }
                  else if (moment(recommendation.created).format('Do') === moment().add(-4, 'days').format('Do')) {
                      four.push(moment(recommendation.created).format('Do'));
                  }
                  else if (moment(recommendation.created).format('Do') === moment().add(-5, 'days').format('Do')) {
                      five.push(moment(recommendation.created).format('Do'));
                  }
                  else if (moment(recommendation.created).format('Do') === moment().add(-6, 'days').format('Do')) {
                      six.push(moment(recommendation.created).format('Do'));
                  }
                  else if (moment(recommendation.created).format('Do') === moment().add(-7, 'days').format('Do')) {
                      seven.push(moment(recommendation.created).format('Do'));
                  }

              }
        })



        return{
            ...state,
            weekChart:{
                ...state.weekChart,
                datasets: state.weekChart.datasets.map(
                    (datasets, i) => i === 1 ?  datasets : {...datasets, data: [seven.length,six.length,five.length,four.length,three.length,two.length,one.length]}

                )


            }

        }

        case FETCH_TIME:
        const sortedByDate2 = action.payload.data.sort((a,b) => {
            return a.created < b.created ? 1: -1;
        });

        const todaysTips = sortedByDate2;
        console.log(todaysTips);
        return state;

    }
    return state;
}
