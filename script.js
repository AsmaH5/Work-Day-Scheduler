var timeDisplayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);