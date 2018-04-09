$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});

function _(id){
  return document.getElementById(id);
}

function drag_start(event){
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.setData("text", event.target.getAttribute('id') );
}

var droppedIn = false;

function drop_end(ev) {
  let target = ev.target;
  ev.preventDefault();

  target.removeChild(target.childNodes[0]);

  var data = ev.dataTransfer.getData("Text");

  var copy = document.createElement("img");
  

  var original = document.getElementById(data);
  copy.src = original.src;
  ev.target.appendChild(copy);
}
