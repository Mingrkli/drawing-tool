const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let currentColor = document.getElementById('colorPicker');
let currentSize = document.getElementById('sizePicker');
let clearBtn = document.getElementById('clearBtn');

let drawing = false;

// Window Resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
})

// size can't be below 0
currentSize.addEventListener('input', () => {
    if (currentSize.value < 0) {
        currentSize.value = 0;
    }
})

const mouse = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener('click', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    drawCircle();
})

canvas.addEventListener('mousedown', () => {
    drawing = true;
})

canvas.addEventListener('mousemove', (e) => {
    if (drawing === true) {
        mouse.x = e.x;
        mouse.y = e.y;
        drawCircle()
    }
})

canvas.addEventListener('mouseup', () => {
    drawing = false;
})

function drawCircle() {
    ctx.fillStyle = currentColor.value;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, currentSize.value, 0, Math.PI * 2);
    ctx.fill();
}

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})