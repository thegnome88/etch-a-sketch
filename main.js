let canvas = document.querySelector('.canvas');
let setSizeButton = document.querySelector('.set-size');
let colors = document.querySelector('.colors'); 

const SIZE_OF_CANVAS = parseFloat(window.getComputedStyle(canvas).height);
let color = 'black';

function setCanvasSize() {
    let size = prompt('What size would you like the canvas to be? MAX: 50');
    size = parseInt(size);

    if (size === NaN || !Number.isInteger(size) || size > 50) {
        alert('Invalid canvas size!');
        return;
    }

    canvas.innerHTML = '';
    createSquares(size);
}

function createSquares(size) {
    for (let i = 0; i < size ** 2; i++) {
        let newDiv = document.createElement('div');
        newSize = SIZE_OF_CANVAS / size
        console.log(newSize);
        newDiv.style.height = `${newSize}px`;
        newDiv.style.width = `${newSize}px`;
        newDiv.style.boxSizing = 'border-box';
        newDiv.style.border = '1px solid rgb(233, 233, 233)';
        newDiv.addEventListener('mouseenter', () => {
            newDiv.style.backgroundColor = color;
            newDiv.style.borderColor = color;
        })


        canvas.append(newDiv);
    }
}

function setColor(e) {
    let button = e.target;

    switch (button.id) {
        case 'black':
            color = 'black';
            break;
        case 'blue':
            color = 'blue';
            break;
        case 'red':
            color = 'red';
            break;
    }
}

setSizeButton.addEventListener('click', setCanvasSize);
colors.addEventListener('click', setColor);