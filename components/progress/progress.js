//
// window.onload = function() {
//   var can = document.getElementById('canvas1'),
//       spanProcent = document.getElementById('procent1'),
//        c = can.getContext('2d');
//
//   var posX = can.width / 2,
//       posY = can.height / 2,
//       fps = 1000 / 200,
//       procent = 0,
//       oneProcent = 360 / 100,
//       result = oneProcent * 100;
//
//   c.lineCap = 'round';
//   arcMove();
//
//   function arcMove(){
//     var deegres = 0;
//     var acrInterval = setInterval (function() {
//       deegres += 1;
//       c.clearRect( 0, 0, can.width, can.height );
//       procent = deegres / oneProcent;
//
//       spanProcent.innerHTML = procent.toFixed();
//
//       c.beginPath();
//       c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
//       c.strokeStyle = '#b1b1b1';
//       c.lineWidth = '10';
//       c.stroke();
//
//       c.beginPath();
//       c.strokeStyle = '#3949AB';
//       c.lineWidth = '10';
//       c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
//       c.stroke();
//       if( deegres >= result ) clearInterval(acrInterval);
//     }, fps);
//
//   }
//
//
// }

var gauge = new RadialGauge({
    renderTo: 'canvas-id',
    width: 300,
    height: 300,
    units: "Km/h",
    minValue: 0,
    startAngle: 90,
    ticksAngle: 180,
    valueBox: false,
    maxValue: 220,
    majorTicks: [
        "0",
        "20",
        "40",
        "60",
        "80",
        "100",
        "120",
        "140",
        "160",
        "180",
        "200",
        "220"
    ],
    minorTicks: 2,
    strokeTicks: true,
    highlights: [
        {
            "from": 160,
            "to": 220,
            "color": "rgba(200, 50, 50, .75)"
        }
    ],
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    animationDuration: 1500,
    animationRule: "linear"
}).draw();
