let  positions = [],
     recommendations = [],
     userHiscore = [],
     teamHiscore = [];

    //Numbers widget
let totalRec = document.querySelector("#total-rec"),
    interestedRec = document.querySelector("#interested-rec"),
    interviewedCan = document.querySelector("#interviewed-can"),
    employedCan = document.querySelector("#employed-can"),
    tipsPerPerson = document.querySelector("#tips-per-person");

      //Tips solo hiscore 1-5
let tipsFirstName = document.querySelector('#tips-first-name'),
    tipsFirstTips = document.querySelector("#tips-first-tips"),
    tipsFirstLogo = document.querySelector("#tips-first-logo"),
    tipsSecondName = document.querySelector('#tips-second-name'),
    tipsSecondTips = document.querySelector("#tips-second-tips"),
    tipsSecondLogo = document.querySelector("#tips-second-logo"),
    tipsThirdName = document.querySelector('#tips-third-name'),
    tipsThirdTips = document.querySelector("#tips-third-tips"),
    tipsThirdLogo = document.querySelector("#tips-third-logo"),

    //Solo hiscore 1-5
    soloFirstName = document.querySelector('#solo-first-name'),
    soloFirstScore = document.querySelector('#solo-first-score'),
    soloFirstTips = document.querySelector("#solo-first-tips"),
    soloFirstLogo = document.querySelector("#solo-first-logo"),
    soloSecondName = document.querySelector('#solo-second-name'),
    soloSecondScore = document.querySelector('#solo-second-score'),
    soloSecondTips = document.querySelector("#solo-second-tips"),
    soloSecondLogo = document.querySelector("#solo-second-logo"),
    soloThirdName = document.querySelector('#solo-third-name'),
    soloThirdScore = document.querySelector('#solo-third-score'),
    soloThirdTips = document.querySelector("#solo-third-tips"),
    soloThirdLogo = document.querySelector("#solo-third-logo"),

    //Team hiscore 1-5
    teamFirstName = document.querySelector('#team-first-name'),
    teamFirstScore = document.querySelector('#team-first-score'),
    teamFirstLogo = document.querySelector("#team-first-logo"),
    teamSecondName = document.querySelector('#team-second-name'),
    teamSecondScore = document.querySelector('#team-second-score'),
    teamSecondLogo = document.querySelector("#team-second-logo"),
    teamThirdName = document.querySelector('#team-third-name'),
    teamThirdScore = document.querySelector('#team-third-score'),
    teamThirdLogo = document.querySelector("#team-third-logo");

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
    updateTeamScores();
    updatePlayerScores();


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






function updateTeamScores(){

        // console.log(array.team.name);
        //Display name, score, profilepicture for top team 1-5
        teamFirstName.textContent = teamHiscore[0].team.name;
        teamFirstScore.textContent = teamHiscore[0].points.Int64;
        teamFirstLogo.src = teamHiscore[0].team.picture;

        teamSecondName.textContent = teamHiscore[1].team.name;
        teamSecondScore.textContent = teamHiscore[1].points.Int64;
        teamSecondLogo.src = teamHiscore[1].team.picture;

        teamThirdName.textContent = teamHiscore[2].team.name;
        teamThirdScore.textContent = teamHiscore[2].points.Int64;
        teamThirdLogo.src = teamHiscore[2].team.picture;

}

function updatePlayerScores(){

    soloFirstName.textContent = `${userHiscore[0].user.givenname} ${userHiscore[0].user.familyname}`
    soloFirstScore.textContent = userHiscore[0].points.Int64;
    soloFirstTips.textContent = userHiscore[0].points.Int64;
    soloFirstLogo.src = userHiscore[0].user.picture;

    soloSecondName.textContent = `${userHiscore[1].user.givenname} ${userHiscore[1].user.familyname}`
    soloSecondScore.textContent = userHiscore[1].points.Int64;
    soloSecondTips.textContent = userHiscore[1].points.Int64;
    soloSecondLogo.src = userHiscore[1].user.picture;

    soloThirdName.textContent = `${userHiscore[2].user.givenname} ${userHiscore[2].user.familyname}`
    soloThirdScore.textContent = userHiscore[2].points.Int64;
    soloThirdTips.textContent = userHiscore[2].points.Int64;
    soloThirdLogo.src = userHiscore[2].user.picture;


}
