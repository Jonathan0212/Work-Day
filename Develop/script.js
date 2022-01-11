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
            $(this).addClass("future");
        }
    })
}

background();

// local storage save button
$(document).ready(function () { 
        $(".saveBtn").on('click', function () {
        var text=$(this).siblings(".description").val();
        var time=$(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
});

//items from local storage
$("#7 .description").val(localStorage.getItem("7"));
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));