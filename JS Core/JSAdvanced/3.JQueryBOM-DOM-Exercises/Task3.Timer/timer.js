function timer() {

    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');

    let interval = undefined;

    startBtn.on('click', function () {
        if (!interval) {
            interval = setInterval(incrementTime, 1000);
        }
    });

    stopBtn.on('click', function () {
        if (interval) {
            clearInterval(interval);
            interval = undefined;
        }
    });

    let allSeconds = 0;

    function incrementTime() {
        let hours = $('#hours');
        let minutes = $('#minutes');
        let seconds = $('#seconds');
        allSeconds += 1;

        let secs = Math.floor(allSeconds % 60);
        seconds.text(twoDigitsFormat(secs));

        let mins = Math.floor(allSeconds / 60);
        minutes.text(twoDigitsFormat(mins));

        let hrs = Math.floor(mins / 60);
        hours.text(twoDigitsFormat(hrs));
    }

    function twoDigitsFormat(num) {
        "use strict";
        if (num < 10) {
            num =  `0${num}`;
        }
        return num;
    }
}
