/* eslint-disable no-magic-numbers */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black';

function drawCircle(x, y, radius, isFill){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);

    isFill ? ctx.fill() : ctx.stroke();
}

drawCircle(100, 100, 30, false);
drawCircle(90, 85, 3, true);
drawCircle(110, 85, 3, true);

drawCircle(100, 180, 50, false);
drawCircle(100, 150, 5, true);
drawCircle(100, 180, 5, true);

drawCircle(100, 210, 5, true);
drawCircle(100, 310, 80, false);
ctx.fillStyle = 'orange';

drawCircle(100, 100, 5, true);


ctx.moveTo(150,180);
ctx.lineTo(190,140);

ctx.moveTo(50,180);
ctx.lineTo(10,140);

ctx.fillRect(85,40,30,30);
ctx.fillStyle = 'red';
ctx.stroke();

