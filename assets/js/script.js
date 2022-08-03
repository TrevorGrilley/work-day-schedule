//At top of the page display current day and date
const dateTime = document.getElementById("currentDay")

function updateDateTime() { 
	const now = moment().format("[Today is] dddd, MMMM Do YYYY");
	dateTime.innerText = now
};
setInterval(updateDateTime, 1000)

//Create a function to save text and time to local storage

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })  
})


//Time blocks to be saved to local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

//Color coordinate time blocks for past hours, current hour, and future hours. Gray for past, red for present, green for future
function timeColor () {
    var present = moment().hours();
    $(".time-block").each(function () {
        var time = parseInt($(this).attr("id"));

        if (time < present) {
            $(this).addClass("past");
        } 
        
        else if (time === present) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } 
        
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
 }
 
 timeColor ();