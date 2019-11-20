// declare global variable for the end date on the timer - fuck
//var endDate = new Date("??? ?, ??:??:??").getTime();

// declare a global variable for the timer, referencing a function, which is executed every second
var timer = setInterval(getCountdown, 1000);

// function used to update the timer every second
function getCountdown() {
	// declare local variables for the current time and the relative time
	//let now = new Date().getTime();
	//let t = endDate - now;
	
	// interpret the relative time to get values for the timer
	//if (t >= 0) {
		let days = "??" //Math.floor(t / (1000 * 60 * 60 * 24));
		let hours = "??" //Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let mins = "??" //Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
		let secs = "??" //Math.floor((t % (1000 * 60)) / 1000);
		
		document.getElementById("timer-days").innerHTML = days + "<span class='label'>DAY(S)</span>";
		document.getElementById("timer-hours").innerHTML = ("0" + hours).slice(-2) + "<span class='label'>HR(S)</span>";
		document.getElementById("timer-mins").innerHTML = ("0" + mins).slice(-2) + "<span class='label'>MIN(S)</span>";
		document.getElementById("timer-secs").innerHTML = ("0" + secs).slice(-2) + "<span class='label'>SEC(S)</span>";
	//} else {
		// Looking through my code? Sneaky. I'd never give anything away this easily...
		//document.getElementById("timer").innerHTML = "Everything is about to change";
	//}
}