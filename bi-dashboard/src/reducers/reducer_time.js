import {FETCH_WEEK, FETCH_TIME} from '../actions';
import moment from 'moment';
import _ from 'lodash';

const daylabels= [];
const weeklabels = [];

for (var i = 24; i >= 1; i--) {
    daylabels.push(moment().add(-i, 'hours').format('HH'));

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
                data: [],
                lineTension: 0.3,
                fill: true,
                borderColor: 'rgb(98, 58, 162)',
                backgroundColor: 'rgba(98, 58, 165, 0.2)',
                pointBorderColor: 'rgb(98, 58, 162, 0.2)',
                pointBackgroundColor: 'rgba(98, 58, 162)',
                pointRadius: 5,
                pointHoverRadius: 15,
                pointHitRadius: 30,
                pointBorderWidth: 2,
                pointStyle: 'circle'
            },
            {
                label: 'line-chart-total-answers',
                data: [],
                lineTension: 0.3,
                fill: true,
                borderColor: 'rgb(139, 212, 206)',
                backgroundColor: 'rgba(139, 212, 206, 0.2)',
                pointBorderColor: 'rgba(139, 212, 206, 0.2)',
                pointBackgroundColor: 'rgb(139, 212, 206)',
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
                borderColor: 'rgb(98, 58, 162)',
                backgroundColor: 'rgba(98, 58, 165, 0.2)',
                pointBorderColor: 'rgb(98, 58, 162, 0.2)',
                pointBackgroundColor: 'rgba(98, 58, 162)',
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
                borderColor: 'rgb(139, 212, 206)',
                backgroundColor: 'rgba(139, 212, 206, 0.2)',
                pointBorderColor: 'rgba(139, 212, 206, 0.2)',
                pointBackgroundColor: 'rgb(139, 212, 206)',
                pointRadius: 5,
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


            var last7DayStart = moment().startOf('day').subtract(1,'week');
            var yesterdayEndOfRange = moment().endOf('day').subtract(1,'day');

            var weekHits = new Array(6);
            for (var i=0;i < 7; i++) {
                weekHits[i] = 0;
            }

            sortedByDate.forEach(recommendation => {
                if(moment(recommendation.created)
                  .isBetween(last7DayStart, yesterdayEndOfRange)){
                        console.log(recommendation.created);
                      for (var j=0;j < 7; j++) {
                        if (moment(recommendation.created).format('Do') === moment().add(-(j + 1), 'days').format('Do')) {
                             weekHits[j]++;
                             break;
                         }
                      }

                  }
            })
            console.log(weekHits);



        return{
            ...state,
            weekChart:{
                ...state.weekChart,
                datasets: state.weekChart.datasets.map(
                    (datasets, i) => i === 1 ?  datasets : {...datasets, data: weekHits.reverse()}

                )


            }

        }

        case FETCH_TIME:
            const sortedByDate2 = action.payload.data.sort((a,b) => {
                return a.created < b.created ? 1: -1;
            });


            var hourHits = new Array(24);
            for (var i=0;i < 24; i++) {
                hourHits[i] = 0;
            }

            var todayStart = moment().subtract(24,'hours').format();

            console.log(moment().subtract(24,'hours').format());
            var todayEndOfRange = moment().format();
            console.log(moment());
            sortedByDate2.forEach(recommendation => {
                    // HACK: Need to format timestamp from DB to Local timezone
                if(moment(recommendation.created).add(-2, 'hours')
                  .isBetween(todayStart, todayEndOfRange)){
                        console.log(moment(recommendation.created).format('HH'));
                      for (var j=0;j < 24; j++) {
                        if (moment(recommendation.created).format('HH') === moment().add(-(j + 1), 'hours').format('HH')) {
                             hourHits[j]++;
                             break;
                         }
                      }

                  }
            })
            console.log(hourHits);


            return{
                ...state,
                chartData:{
                    ...state.chartData,
                    datasets: state.chartData.datasets.map(
                        (datasets, i) => i === 1 ?  datasets : {...datasets, data: hourHits.reverse()}

                    )
                }
            }
    }
    return state;
}
