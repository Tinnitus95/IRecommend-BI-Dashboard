var speedCanvas = document.getElementById("myChart1");
var weekcanvas = document.getElementById("myChart2");


Chart.defaults.global.defaultFontFamily = "Roboto";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Antal tips",
    data: [1, 0, 0, 0, 1, 2, 2,3,6,2,1,12,9,3,4,4,12,16,21,18,12,6,4,1],
    lineTension: 0.3,
    fill: true,
    borderColor: '#8fc7ca',
    backgroundColor: 'rgba(143, 198, 201, 0.1)',
    pointBorderColor: '#8fc7ca',
    pointBackgroundColor: '#2a9a9e',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle'
  };

var dataSecond = {
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
  };

var speedData = {
  labels: ["01", "02", "03", "04", "05", "06", "07","08","09","10","11","12","13","14","15","16", "17","18","19","20","21","22","23","24"],
  datasets: [dataFirst, dataSecond]
};

var weekData = {
  labels: ["mon", "tue", "wed", "thu", "fri"],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  title: {
    display: true,
    text: 'Svarfrekvens per timme'
  },
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: '#424241',
    }
  }
};
var lineChart1 = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});

var lineChart2 = new Chart(weekcanvas, {
    type:'line',
    data: weekData,
    options: chartOptions
});



// ------------------------------------------- linebar   --------------------------


// 
// var ctx = document.getElementById("columnchart_material").getContext("2d");
//
// var data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
//   datasets: [{
//     label: "Mobil",
//     backgroundColor: "rgba(143, 199, 202, 0.9)",
//     data: [100, 110, 120, 105, 195, 188, 167, 198, 175, 181, 104, 156]
//   }, {
//     label: "Tablet",
//     backgroundColor: "rgba(5, 109, 114, 0.9)",
//     data: [101, 95, 51, 81, 104, 156, 134, 122, 201, 178, 172, 114]
//   }, {
//     label: "Dator",
//     backgroundColor: "rgba(42, 154, 158, 0.9)",
//     data: [299, 288, 245, 233, 294, 278, 289, 267, 285, 292, 301, 218]
//   }]
// };
//
// var myBarChart = new Chart(ctx, {
//   type: 'bar',
//   data: data,
//   options: {
//     title: {
//       display: true,
//       text: 'Enheter som rekommenderade svarar ifrån'
//     } ,
//     barValueSpacing: 20,
//     scales: {
//       yAxes: [{
//         ticks: {
//           min: 0,
//         }
//       }]
//     }
//   }
// });
