let paintbox = document.getElementById("paintbox")
let pen = paintbox.getContext('2d');
let gamestate = true;
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
        super(50, "Blue");
        this.x = 0;
        this.y = 225;
        this.speed = 5;
    }
    move()
    {
        this.x += this.speed;
    }
    checkWin()
    {
        if (this.x == 455) {
            alert("You Won");
            window.location.reload();
        }
    }
   
}
class enemy extends box{
    constructor(speed)
    {
        super(50, "RED");
        this.speed = speed;
        this.moving = false;
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
function checktrue(box1, box2)

{
    if ((box1.x + 50 >= box2.x && box1.x + 50 <= box2.x + 50) && (box1.y > box2.y && box1.y <(box2.y+50))) {
        return true;  
    }
    if (
        box1.x >box2.x &&
        box1.x < box2.x + 50 &&
        box1.y > box2.y &&
        box1.y < box2.y+50
    ) {
        return true;
    }
    return false;
}

let player = new Player();
let e1 = new enemy(5);
let e2 = new enemy(2);
e1.x = 100;
e2.x = 250;
let e3 = new enemy(3);
e3.x = 400;

function drawBox(box)
{
    pen.fillStyle = box.color;
    pen.fillRect(box.x, box.y, box.size, box.size);
}
updateGame();
function updateGame()
{
    if (!gamestate)
        return;
    window.requestAnimationFrame(() => {
        pen.clearRect(0, 0, 500, 500);
        e1.move();
        e2.move();
        e3.move();
        if (player.moving == true)
            player.move();
        drawBox(e1);
        
        drawBox(e2);
        drawBox(e3);
        drawBox(player);
        player.checkWin();
        if (checktrue(player, e1) || checktrue(player, e3) || checktrue(player, e2)) {
            alert("Game Over");
           window.location.reload();
            gamestate = false;
        }
        updateGame();
    }

    )
}
paintbox.addEventListener('mousedown', () => {
    player.moving = true;
}
)
paintbox.addEventListener('mouseup', () => {
    player.moving = false;
}
)