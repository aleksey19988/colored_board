const board = document.querySelector('#board');
const COUNT_SQUARES = 546;
const colors = [
    'red',
    'blue',
    'white',
    'yellow',
    'pink',
    'purple',
    'aqua',
    '#124578',
    '#659855',
    '#958715',
];
const circleBtn = document.querySelector('.circle-btn');
const squareBtn = document.querySelector('.square-btn');

for (let i = 0; i < COUNT_SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    board.append(square);

    square.addEventListener('mouseover', () => {
        const randomColor = getRandomColor();
        setRandomColor(square, randomColor);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });
}

function setRandomColor(element, color) {
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 10px 1px ${color}`;
};

function removeColor(element) {
    element.style.backgroundColor = '#818181';
    element.style.boxShadow = `0 0`;
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function getRandomColor() {
    let min = 50;
    let max = 255;
    const red = getRandomNumber(min, max);
    const green = getRandomNumber(min, max);
    const blue = getRandomNumber(min, max);
    return `rgb(${red},${green},${blue})`;
};

circleBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    for (square of squares) {
        square.style.borderRadius = '50%';
    }
});

squareBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    for (square of squares) {
        square.style.borderRadius = '2px';
    }
});