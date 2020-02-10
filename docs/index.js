var DAY = 1000 * 60 * 60 * 24;

setInterval(function() {
	var counter = document.getElementById('gameCounter');
	counter.innerHTML = timeSince()
}, 1000);

function addToString(string, value, label) {
	if(string != '') string += ', ';
	return string + value + ' ' + label;
}

function timeSince() {
	var now = new Date();
		// get total seconds between the times
	var delta = Math.abs(now.getTime() - LAST_WIN) / 1000;

	var string = '';

	var years = Math.floor(delta / 31536000);
	delta -= years * 31536000;
	if(years > 0) string = addToString(string, years, 'years');

	// calculate (and subtract) whole days
	var days = Math.floor(delta / 86400) % 365;
	delta -= days * 86400;
	if(days > 0) string = addToString(string, days, 'days');

	// calculate (and subtract) whole hours
	var hours = Math.floor(delta / 3600) % 24;
	delta -= hours * 3600;
	if(hours > 0) string = addToString(string, hours, 'hours');

	// calculate (and subtract) whole minutes
	var minutes = Math.floor(delta / 60) % 60;
	delta -= minutes * 60;
	if(minutes > 0) string = addToString(string, minutes, 'minutes');

	// what's left is seconds
	var seconds = Math.floor(delta);  // in theory the modulus is not required
	if(seconds > 0) string = addToString(string, seconds, 'seconds');

	return string;
}
