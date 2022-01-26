let paintbox = document.getElementById("paintbox")
let pen = paintbox.getContext('2d');

class box
{
    constructor(size, color)
    {
        this.size = size;
        this.color = color;
        this.x = 0;
        this.y = 0;
    }
}
class Player extends box{
    constructor()
    {
        super(50, "blue");
        this.x = 0;
        this.y = 225;
    }
}
class enemy extends box{
    constructor(speed)
    {
        super(50, "red");
        this.speed = speed;
    }
    move()
    {
        this.y += this.speed;
        if (this.y + this.speed > 450)
            this.speed = -Math.abs(this.speed);
        if (this.y + this.speed < 0)
            this.speed = Math.abs(this.speed);
    }
}
let player = new Player();
let e1 = new enemy(5);
let e2 = new enemy(2);
e1.x = 140;
e2.x = 300;

function drawBox(box)
{
    pen.fillStyle = box.color;
    pen.fillRect(box.x, box.y, box.size, box.size);
}
// setInterval(() => { 
//     pen.clearRect(0, 0, 500, 500);
//     e1.y += e1.speed;
//     e2.y += e2.speed;
//     drawBox(e1);
//     drawBox(e2);
    
// }, 100);
updateGame();
function updateGame()
{
    window.requestAnimationFrame(() => {
        pen.clearRect(0, 0, 500, 500);
        e1.move();
        e2.move();
    drawBox(e1);
        drawBox(e2);
        updateGame();
        
    }
    )
}