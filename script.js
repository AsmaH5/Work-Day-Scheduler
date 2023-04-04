var timeDisplayEl = $('#currentDay');
var textareaEl = $(".textarea")

function displayTime() {
    var rightNow = moment().format('dddd, DD MMM YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}


setInterval(displayTime, 1000);