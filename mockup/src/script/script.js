let  positions = [],
     recommendations = [],
     userHiscore = [],
     teamHiscore = [],
     totalRecommendations = [];

let totalRec = document.querySelector("#total-rec"),
    interestedRec = document.querySelector("#interested-rec"),
    interviewedCan = document.querySelector("#interviewed-can"),
    employedCan = document.querySelector("#employed-can"),
    tipsPerPerson = document.querySelector("#tips-per-person"),
    teamLeader = document.querySelector('#first');


const API_URL = 'https://api.irecommend.se/api/v1/bi/';

window.onload = function() {
  // START FETCH
  getPositions();
  getRecommendations();
  getUserHiscore();
  getTeamHiscore();
  // END Fetch

  setTimeout( () => {
    getNumberVal();
    getPiechartVal();
  }, 1000);
}

// Fetch all positions and push it to positions array.
function getPositions() {
  fetch(`${API_URL}positions`)
  .then(response => response.json())
  .then(data => {
    data.forEach( pos => {
      positions.push(pos);
    });
  });
}

// Fetch all recommendations and push it to recommendations array.
function getRecommendations() {
  fetch(`${API_URL}recommendations`)
    .then(response => response.json())
    .then(data => {
      data.forEach( rec => {
        recommendations.push(rec);
    });
  });
}

// Fetch all user hiscore and push it to userHiscore array.
function getUserHiscore() {
  fetch(`${API_URL}transactions/sum/users`)
    .then(response => response.json())
    .then(data => {
      data.forEach( uhs => {
        userHiscore.push(uhs);
    });
  });
}

// Fetch all team hiscore and push it to teamHiscore array.
function getTeamHiscore() {
  fetch(`${API_URL}transactions/sum/teams`)
    .then(response => response.json())
    .then(data => {
      data.forEach( ths => {
        teamHiscore.push(ths);
    });
  });
}

// Get all number values for numberwidget sections
function getNumberVal() {
  let amount = recommendations
    .filter( total => { return total.notinterested === false });

  let candidates = recommendations
      .filter( state => { return state.state === 8});

  let employed = recommendations
      .filter( state => { return state.state === 11});

  let tipsPerPers = (recommendations.length / userHiscore.length);

  // pass properties to updateNumberWidgets function for displaying values
  updateNumberWidgets({amount, candidates, employed, tipsPerPers});
}

// Function to set text content on the numberwidgets in section 1
function updateNumberWidgets(obj) {
  totalRec.textContent = recommendations.length;
  interestedRec.textContent = obj.amount.length;
  interviewedCan.textContent = obj.candidates.length;
  employedCan.textContent = obj.employed.length;
  tipsPerPerson.textContent = obj.tipsPerPers;
}


function getPiechartVal() {
  let role1 = {title: positions[0].title, recommendations: positions[0].recommendations};
  let role2 = {title: positions[1].title, recommendations: positions[1].recommendations};
  let role3 = {title: positions[2].title, recommendations: positions[2].recommendations};

  // pass required data value to piechart function
  drawChart({role1, role2, role3});
}


// function updateNumberWidgets() {
//   totalRec.textContent = recommendations.length;
//   interestedRec.textContent = getInterestedRec();
//   interviewedCan.textContent = getInterviewedCan();
// }
//
// function getInterestedRec() {
//   let amount = recommendations
//     .filter( total => { return total.notinterested === false });
//
//   return amount.length;
// }
//
// function getInterviewedCan() {
// let candidates = recommendations
//     .filter( state => { return state.state === 8});
//
// return candidates.length;
// }








// Drag and drop function

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});



// function _(id){
//   return document.getElementById(id);
// }
//
// function drag_start(event){
//   event.dataTransfer.dropEffect = "move";
//   event.dataTransfer.setData("text", event.target.getAttribute('id') );
// }
//
// var droppedIn = false;
//
// function drop_end(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("Text");
//   var copy = document.createElement("h4");
//   var original = document.getElementById(data);
//
//   copy.innerHTML = original.innerHTML;
//   ev.target.appendChild(copy);
// }
