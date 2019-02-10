const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
c.fillStyle = '#aaa';
c.fillRect(0, 0, canvas.width, canvas.height);

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
const q = 0.75; //Don't even try 0.80 or higher

const drawLine = (x, y, s, a = 0) => {
    index++;
    console.log(index);
    const nextX = 0;
    const nextY = -s;
    c.beginPath();
    c.translate(x, y);
    c.rotate(a);
    c.moveTo(0, 0);
    c.lineTo(nextX, nextY);
    c.strokeStyle = 'white';
    if (s < 15) {
        c.strokeStyle = 'lime';
    }
    c.lineWidth = 2;
    c.stroke();
    c.closePath();


    if (s > 5) {
        let randQ = (Math.random() * ((q + 0.05) - q) + q).toFixed(2);
        let randAngle = Math.PI / (Math.random() * (10 - 5) + 5).toFixed(0);

        c.save();
        drawLine(nextX, nextY, s * randQ, -randAngle);
        c.restore();

        // randQ = (Math.random() * ((q + 0.05) - q) + q).toFixed(2);

        c.save();
        drawLine(nextX, nextY, s * randQ, randAngle);
        c.restore();
    }
}

drawLine(startPointX, startPointY, startLineSize);