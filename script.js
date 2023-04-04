var timeDisplayEl = $('#currentDay');
var textareaEl = $(".textarea")

function displayTime() {
    var rightNow = moment().format('dddd, DD MMM YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

displayTime()

//Time and text area
var timeBlockEl = $('#timeblock');

function schedulerTasks(){
    var currentHour = moment().hours();
    $('.time-blocks').each(function () {
        var timeId = parseInt($(this).attr('id'));
    
        // if the time Id attribute is before the current hour, add the past class
        if (timeId < currentHour) {
          $(this).addClass('past');
        } // if the time Id attribute is equal to the current hour, remove the past and future classes and add the present class
        else if (timeId === currentHour) {
          $(this).removeClass('past');
          $(this).removeClass('future');
          $(this).addClass('present');
        } // If the time Id attribute is greater than the current time, remove the past and present classes and add the future class
        else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
}

schedulerTasks();