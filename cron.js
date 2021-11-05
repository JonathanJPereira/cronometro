"use strict";

let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

function start() {
    pause();
    cron = setInterval(() => {
        timer();
    }, 10);
    document.getElementById('buttons').style.animation = 'go-back 0.8s infinite alternate';
}

function pause() {
    clearInterval(cron);
    document.getElementById('buttons').style.animation = 'to-original 2s';
}

function reset() {
    pause()
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '00';
    document.getElementById('buttons').style.animation = 'to-original 2s';
}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;

        // if ((millisecond % 10) == 0) {
        //     millisecond = 100
        // }
    }
    if (second == 60) {
        second = 0;
        minute++;
    }

    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = millisecond < 100 ? `0${millisecond / 10}` : returnData(millisecond) / 10;
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}


// KeyBoard start ---------------------------------->

var space_held_down = false;
var arrow_held_down = false;

document.addEventListener('keydown', function(e) {
    e = e || window.event;
    var code = e.which || e.keyCode;

    if (space_held_down == false) {
        pause();
    }

    if (code == 13) {
        reset();
    }

    if (code == 32) {
        space_held_down = true;
    }

    if (code == 40) {
        arrow_held_down = true;
    }
});

document.addEventListener('keyup', function(e) {
    e = e || window.event;
    var code = e.which || e.keyCode;

    if (space_held_down && arrow_held_down) {
        start();
    }

    if (code == 32) {
        space_held_down = false;
    }

    if (code == 40) {
        arrow_held_down = false;
    }
});

// KeyBoard end ---------------------------------->