//listen for keyboard input

window.addEventListener('keydown', function (e) {
    
    if (e.keyCode == 83 && !gamesession) {
        //key "s" for single player mode
        player_mode = 1;
        StartGame();
    }
    if (e.keyCode == 84 && !gamesession) {
        //key "t" for two player mode
        player_mode = 2
        StartGame();
    }

    //player one keydown
    if (e.keyCode == 87 && gamesession) {
        bars.one.key = 'up';
    }
    if (e.keyCode == 83 && gamesession) {
        bars.one.key = 'down';
    }
});

window.addEventListener('keydown', function (e) {

    //player two keydown
    if (e.keyCode == 38 && gamesession) {
        bars.two.key = 'up';
    }
    if (e.keyCode == 40 && gamesession) {
        bars.two.key = 'down';
    }
});



window.addEventListener('keyup', function (e) {

    //player one keyup
    if (e.keyCode == 87 && gamesession) {
        bars.one.key = false; //up
    }
    if (e.keyCode == 83 && gamesession) {
        bars.one.key = false; //down
    }
});

window.addEventListener('keyup', function (e) {

    //player two keyup
    if (e.keyCode == 38 && gamesession) {
        bars.two.key = false;
    }
    if (e.keyCode == 40 && gamesession) {
        bars.two.key = false;
    }
});