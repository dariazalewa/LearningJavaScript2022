const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

const ball = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    velocityX : 5,
    velocityY : 5,
    speed : 6,
    color : "Pink"
}

const user = {
    x : 0,
    y : (canvas.height - 100)/2,
    width : 8,
    height : 100,
    score : 0,
    color : "Blue"
}

const computer = {
    x : canvas.width - 10,
    y : (canvas.height - 100)/2,
    width : 8,
    height : 100,
    score : 0,
    color : "Red"
}