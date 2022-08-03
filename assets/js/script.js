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