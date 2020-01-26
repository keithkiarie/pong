let bar_speed = 8;

let bar_info = {
    width: 15,
    height: 95,

    position: {}
}

bar_info.position = {
    one: {
        x: 0,
        y: gamecanvas.height / 2 - bar_info.height / 2
    },
    two: {
        x: gamecanvas.width - bar_info.width,
        y: gamecanvas.height / 2 - bar_info.height / 2
    }
}


function HomePage() {
    //clear the canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, gamecanvas.width, gamecanvas.height);

    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#FFFFFF";

    ctx.fillText("Pong", gamecanvas.width / 2, gamecanvas.height * 0.1);

    ctx.font = "20px Arial";
    ctx.fillText("Press s for Single Player", gamecanvas.width / 5, gamecanvas.height * 0.3);
    ctx.fillText("Press t for Two Player", gamecanvas.width / 5, gamecanvas.height * 0.4);
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
        if (this.key == "up") this.dy = -bar_speed;
        if (this.key == "down") this.dy = bar_speed;
        if (this.key == false) this.dy = 0;

        this.x += this.dx;
        this.y += this.dy;

        //keep the bar within the screen
        if (this.y < 0) this.y = 0;
        if (this.y + this.height > gamecanvas.height) this.y = gamecanvas.height - this.height;
    }

    this.sequence = () => {
        this.move();
        this.draw();
    }
}

function Ball() {

    //position
    this.x = gamecanvas.width / 2;
    this.y = gamecanvas.height / 2;

    this.radius = 10;

    this.bottom = () => {
        return this.y + this.radius;
    }

    this.top = () => {
        return this.y - this.radius;
    }

    this.right_edge = () => {
        return this.x + this.radius;
    }

    this.left_edge = () => {
        return this.x - this.radius;
    }


    //velocity
    var dx = Math.random() * 10;
    var dy = Math.random() * 10;

    //no steep angles
    this.dy = (dy / dx > 2.5) ? (dx * 2.4) : dy;
    this.dx = (dy / dx < 0.1) ? (dy * 0.1) : dx;

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

        //single player
        if (player_mode == 1 && (this.right_edge() < -5 || this.left_edge() > gamecanvas.width + 5)) gamesession = false;

        if (player_mode == 2 && (this.right_edge() < -5)) gamesession = false;
    }

    this.sequence = () => {
        this.move();
        this.draw();
    }
}

let counter = 0;
function StartGame() {

    //create the players' bars
    bars.one = new Bar("one");
    if (player_mode == 2) { bars.two = new Bar("two"); }


    //create the ball
    ball = new Ball();

    gamesession = true;

    //start with a specified speed
    if (ball.dx != 5) {
        ball.dy = (5 / ball.dx) * ball.dy;
        ball.dx = 5;
    }

    counter = 0;
    GamePlay();
}

function GamePlay() {

    counter++;

    if (counter % 300 == 0) {
        ball.dx *= 1.25;
        ball.dy *= 1.25;
    }
    //clear the canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, gamecanvas.width, gamecanvas.height);

    collision();
    ball.sequence();


    bars.one.sequence();
    if (player_mode == 2) { bars.two.sequence(); }



    if (gamesession) {
        requestAnimationFrame(GamePlay);
    } else {
        setTimeout(() => {
            HomePage();
        }, 1000);
    }
}

function collision() {
    if (ball.top() <= 3 || ball.bottom() >= gamecanvas.height - 3) ball.dy = -ball.dy;

    //single player
    if (ball.left_edge() <= bars.one.width && ball.y >= bars.one.y && ball.y <= bars.one.y + bars.one.height) ball.dx = -ball.dx;
    
    //bounce off right wall
    if (player_mode == 1 && ball.right_edge() > gamecanvas.width) ball.dx = -ball.dx;
    

    if (player_mode == 2) {
        if (ball.right_edge() >= bars.two.x && ball.y >= bars.two.y && ball.y <= bars.two.y + bars.two.height) ball.dx = -ball.dx;
    }

}


HomePage();