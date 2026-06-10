const canvas = document.getElementById("cyber-canvas");
const ctx = canvas.getContext("2d");

let width;
let height;
let columns;
let drops;

const fontSize = 16;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+-/<>[]{}";

function resizeCanvas() {
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;

columns = Math.floor(width / fontSize);
drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * height / fontSize);
}
}

function drawMatrixRain() {
ctx.fillStyle = "rgba(0, 20, 8, 0.12)";
ctx.fillRect(0, 0, width, height);

ctx.font = `${fontSize}px monospace`;

for (let i = 0; i < drops.length; i++) {
    const character = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );

    const x = i * fontSize;
    const y = drops[i] * fontSize;

    const isHead = Math.random() > 0.975;

    ctx.fillStyle = isHead ? "#b6ffb6" : "#00ff66";
    ctx.fillText(character, x, y);

    if (y > height && Math.random() > 0.975) {
    drops[i] = 0;
    }

    drops[i]++;
}

requestAnimationFrame(drawMatrixRain);
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
drawMatrixRain();
