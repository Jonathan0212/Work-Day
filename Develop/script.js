// Current Date
var today = moment().format('LLLL');
$('#currentDay').html(today);

// color code for each timeblock
function background () {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
        var divTimeId = parseInt($(this).attr("id"));
        if (divTimeId < currentHour) {
            $(this).addClass("past");
        } else if (divTimeId === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
    }
}