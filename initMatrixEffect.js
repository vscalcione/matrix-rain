var canvasObj = document.getElementById('canvasObject');
var ctx = canvasObj.getContext("2d");
canvasObj.height = window.innerHeight;
canvasObj.width = window.innerWidth;

var matrix = "ABCDEFGHIJKLMNOPQRSTUWXYZ0123456789@#$%&^*()";
matrix = matrix.split("");
var fontSize = 10;
var columns = canvasObject.width / fontSize;
var drops = [];

for (var x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvasObject.width, canvasObject.height);
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px arial";
    for (var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvasObject.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 35);