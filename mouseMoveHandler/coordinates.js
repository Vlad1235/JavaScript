window.onload = init;

function init(){
    var map = document.getElementById("map");
    map.onmousemove = showCoords;
}

function showCoords(evenObj){
    var map = document.getElementById("coords");
    var x = evenObj.clientX;
    var y = evenObj.clientY;
    map.innerHTML = "Map coordinates: "+ x +" , "+y;
}