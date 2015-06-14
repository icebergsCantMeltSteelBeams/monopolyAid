// Object with methods relating to the notification log
var notiLog = {
	// Make a <p></p> with the input as text and puts it after the noti-button
	newGenUpdate: function (text) {
		$('.noti-gen-button').after("<p class='new-noti-gen'>" + text + "</p>");
	},
	newWalletUpdate: function (text) {
		$('.noti-wallet-button').after("<p class='new-noti-wallet'>" + text + "</p>");
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
				player2: function (amount) {
					players.player1.wallet.balance = +players.player1.wallet.balance - +amount;
					players.player2.wallet.balance = +players.player2.wallet.balance + +amount;
				},
				player3: function (amount) {
					players.player1.wallet.balance = +players.player1.wallet.balance - +amount;
					players.player3.wallet.balance = +players.player3.wallet.balance + +amount;
				},
				house: function (amount) {
					players.player1.wallet.balance = +players.player1.wallet.balance - +amount;
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
				player1: function (amount) {
					players.player2.wallet.balance = +players.player2.wallet.balance - +amount;
					players.player1.wallet.balance = +players.player1.wallet.balance + +amount;
				},
				player3: function (amount) {
					players.player2.wallet.balance = +players.player2.wallet.balance - +amount;
					players.player3.wallet.balance = +players.player3.wallet.balance + +amount;
				},
				house: function (amount) {
					players.player1.wallet.balance = +players.player1.wallet.balance - +amount;
				},
			},
			// End of Send
		},
		// End of Wallet
	},
	// End of player2
	
	//Player 3 Object
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
				player1: function (amount) {
					players.player3.wallet.balance = +players.player3.wallet.balance - +amount;
					players.player1.wallet.balance = +players.player1.wallet.balance + +amount;
				},
				player2: function (amount) {
					players.player3.wallet.balance = +players.player3.wallet.balance - +amount;
					players.player2.wallet.balance = +players.player2.wallet.balance + +amount;
				},
			},
			// End of Send
		},
		// End of Wallet
	},
	// End of player3
};

// Input 123456 | Output: 123,456
var numbersWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// tests the notification logs and scroll bars
var dank = function () {
	// Clicking on this button shall start the game remove itself so you can't acidentally delete itself
	$('.begin-game').click(function () {
		// Removes the .begin-game div so you can't restart
		$('.begin-game').remove();
		// Asks for "y" and logs it
		for(var i = 0; i<15; i++) {
			var rawr = prompt("Meow?");
			if(rawr === "y") {
				notiLog.newGenUpdate("success!");
				notiLog.newWalletUpdate("success!");
			} else {
				notiLog.newGenUpdate("failure!");
				notiLog.newWalletUpdate("failure!");
			}
		}
	});
};

// Tests the method of getting the names from the input fields
var nameTest = function () {
	//Clicking on this will get the names
	$('.name-test').click(function() {
		$('.name-test').remove();
		var j1 = $('#input-player1-name').val();
		players.player1.name = j1;
		console.log(j1);
		console.log(players.player1.name);
		console.log($('#input-player1-name').val());
		notiLog.newGenUpdate("Imported " + players.player1.name);
	})
};


//  Gives directions
var welcome = function () {
	notiLog.newGenUpdate("Welcome to the game");
	notiLog.newGenUpdate("Before pressing the Begin Game! Button, please insert the player names in the input fields above");
	notiLog.newGenUpdate("Along with the starting amount of money for all players.")
	notiLog.newWalletUpdate("Welcome. This is the Wallet Notifications Log.");
	notiLog.newGenUpdate("This is the General Notifications Log");
	notiLog.newGenUpdate("Here you will be informed about who's turn it is");
	notiLog.newWalletUpdate("Here you will be informed about all financial transactions");
};

// Gets the data from the input fields
var getData = function () {
		notiLog.newGenUpdate("Let's begin the game!");
		players.player1.name = $('#input-player1-name').val();
		players.player2.name = $('#input-player2-name').val();
		players.player3.name = $('#input-player3-name').val();
		players.player1.wallet.balance = $('#input-startingAmount').val();
		players.player2.wallet.balance = $('#input-startingAmount').val();
		players.player3.wallet.balance = $('#input-startingAmount').val();
		notiLog.newGenUpdate("Welcome To The Game " + players.player1.name + ", You are player 1")
		notiLog.newGenUpdate("Welcome To The Game " + players.player2.name + ", You are player 2")
		notiLog.newGenUpdate("Welcome To The Game " + players.player3.name + ", You are player 3")
		notiLog.newWalletUpdate("Everyone is starting with $" + numbersWithCommas(players.player1.wallet.balance) + "K.");
		$('.begin-game').remove();
		$('#input-player1-name').remove();
		$('#input-player2-name').remove();
		$('#input-player3-name').remove();
		$('#input-startingAmount').remove();
};

var playerOneTurn = function () {
	// Asks if they spent any money
	var playerOneTurnSpentMoney = function () {
		bootbox.dialog({
			message: "If so who?",
			title: "Did you spend any money?",
			buttons: {
				// Payed player2
				pay2: {
					label: "I paid " + players.player2.name,
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to player2
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player1.wallet.send.player2(result);        
							  	notiLog.newWalletUpdate(players.player1.name + " now Has $" + numbersWithCommas(players.player1.wallet.balance) + "K");
							  	notiLog.newWalletUpdate(players.player2.name + " now Has $" + numbersWithCommas(players.player2.wallet.balance) + "K"); 
							  	playerOneTurnSpentMoney2();        
							  }
						});
					}
				},
				// Payed player3
				pay3: {
					label: "I paid " + players.player3.name,
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to player3
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player1.wallet.send.player3(result);        
							  	notiLog.newWalletUpdate(players.player1.name + " now Has $" + numbersWithCommas(players.player1.wallet.balance) + "K");
							  	notiLog.newWalletUpdate(players.player3.name + " now Has $" + numbersWithCommas(players.player3.wallet.balance) + "K");
							  	playerOneTurnSpentMoney2();
							  }
						});
					}
				},
				// Payed the house
				house: {
					label: "I paid the house (aka no-one)",
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to the house
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player1.wallet.send.house(result);        
							  	notiLog.newWalletUpdate(players.player1.name + " now Has $" + numbersWithCommas(players.player1.wallet.balance) + "K");
							  	playerOneTurnSpentMoney2();
							  }
						});
					}
				},
				// Did not pass go
				danger: {
					label: "I Didn't!",
					className: "btn-success",
					callback: function() {
						bootbox.alert("Good for you!", function () {
							playerOneTurnSpentMoney2();
						})
						
					}
				},
			}
		})
	}	
	// Asks if they spent any money
	var playerOneTurnSpentMoney2 = function () {
		bootbox.dialog({
			message: "If so who?",
			title: "Did you spend any money?",
			buttons: {
				// Payed player2
				pay2: {
					label: "I paid " + players.player2.name,
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to player2
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player1.wallet.send.player2(result);        
							  	notiLog.newWalletUpdate(players.player1.name + " now Has $" + numbersWithCommas(players.player1.wallet.balance) + "K");
							  	notiLog.newWalletUpdate(players.player2.name + " now Has $" + numbersWithCommas(players.player2.wallet.balance) + "K");   
							  	playerTwoTurn();      
							  }
						});
					}
				},
				// Payed player3
				pay3: {
					label: "I paid " + players.player3.name,
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to player3
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player1.wallet.send.player3(result);        
							  	notiLog.newWalletUpdate(players.player1.name + " now Has $" + numbersWithCommas(players.player1.wallet.balance) + "K");
							  	notiLog.newWalletUpdate(players.player3.name + " now Has $" + numbersWithCommas(players.player3.wallet.balance) + "K");
							  	playerTwoTurn();  
							  }
						});
					}
				},
				// Payed the house
				house: {
					label: "I paid the house (aka no-one)",
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to the house
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player1.wallet.send.house(result);        
							  	notiLog.newWalletUpdate(players.player1.name + " now Has $" + numbersWithCommas(players.player1.wallet.balance) + "K");
							  	playerTwoTurn();  
							  }
						});
					}
				},
				// Did not pay anyone
				danger: {
					label: "I Didn't!",
					className: "btn-success",
					callback: function() {
						bootbox.alert("Good for you!",function () {
							playerTwoTurn();  
						});
					}
				},
			}
		})
	}
	// Tells them it's their turn
	notiLog.newGenUpdate("It is now " + players.player1.name + "'s Turn.")
	// Tells them to roll and asks if they passed go, then adds $2,000K if they did and does nothing if they did not
	bootbox.dialog({
		message: "Did you pass Go?",
		title: "Please Roll & Move",
		buttons: {
			// Passed go
			success: {
				label: "Yes I Passed GO!",
				className: "btn-success",
				callback: function() {
					// Adds $2,000K to balance
					players.player1.wallet.balance = +players.player1.wallet.balance + +2000;
					notiLog.newWalletUpdate(players.player1.name + " now has $" + numbersWithCommas(players.player1.wallet.balance) + "K")
					playerOneTurnSpentMoney();
				}
			},
			// Did not pass go
			danger: {
				label: "I did not :(",
				className: "btn-danger",
				callback: function() {
					playerOneTurnSpentMoney();
				}
			},
		}
	})
};

var playerTwoTurn = function () {
	// Asks if they spent any money
	var playerTwoTurnSpentMoney = function () {
		bootbox.dialog({
			message: "If so who?",
			title: "Did you spend any money?",
			buttons: {
				// Payed player1
				pay1: {
					label: "I paid " + players.player1.name,
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to player2
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player2.wallet.send.player1(result);        
							  	notiLog.newWalletUpdate(players.player2.name + " now Has $" + numbersWithCommas(players.player2.wallet.balance) + "K");
							  	notiLog.newWalletUpdate(players.player1.name + " now Has $" + numbersWithCommas(players.player1.wallet.balance) + "K"); 
							  	playerTwoTurnSpentMoney2();        
							  }
						});
					}
				},
				// Payed player3
				pay3: {
					label: "I paid " + players.player3.name,
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to player3
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player2.wallet.send.player3(result);        
							  	notiLog.newWalletUpdate(players.player2.name + " now Has $" + numbersWithCommas(players.player2.wallet.balance) + "K");
							  	notiLog.newWalletUpdate(players.player3.name + " now Has $" + numbersWithCommas(players.player3.wallet.balance) + "K");
							  	playerTwoTurnSpentMoney2();
							  }
						});
					}
				},
				// Payed the house
				house: {
					label: "I paid the house (aka no-one)",
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to the house
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player2.wallet.send.house(result);        
							  	notiLog.newWalletUpdate(players.player2.name + " now Has $" + numbersWithCommas(players.player2.wallet.balance) + "K");
							  	playerTwoTurnSpentMoney2();
							  }
						});
					}
				},
				// Did not pass go
				danger: {
					label: "I Didn't!",
					className: "btn-success",
					callback: function() {
						bootbox.alert("Good for you!", function () {
							playerTwoTurnSpentMoney2();
						})
						
					}
				},
			}
		})
	}	
	// Asks if they spent any money
	var playerTwoTurnSpentMoney2 = function () {
		bootbox.dialog({
			message: "If so who?",
			title: "Did you spend any money?",
			buttons: {
				// Payed player1
				pay1: {
					label: "I paid " + players.player1.name,
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to player1
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player2.wallet.send.player1(result);        
							  	notiLog.newWalletUpdate(players.player2.name + " now Has $" + numbersWithCommas(players.player2.wallet.balance) + "K");
							  	notiLog.newWalletUpdate(players.player1.name + " now Has $" + numbersWithCommas(players.player1.wallet.balance) + "K");   
							  	playerThreeTurn();      
							  }
						});
					}
				},
				// Payed player3
				pay3: {
					label: "I paid " + players.player3.name,
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to player3
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player2.wallet.send.player3(result);        
							  	notiLog.newWalletUpdate(players.player2.name + " now Has $" + numbersWithCommas(players.player2.wallet.balance) + "K");
							  	notiLog.newWalletUpdate(players.player3.name + " now Has $" + numbersWithCommas(players.player3.wallet.balance) + "K");
							  	playerThreeTurn();  
							  }
						});
					}
				},
				// Payed the house
				house: {
					label: "I paid the house (aka no-one)",
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to the house
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player2.wallet.send.house(result);        
							  	notiLog.newWalletUpdate(players.player2.name + " now Has $" + numbersWithCommas(players.player2.wallet.balance) + "K");
							  	playerThreeTurn();  
							  }
						});
					}
				},
				// Did not pay anyone
				danger: {
					label: "I Didn't!",
					className: "btn-success",
					callback: function() {
						bootbox.alert("Good for you!",function () {
							playerThreeTurn();  
						});
					}
				},
			}
		})
	}
	// Tells them it's their turn
	notiLog.newGenUpdate("It is now " + players.player2.name + "'s Turn.")
	// Tells them to roll and asks if they passed go, then adds $2,000K if they did and does nothing if they did not
	bootbox.dialog({
		message: "Did you pass Go?",
		title: "Please Roll & Move",
		buttons: {
			// Passed go
			success: {
				label: "Yes I Passed GO!",
				className: "btn-success",
				callback: function() {
					// Adds $2,000K to balance
					players.player2.wallet.balance = +players.player2.wallet.balance + +2000;
					notiLog.newWalletUpdate(players.player2.name + " now has $" + numbersWithCommas(players.player2.wallet.balance) + "K")
					playerTwoTurnSpentMoney();
				}
			},
			// Did not pass go
			danger: {
				label: "I did not :(",
				className: "btn-danger",
				callback: function() {
					playerTwoTurnSpentMoney();
				}
			},
		}
	})
};

var playerThreeTurn = function () {
	// Asks if they spent any money
	var playerThreeTurnSpentMoney = function () {
		bootbox.dialog({
			message: "If so who?",
			title: "Did you spend any money?",
			buttons: {
				// Payed player1
				pay1: {
					label: "I paid " + players.player1.name,
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to player2
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player3.wallet.send.player1(result);        
							  	notiLog.newWalletUpdate(players.player3.name + " now Has $" + numbersWithCommas(players.player3.wallet.balance) + "K");
							  	notiLog.newWalletUpdate(players.player1.name + " now Has $" + numbersWithCommas(players.player1.wallet.balance) + "K"); 
							  	playerThreeTurnSpentMoney2();        
							  }
						});
					}
				},
				// Payed player2
				pay2: {
					label: "I paid " + players.player2.name,
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to player2
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player3.wallet.send.player2(result);        
							  	notiLog.newWalletUpdate(players.player3.name + " now Has $" + numbersWithCommas(players.player3.wallet.balance) + "K");
							  	notiLog.newWalletUpdate(players.player2.name + " now Has $" + numbersWithCommas(players.player2.wallet.balance) + "K");
							  	playerThreeTurnSpentMoney2();
							  }
						});
					}
				},
				// Payed the house
				house: {
					label: "I paid the house (aka no-one)",
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to the house
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player3.wallet.send.house(result);        
							  	notiLog.newWalletUpdate(players.player3.name + " now Has $" + numbersWithCommas(players.player3.wallet.balance) + "K");
							  	playerThreeTurnSpentMoney2();
							  }
						});
					}
				},
				// Did not pay
				danger: {
					label: "I Didn't!",
					className: "btn-success",
					callback: function() {
						bootbox.alert("Good for you!", function () {
							playerThreeTurnSpentMoney2();
						})
						
					}
				},
			}
		})
	}	
	// Asks if they spent any money
	var playerThreeTurnSpentMoney2 = function () {
		bootbox.dialog({
			message: "If so who?",
			title: "Did you spend any money?",
			buttons: {
				// Payed player1
				pay1: {
					label: "I paid " + players.player1.name,
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to player1
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player3.wallet.send.player1(result);        
							  	notiLog.newWalletUpdate(players.player3.name + " now Has $" + numbersWithCommas(players.player3.wallet.balance) + "K");
							  	notiLog.newWalletUpdate(players.player1.name + " now Has $" + numbersWithCommas(players.player1.wallet.balance) + "K");   
							  	playerOneTurn();      
							  }
						});
					}
				},
				// Payed player2
				pay2: {
					label: "I paid " + players.player2.name,
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to player3
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player3.wallet.send.player2(result);        
							  	notiLog.newWalletUpdate(players.player3.name + " now Has $" + numbersWithCommas(players.player3.wallet.balance) + "K");
							  	notiLog.newWalletUpdate(players.player2.name + " now Has $" + numbersWithCommas(players.player2.wallet.balance) + "K");
							  	playerOneTurn();  
							  }
						});
					}
				},
				// Payed the house
				house: {
					label: "I paid the house (aka no-one)",
					className: "btn-danger",
					callback: function() {
						// Asks how much money was paid to the house
						bootbox.prompt("How much money did you pay?", function(result) {                
							  if (result === null) {                                             
							    Example.show("Prompt dismissed");                              
							  } else {
							  	players.player3.wallet.send.house(result);        
							  	notiLog.newWalletUpdate(players.player3.name + " now Has $" + numbersWithCommas(players.player3.wallet.balance) + "K");
							  	playerOneTurn();  
							  }
						});
					}
				},
				// Did not pay anyone
				danger: {
					label: "I Didn't!",
					className: "btn-success",
					callback: function() {
						bootbox.alert("Good for you!",function () {
							playerOneTurn();
						});  
					}
				},
			}
		})
	}
	// Tells them it's their turn
	notiLog.newGenUpdate("It is now " + players.player3.name + "'s Turn.")
	// Tells them to roll and asks if they passed go, then adds $2,000K if they did and does nothing if they did not
	bootbox.dialog({
		message: "Did you pass Go?",
		title: "Please Roll & Move",
		buttons: {
			// Passed go
			success: {
				label: "Yes I Passed GO!",
				className: "btn-success",
				callback: function() {
					// Adds $2,000K to balance
					players.player3.wallet.balance = +players.player3.wallet.balance + +2000;
					notiLog.newWalletUpdate(players.player3.name + " now has $" + numbersWithCommas(players.player3.wallet.balance) + "K")
					playerThreeTurnSpentMoney();
				}
			},
			// Did not pass go
			danger: {
				label: "I did not :(",
				className: "btn-danger",
				callback: function() {
					playerThreeTurnSpentMoney();
				}
			},
		}
	})
};


var normalTurn = function () {
		// Player 1's Turn
		playerOneTurn();
};

// Begins the game
var beginGame = function () {
	$('.begin-game').click(function () {
		// Gets the data from the input fields 
		getData();
		// Normal Turn
		normalTurn();
	})
};
// Not working
var updatePlayerBalances = function () {
	$('.name-test').click(function() {
		$('.name-test').remove();
		var j1 = $('#input-player1-name').val();
		players.player1.name = j1;
		span = document.getElementsByClassName("pbs-1-name");
		txt = document.createTextNode("hi");
		span.innerText = txt.textContent;
		notiLog.newGenUpdate(players.player1.name);
	})
}
// The main function for the normal non-jquery code
var main = function() {
	// Shows Instructions
	welcome();
	// Begins the Game
	beginGame();
};


// Runs the main jquery function
$(document).ready(main);