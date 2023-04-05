var timeDisplayEl = $('#currentDay');
var textareaEl = $(".textarea")

function displayTime() {
    var rightNow = moment().format('dddd, DD MMM YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

displayTime()

var timeBlockEl = $('#timeblock');

function schedulerTasks(){
    var currentHour = moment().hours();
    $('.time-blocks').each(function () {
        var timeId = parseInt($(this).attr('id'));
    
        if (timeId < currentHour) {
          $(this).addClass('past');
        } 
        else if (timeId === currentHour) {
          $(this).addClass('present');
        } 
        else {
          $(this).addClass('future');
        }
      });
}

schedulerTasks();

var saveButtons = document.querySelectorAll("#saveBtn");

saveButtons.forEach(function(button){
    button.addEventListener("click", saveAppt);
});

function saveAppt() {
    
    var textValue = $(this).siblings()[1].children[0].value;

    var timeKey = $(this).siblings()[0].textContent;
  
    localStorage.setItem(timeKey, textValue);
  };
  
  $('#9 .textarea').val(localStorage.getItem('9am'));
  $('#10 .textarea').val(localStorage.getItem('10am'));
  $('#11 .textarea').val(localStorage.getItem('11am'));
  $('#12 .textarea').val(localStorage.getItem('12am'));
  $('#13 .textarea').val(localStorage.getItem('1pm'));
  $('#14 .textarea').val(localStorage.getItem('2pm'));
  $('#15 .textarea').val(localStorage.getItem('3pm'));
  $('#16 .textarea').val(localStorage.getItem('4pm'));
  $('#17 .textarea').val(localStorage.getItem('5pm'));
  $('#18 .textarea').val(localStorage.getItem('6pm'));