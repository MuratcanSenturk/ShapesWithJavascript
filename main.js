
var canvas = document.getElementById("myCanvas");
var draw = canvas.getContext("2d");

var cnvHeight = 600;
var cnvWidth = 600;

var ballX = 100;
var ballY = 300;
var ballRadius = 4;
var velocityX = 8;
var velocityY =6;

function clear(){
    draw.beginPath();
    draw.fillStyle = "black";
    draw.fillRect(0, 0, cnvWidth, cnvHeight);
    draw.closePath();
    draw.fill();
}
function drawBall() {
   // clear();
    draw.beginPath();
    draw.fillStyle = "pink";
    draw.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
    draw.closePath();
    ballX += velocityX;
    ballY += velocityY;
    draw.fill();
    if (ballX > cnvWidth - ballRadius || ballX < ballRadius){
        velocityX *= -1;
    }
    if(ballY > cnvHeight - ballRadius || ballY < ballRadius){
        velocityY *= -1;
    }

}
setInterval(drawBall, 5);
