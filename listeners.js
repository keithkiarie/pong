//listen for keyboard input

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32 && !gamesession) {
        //space bar to begin game

    }

    //player one keydown
    if (e.keyCode == 87 && gamesession) {
        bars.one.key = 'up';
    }
    if (e.keyCode == 65 && gamesession) {
        bars.one.key = 'left';
    }
    if (e.keyCode == 68 && gamesession) {
        bars.one.key = 'right';
    }

});

window.addEventListener('keydown', function (e) {

    //player two keydown
    if (e.keyCode == 38 && gamesession) {
        bars.two.key = 'up';
    }
    if (e.keyCode == 37 && gamesession) {
        bars.two.key = 'left';
    }
    if (e.keyCode == 39 && gamesession) {
        bars.two.key = 'right';
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
    if (e.keyCode == 68 && gamesession) {
        bars.one.key = false;
    }
});

window.addEventListener('keyup', function (e) {

    //player two keyup
    if (e.keyCode == 38 && gamesession) {
        bars.two.key = false;
    }
    if (e.keyCode == 37 && gamesession) {
        bars.two.key = false;
    }
    if (e.keyCode == 39 && gamesession) {
        bars.two.key = false;
    }
});