const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const handleBrowserResize = () => {
    index = 0;
    c.clearRect(0, 0, canvas.width, canvas.height);
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    startPointX = canvas.width / 2;
    startPointY = canvas.height - 10;
    startLineSize = canvas.height * 0.34;

    drawLine(startPointX, startPointY, startLineSize);
}

window.addEventListener('resize', handleBrowserResize);

let startPointX = canvas.width / 2;
let startPointY = canvas.height - 10;
let startLineSize = canvas.height * 0.17;

const angle = (Math.PI / 6);
let index = 0;
const q = 0.77; //Don't even try 0.83 or higher

const drawLine = (x, y, s, a = 0) => {
    index++;
    console.log(index);
    const nextX = 0;
    const nextY = -s;
    c.translate(x, y);
    c.rotate(a);
    c.moveTo(0, 0);
    c.lineTo(nextX, nextY);
    c.stroke();


    if (s > 5) {
        c.save();
        drawLine(nextX, nextY, s * q, -angle);
        c.restore();

        c.save();
        drawLine(nextX, nextY, s * q, angle);
        c.restore();
    }
}

drawLine(startPointX, startPointY, startLineSize);