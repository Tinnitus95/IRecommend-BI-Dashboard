document.addEventListener("DOMContentLoaded", function(event) {

// function start(value, max) {
  var g1 = new JustGage({
  id: 'g1',
  value: 20,
  min: 0,
  max: 100,
  symbol: '%',
  pointer: true,
  gaugeWidthScale: 0.6,
  levelColors: [
    "#43bbb6",
    "#22969d",
    "#017085"

  ],
  counter: true
});var g2 = new JustGage({
  id: 'g2',
  value: 45,
  min: 0,
  max: 100,
  symbol: '%',
  pointer: true,
  gaugeWidthScale: 0.6,
  levelColors: [
    "#43bbb6",
    "#22969d",
    "#017085"

  ],
  counter: true
});var g3 = new JustGage({
  id: 'g3',
  value: 6000,
  min: 0,
  max: 40000,
  symbol: 'st',
  pointer: true,
  gaugeWidthScale: 0.6,
  levelColors: [
    "#43bbb6",
    "#22969d",
    "#017085"

  ],
  counter: true
});var g4 = new JustGage({
  id: 'g4',
  value: 10,
  min: 0,
  max: 100,
  symbol: '%',
  pointer: true,
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
