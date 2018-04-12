var speedCanvas = document.getElementById("myChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Antal tips",
    data: [0, 59, 55, 20, 20, 55, 40,55,16,23,57,96,23,56,12,57,84,23,68,65,32,97,12,42],
    lineTension: 0.3,
    fill: false,
    borderColor: '#8fc7ca',
    backgroundColor: 'transparent',
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
    data: [20, 15, 60, 60, 65, 30, 60, 34, 62,34,79,12,76,24,98,21,46,58,32,48,85,21,34,76,34],
    lineTension: 0.3,
    fill: false,
    borderColor: '#2a9a9e',
    backgroundColor: 'transparent',
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

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});
