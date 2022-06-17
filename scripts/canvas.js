const canvas = document.getElementById('mapCanvas');
canvas.width = 300
canvas.height = 300
const ctx = canvas.getContext("2d");
ctx.font = "30px Arial";

const upBtn = document.getElementById('up');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const downBtn = document.getElementById('down');

const upPress = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeText("Up pressed", 10, 50);
}

const leftPress = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeText("left pressed", 10, 50);
}

const rightPress = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeText("right pressed", 10, 50);
}

const downPress = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeText("down pressed", 10, 50);
}

upBtn.addEventListener('click', upPress);
leftBtn.addEventListener('click', leftPress);
rightBtn.addEventListener('click', rightPress);
downBtn.addEventListener('click', downPress);
