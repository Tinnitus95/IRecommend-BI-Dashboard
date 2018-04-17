let gv1 = {value: 69},
    gv2 = {value: 46},
    gv3 = {value: 36};

document.addEventListener("DOMContentLoaded", function(event) {





// function start(value, max) {
  var g1 = new JustGage({
  id: 'g1',
  value: gv1.value,
  min: 0,
  max: 100,
  symbol: '%',
  pointer: true,
  title: "Registrerade medarbetare \n (totalt)",
  valueFontColor: "#424241",
  gaugeWidthScale: 0.6,
  levelColors: [
    "#43bbb6",
    "#22969d",
    "#017085"

  ],
  counter: true
});var g2 = new JustGage({
  id: 'g2',
  value: gv2.value,
  min: 0,
  max: 100,
  symbol: '%',
  pointer: true,
  title: "Medarbetare som tipsat \n (av dom registrerade)",
  valueFontColor: "#424241",
  gaugeWidthScale: 0.6,
  levelColors: [
    "#43bbb6",
    "#22969d",
    "#017085"

  ],
  counter: true
});var g3 = new JustGage({
  id: 'g3',
  value: gv3.value,
  min: 0,
  max: 100,
  symbol: '%',
  pointer: true,
  title: "Tipsade kandidater som visat intresse",
  valueFontColor: "#424241",
  gaugeWidthScale: 0.6,
  levelColors: [
    "#43bbb6",
    "#22969d",
    "#017085"

  ],
  counter: true
  });
});
// }



  // document.getElementById('gauge_refresh').addEventListener('click', function() {
  //   g1.refresh(getRandomInt(0, 100));
  //   g2.refresh(getRandomInt(0, 100));
  //   g3.refresh(getRandomInt(0, 100));
  //   g4.refresh(getRandomInt(0, 100));
  // });
