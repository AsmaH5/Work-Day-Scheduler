var timeDisplayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('dddd, DD MMM YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);