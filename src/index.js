var DAY = 1000 * 60 * 60 * 24;

setInterval(function() {
	var counter = document.getElementById('gameCounter');
	counter.innerHTML = timeSince()
}, 1000);

function timeSince() {
	var now = new Date();
		// get total seconds between the times
	var delta = Math.abs(now.getTime() - LAST_WIN) / 1000;

	var years = Math.floor(delta / 31536000);
	delta -= years * 31536000;

	// calculate (and subtract) whole days
	var days = Math.floor(delta / 86400) % 365;
	delta -= days * 86400;

	// calculate (and subtract) whole hours
	var hours = Math.floor(delta / 3600) % 24;
	delta -= hours * 3600;

	// calculate (and subtract) whole minutes
	var minutes = Math.floor(delta / 60) % 60;
	delta -= minutes * 60;

	// what's left is seconds
	var seconds = Math.floor(delta % 60);  // in theory the modulus is not required

	return years + ' years, ' + days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds';
}
