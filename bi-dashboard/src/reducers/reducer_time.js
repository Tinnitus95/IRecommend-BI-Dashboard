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
                data: [],
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

        const todaysTips = [];

        const a = [],b = [],c = [],d = [],e = [],f = [],g = [],h = [],i = [],j = [],k = [],l = [],m = [],
        n = [],o = [],p = [],q = [],r = [],s = [],t = [],u = [],v = [],w = [],x = [];
        var todayStart = moment().startOf('day').subtract(1,'day');
        var todayEndOfRange = moment().endOf('day').subtract(0,'hours');

        sortedByDate2.forEach(recommendation => {
            if(moment(recommendation.created)
              .isBetween(todayStart, todayEndOfRange)){
                  todaysTips.push(moment(recommendation.created).format('HH'));
                  if (moment(recommendation.created).format('HH') === moment().add(-1, 'hours').format('HH')) {
                      a.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-2, 'hours').format('HH')) {
                      b.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-3, 'hours').format('HH')) {
                      c.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-4, 'hours').format('HH')) {
                      d.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-5, 'hours').format('HH')) {
                      e.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-6, 'hours').format('HH')) {
                      f.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-7, 'hours').format('HH')) {
                      g.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-8, 'hours').format('HH')) {
                      h.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-9, 'hours').format('HH')) {
                      i.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-10, 'hours').format('HH')) {
                      j.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-11, 'hours').format('HH')) {
                      k.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-12, 'hours').format('HH')) {
                      l.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-13, 'hours').format('HH')) {
                      m.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-14, 'hours').format('HH')) {
                      n.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-15, 'hours').format('HH')) {
                      o.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-16, 'hours').format('HH')) {
                      p.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-17, 'hours').format('HH')) {
                      q.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-18, 'hours').format('HH')) {
                      r.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-19, 'hours').format('HH')) {
                      s.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-20, 'hours').format('HH')) {
                      t.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-21, 'hours').format('HH')) {
                      u.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-22, 'hours').format('HH')) {
                      v.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-23, 'hours').format('HH')) {
                      w.push(moment(recommendation.created).format('HH'));
                  }
                  else if (moment(recommendation.created).format('HH') === moment().add(-24, 'hours').format('HH')) {
                      x.push(moment(recommendation.created).format('HH'));
                  }

              }
        })

        return{
            ...state,
            chartData:{
                ...state.chartData,
                datasets: state.chartData.datasets.map(
                    (datasets, i) => i === 1 ?  datasets : {...datasets, data: [a.length,b.length,c.length,d.length,e.length,f.length,g.length,h.length,i.length,j.length,k.length,l.length,m.length,n.length,o.length,p.length,q.length,
                        r.length,s.length,t.length,
                        u.length,v.length,w.length,x.length].reverse()}

                )


            }

        }

    }
    return state;
}
