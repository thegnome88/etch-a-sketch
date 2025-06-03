let canvas = document.querySelector('.canvas');
let setSizeButton = document.querySelector('.set-size');

const SIZE_OF_CANVAS = canvas.style.height;
console.log(SIZE_OF_CANVAS)

function setCanvasSize() {
    let size = prompt('What size would you like the canvas to be? MAX: 50');
    size = parseInt(size);

    if (size === NaN || !Number.isInteger(size) || size > 50) {
        alert('Invalid canvas size!');
    }

    createSquares(size);
}

function createSquares(size) {
    for (let i = 0; i < size ** 2; i++) {
        let newDiv = document.createElement('div');
        newSize = SIZE_OF_CANVAS / size
        console.log(newSize);
        newDiv.style.height = `${newSize}px`;
        newDiv.style.width = `${newSize}px`;

        canvas.append(newDiv);
    }
}

setSizeButton.addEventListener('click', setCanvasSize);