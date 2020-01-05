let bar_info = {
    width: 20,
    height: 5,

    position = {
        one = {
            x: 0,
            y: gamecanvas.height / 2 - bar_info.height / 2
        },
        two = {
            x: gamecanvas.width - bar_info.width,
            y: gamecanvas.height / 2 - bar_info.height / 2
        }
    }
}

function Bar(player) {
    this.player = player;

    //dimensions
    this.width = bar_info.width;
    this.height = bar_info.height;

    //position
    this.x = bar_info.position[arguments[0]].x;
    this.y = bar_info.position[arguments[0]].y;

    //velocity
    this.dx = 0;
    this.dy = 0;


    //key press
    this.key = false;

    this.draw = () => {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.move = () => {
        this.x += this.dx;
        this.y += this.dy;
    }
}

function Ball() {

    //position
    this.x = gamecanvas.width / 2;
    this.y = gamecanvas.height / 2;

    this.radius = 10;


    //velocity
    var dx = Math.random() * 10;
    var dy = Math.random() * 10;

    this.dx = (dx == 0 ? dx++ : dx);
    this.dy = (dy == 1 ? dy-- : dy);


    this.draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.fill();
    }

    this.move = () => {
        this.x += this.dx;
        this.y += this.dy;
    }
}

function StartGame() {
    //create the players' bars
    bars.one = new Bar("one");
    bars.two = new Bar("two");

    //create the ball
    ball = new Ball();

    GamePlay();
}

function GamePlay() {
    
    //clear the canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, gamecanvas.width, gamecanvas.height);

    
}