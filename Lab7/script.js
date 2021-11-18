let $panel = document.querySelector('.panel');
let $menu = document.querySelector('.menu');
let $openbutton = document.querySelector('.openbutton');
let action = false;
let actionOpen = false;
let count = 0;
let coords = {
    distance: 0,
    startCoords: 0,
    currentCoords: 0
}
let save = -350;

function boxController(coords) {
    $panel.style.cssText = 'transform: translateX(' + coords.distance + 'px)';
}

function open(count){
    if (count % 2 == 0)
    {  
        actionOpen = true;
    }
    else{
        actionOpen = false;
    }
    if (!!actionOpen){
        $panel.style.cssText = 'transform: translateX(' + 0 + 'px)';
    }
    else{
        $panel.style.cssText = 'transform: translateX(' + -350 + 'px)';
    }
    console.log(count);
}

$openbutton.addEventListener('click', function(e){
    count++;
    open(count);
});

$menu.addEventListener('mousedown', function(e) {
    coords.startCoords = e.clientX;
    action = true;
});

window.addEventListener('mouseup', function(e) {
    action = false;
    save = coords.distance;
    if (coords.distance >= -200 || coords.distance == 0) {
        $panel.style.cssText = 'transform: translateX(' + 0 + 'px)';
    } else {
        $panel.style.cssText = 'transform: translateX(' + -350 + 'px)';
        save = -350;
    }
});

window.addEventListener('mousemove', function(e) {
    if (action) {
        coords.currentCoords = e.clientX;
        coords.distance = save + coords.currentCoords - coords.startCoords;
        coords.distance = (coords.distance >= 0) ? 0 : coords.distance;
        coords.distance = (coords.distance <= -350) ? -350 : coords.distance;
        boxController(coords)
    }
    
    if (coords.distance <= -300){
        document.getElementById('text').innerHTML="≡";
    }
    else if (coords.distance >= -300) {
        document.getElementById('text').innerHTML="&#10006;";  
    }
});