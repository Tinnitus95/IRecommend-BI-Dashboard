var donutchart = document.querySelector('#donutchart').getContext('2d');

// let slice1,
//     slice2,
//     slice3;
//
// function setSliceValue(obj) {
//     slice1 = {title: obj.role1.title, recommendations: obj.role1.recommendations };
//     slice2 = {title: obj.role2.title, recommendations: obj.role2.recommendations };
//     slice3 = {title: obj.role3.title, recommendations: obj.role3.recommendations };
// }


var data = {
    datasets: [{
        data: [
            19, 24, 1
            // slice1.recommendations, slice2.recommendations, slice3.recommendations
        ],
        backgroundColor:[
         'rgba(255, 26, 179, 0.5)',
         'rgba(42, 154, 158, 0.5)',
          '#007185'
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Accounting Manager',
        'TESTPOSITION',
        'test'
        // slice1.title,
        // slice2.title,
        // slice3.title
    ]
};

var chartOptions = {
  title: {
    display: true,
    text: 'Success Stories'
  },
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      boxWidth: 30,
      fontColor: '#424241',
    }
}
};


var myPieChart = new Chart(donutchart,{
    type: 'doughnut',
    data: data,
    options: chartOptions
});
