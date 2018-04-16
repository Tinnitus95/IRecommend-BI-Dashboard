let recommendations = [];
let url = 'https://api.irecommend.se/api/v1/bi/';

// Fetch all recommendations and push it to recommendations array.
function getRecommendations() {
  fetch(`${url}recommendations`)
    .then(response => response.json())
    .then(data => {
      data.forEach( rec => {
        recommendations.push(rec);
    });
  });
}










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
