const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const colors = [
    '#177bbb',
    '#1ccacc',
    '#1aae88',
    '#fbb23e',
    '#e33244'
];
let width, height;
const balls = [];

function getOffset() {
    const rect = chrome.app.window.current().innerBounds;
    width = rect.width;
    height = rect.height - 40;
}

function Ball(x, y, radius, color, sx, sy) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius;
    this.sx = sx;
    this.sy = sy;
}

function getRandom(max, min) {
    return Math.floor(Math.random() * max - min + 1) + min;
}

function random() {
    const ball = {
        x: Math.random() * width,
        y: Math.random() * height,
        color: colors[Math.floor(Math.random() * colors.length)],
        radius: Math.floor(Math.random() * 10) + 5,
        sx: getRandom(-6, 6),
        sy: getRandom(-6, 6)
    };
    return new Ball(ball.x, ball.y, ball.radius, ball.color, ball.sx, ball.sy);
}

function drawBall(ball) {
    ctx.save();
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.restore();
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.fillStyle = '#222';
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
    for (let i = 0; i < balls.length; i++) {
        balls[i].x += balls[i].sx;
        balls[i].y += balls[i].sy;
        if (balls[i].x >= width || balls[i].x <= 0) {
            balls[i].sx = -balls[i].sx;
        }
        if (balls[i].y >= height || balls[i].y <= 0) {
            balls[i].sy = -balls[i].sy;
        }
        drawBall(balls[i]);
    }
    requestAnimationFrame(animate);
}

function play() {
    getOffset();
    canvas.width = width;
    canvas.height = height;
    initRequestAnimationframe();
    balls.push(random());
    animate();
}

function initRequestAnimationframe() {
    let lastTime = 0;
    const vendors = ['ms', 'moz', 'webkit', 'o'];
    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
            || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback) {
            const currTime = new Date().getTime();
            const timeToCall = Math.max(0, 16 - (currTime - lastTime));
            const id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }
}

document.getElementById('add').addEventListener('click', function() {
    balls.push(random());
});

play();