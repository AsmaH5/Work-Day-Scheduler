var timeDisplayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('dddd, DD MMM YYYY');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);