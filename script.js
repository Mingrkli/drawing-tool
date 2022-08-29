const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let currentColor = document.getElementById('colorPicker');
let currentSize = document.getElementById('sizePicker');
let clearBtn = document.getElementById('clearBtn');

let drawing = false;
let startX;
let startY;

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

const draw = (e) => {
    if(!drawing) {
        return;
    } 

    ctx.strokeStyle = currentColor.value;

    ctx.lineWidth = currentSize.value;
    ctx.lineCap = 'round';

    ctx.lineTo(e.x, e.y)
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    startX = e.x
    startY = e.y
})

canvas.addEventListener('mouseup', (e) => {
    drawing = false;
    ctx.stroke();
    ctx.beginPath();
})

canvas.addEventListener('mousemove', draw);

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})