var getInput = function () {
	// Runs when the Start Game! Button is Pressed
	$('.inputButton').click(function () {
		// Function that returns player's name
		var getPlayer1Name = function () {
			return $('#input-player1-name').val()
		}
		// Sets the player's new name
		players.player1.name = getPlayer1Name();
		// Function that returns player's name
		var getPlayer2Name = function () {
			return $('#input-player2-name').val()
		}
		// Sets the player's new name
		players.player2.name = getPlayer2Name();
		// Function that returns player's name
		var getPlayer3Name = function () {
			return $('#input-player3-name').val()
		}
		// Sets the player's new name
		players.player3.name = getPlayer3Name();
		//Function that returns the starting amount
		var getStartingAmount = function () {
			return parseInt($('#input-startingAmount').val());
		}

		// Updates Player Balances
		players.player1.wallet.balance = getStartingAmount();
		players.player2.wallet.balance = getStartingAmount();
		players.player3.wallet.balance = getStartingAmount();
		// Lets you know that the names & starting balance have been changed
		console.log("Updated Player 1 Name to " + players.player1.name);
		console.log("Updated Player 2 Name to " + players.player2.name);
		console.log("Updated Player 3 Name to " + players.player3.name);
		console.log("Everyone now has " + players.player1.wallet.fancyBalance())
		document.getElementById("player1NameDisplay").innerHTML = players.player1.name;
		document.getElementById("player2NameDisplay").innerHTML = players.player2.name;
		document.getElementById("player3NameDisplay").innerHTML = players.player3.name;
		document.getElementById("player1BalanceDisplay").innerHTML = players.player1.wallet.fancyBalance();
		document.getElementById("player2BalanceDisplay").innerHTML = players.player2.wallet.fancyBalance();
		document.getElementById("player3BalanceDisplay").innerHTML = players.player3.wallet.fancyBalance();

		$('.inputButton').remove();
	})
}