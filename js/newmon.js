// Object with methods relating to the notification log
var notiLog = {
	// Make a <p></p> with the input as text and puts it after the noti-button
	newUpdate: function (text) {
		$('.noti-button').after("<p class='new-noti'>" + text + "</p>");
	}
};

// tests the notification log and scroll bar
var dank = function () {
	// Clicking on this button shall start the game remove itself so you can't acidentally delete itself
	$('.begin-game').click(function () {
		// Removes the .begin-game div so you can't restart
		$('.begin-game').remove();
		// Asks for "y" and logs it
		for(var i = 0; i<5; i++) {
			var rawr = prompt("Meow?");
			if(rawr === "y") {
				notiLog.newUpdate("success!");
			} else {
				notiLog.newUpdate("failure!");
			}
		}
	});
};

// The main function for the normal non-jquery code
var main = function() {
	dank();
};


// Runs the main jquery function
$(document).ready(main);