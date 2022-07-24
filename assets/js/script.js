//At top of the page display current day and date
const dateTime = document.getElementById("currentDay")

function updateDateTime() { 
	const now = moment().format("[Today is] dddd, MMMM Do YYYY");
	dateTime.innerText = now
};
setInterval(updateDateTime, 1000)
