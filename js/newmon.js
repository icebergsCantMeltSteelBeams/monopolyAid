// Object with methods relating to the notification log
var notiLog = {
	// Make a <p></p> with the input as text and puts it after the noti-button
	newUpdate: function (text) {
		$('.noti-button').after("<p class='new-noti'>" + text + "</p>");
	},
};

// Player Objects
// Don't name any player "ignore" or they will not show up
var players = {
	//Player 1 Object
	player1: {
		//Player Name
		name: "ignore",
		//Wallet Division
		wallet: {
			// PLayer Balance
			balance: 0,
			//Object with methods to send stuff to players
			send: {
				//Send money to another play from this player
				player2: function () {
					
				},
				player3: function () {
					
				},
			},
			// End of Send
		},
		// End of Wallet
	},
	// End of player1
	
	//Player 2 Object
	player2: {
		//Player Name
		name: "ignore",
		//Wallet Division
		wallet: {
			// PLayer Balance
			balance: 0,
			//Object with methods to send stuff to players
			send: {
				//Send money to another play from this player
				player1: function () {
					
				},
				player3: function () {
					
				},
			},
			// End of Send
		},
		// End of Wallet
	},
	// End of player2
	
	//Player 1 Object
	player3: {
		//Player Name
		name: "ignore",
		//Wallet Division
		wallet: {
			// PLayer Balance
			balance: 0,
			//Object with methods to send stuff to players
			send: {
				//Send money to another play from this player
				player1: function () {
					
				},
				player2: function () {
					
				},
			},
			// End of Send
		},
		// End of Wallet
	},
	// End of player3
};

var numbersWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// tests the notification log and scroll bar
var dank = function () {
	// Clicking on this button shall start the game remove itself so you can't acidentally delete itself
	$('.begin-game').click(function () {
		// Removes the .begin-game div so you can't restart
		$('.begin-game').remove();
		// Asks for "y" and logs it
		for(var i = 0; i<15; i++) {
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