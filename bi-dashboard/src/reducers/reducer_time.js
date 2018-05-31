import {FETCH_TIME} from '../actions';
import moment from 'moment';


const defaultState = {
    chartData:{
        labels: ["01", "02", "03", "04", "05", "06", "07","08","09","10","11","12","13","14","15","16", "17","18","19","20","21","22","23","24"],
        datasets:[
            {
                label: 'line-chart-total-tips',
                data: [1, 0, 0, 0, 1, 2, 2,3,6,2,1,12,9,3,4,4,12,16,21,18,12,6,4,1],
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
        labels: ['line-chart-day-mon', 'line-chart-day-tue',  'line-chart-day-wed', 'line-chart-day-thu', 'line-chart-day-fri'],
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
        case FETCH_TIME:
        const sortedByDate = action.payload.data.sort((a,b) => {
            return a.created < b.created ? 1: -1;
        });
        const todaysTips = []

        sortedByDate.forEach(recommendation => {
            // console.log(new Date(recommendation.created));
            if(moment(recommendation.created).isSame(moment() , 'day')){
                todaysTips.push(recommendation.created)

            }

        })

        return {
            ...state,
            chartData:{
                ...state.chartData,
                datasets: state.chartData.datasets.map(
                    (datasets, i) => i === 1 ? {...datasets, data: todaysTips.length} : datasets

                )


            }

        }


    }
    return state;
}
