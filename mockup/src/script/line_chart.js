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
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: '#424241'
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




google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Månad', 'Mobile', 'Tablet', 'Desktop'],
          ['Jan', 1000, 400, 200],
          ['Feb', 1170, 460, 250],
          ['Mars', 660, 1120, 300],
          ['Apr', 1000, 400, 200],
          ['Maj', 1170, 460, 250],
          ['Jun', 660, 1120, 300],
          ['Jul', 1030, 540, 350],
          ['Aug', 1000, 400, 200],
          ['Sep', 1170, 460, 250],
          ['Okt', 660, 1120, 300],
          ['Nov', 1000, 400, 200],
          ['Dec', 1170, 460, 250]
['Copper', 8.94, '#b87333'],
        ]);

        var options = {
          chart: {
            title: 'Besökande enheter',
            subtitle: 'när rekommenderade svarar',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
