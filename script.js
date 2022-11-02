const can = document.querySelector("canvas");
const context = can.getContext("2d");

var rect = {
    x: 20,
    y: 20,
    width: 50,
    height: 50


}
let xcoord = 5;
let ycoord = 5;

function draw() {
    clear();
    context.fillRect(rect.x, rect.y, rect.width, rect.height);
}

function clear() {
    context.clearRect(0, 0, can.width, can.height);
}


// function clear() {
//     context.clearRect;
// }


function go() {
    requestAnimationFrame(go);
    upffff();
    draw();



}

function upffff() {
    if (rect.x + rect.width > can.width) {
        xcoord = -5;

    } else if (rect.x < 0) {
        xcoord = 5;
    }

    if (rect.y + rect.height > can.height) {
        ycoord = -5;

    } else if (rect.y < 0) {
        ycoord = 5;
    }
    rect.x += xcoord;
    rect.y += ycoord;
}
go();



// rect.y += 5;