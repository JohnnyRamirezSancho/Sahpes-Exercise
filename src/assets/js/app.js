const canvasTriangle = document.getElementById('shapeTriangle');
const canvasSquare = document.getElementById('shapeSquare');
const canvasCircle = document.getElementById('shapeCircle');
const shapesAll = document.querySelector('#shapes').querySelectorAll('canvas');
const buttonReset = document.getElementById("button-reset");

function initAll() {
    initListeners();
    initCanvas();
}

function initListeners() {
    for (let shape of shapesAll) {
        shape.addEventListener('click', action => {
            shapeHidden(shape.id);
        })
    }

    buttonReset.addEventListener("click", action => {
        shapesShow();
    })
}

function initCanvas() {
    drawTriangle();
    drawSquare();
    drawCircle();
}

function drawTriangle() {
    if (canvasTriangle.getContext) {
        const triangle = canvasTriangle.getContext("2d");

        triangle.fillStyle = "#CCFF00";
        triangle.beginPath();
        triangle.moveTo(50, 0);
        triangle.lineTo(100, 100);
        triangle.lineTo(0, 100);
        triangle.fill();
    }
}

function drawSquare() {
    if (canvasSquare.getContext) {
        const square = canvasSquare.getContext("2d");

        square.fillStyle = "#FF0000";
        square.beginPath();
        square.moveTo(0, 0);
        square.lineTo(100, 0);
        square.lineTo(100, 100);
        square.lineTo(0, 100);
        square.fill();
    }
}

function drawCircle() {
    if (canvasCircle.getContext) {
        const circle = canvasCircle.getContext("2d");

        circle.fillStyle = "#5200FF";
        circle.beginPath();
        circle.arc(50, 50, 50, 0, Math.PI * 2, true);
        circle.fill();
    }
}

function shapeHidden(id) {
    let shape = document.getElementById(id);
    shape.style.visibility = "hidden";
}

function shapesShow() {
    for (let shape of shapesAll) {
        shape.style.visibility = "visible";
    }
}

initAll();