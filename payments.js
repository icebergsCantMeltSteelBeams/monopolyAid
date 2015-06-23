var payments = function () {
	// Player 1 Stuff
	$('.1p2').click(function () {
		bootbox.prompt("How much did you pay?", function(result) {                
			  if (result === null) {                                             
			    Example.show("Prompt dismissed");                              
			  } else {
			    players.player1.wallet.send.player2(result);                          
			  }
		});
	})

	$('.1p3').click(function () {
		bootbox.prompt("How much did you pay?", function(result) {                
			  if (result === null) {                                             
			    Example.show("Prompt dismissed");                              
			  } else {
			    players.player1.wallet.send.player3(result);                          
			  }
		});
	})

	$('.1ph').click(function () {
		bootbox.prompt("How much did you pay?", function(result) {                
			  if (result === null) {                                             
			    Example.show("Prompt dismissed");                              
			  } else {
			    players.player1.wallet.send.house(result);                          
			  }
		});
	})

	$('.1pg').click(function () {
		bootbox.alert("Congrats on passing go", function() {
		  	players.player1.wallet.balance += +2000000 
		});
	})


	// Player 2 Stuff
	$('.2p1').click(function () {
		bootbox.prompt("How much did you pay?", function(result) {                
			  if (result === null) {                                             
			    Example.show("Prompt dismissed");                              
			  } else {
			    players.player2.wallet.send.player1(result);                          
			  }
		});
	})

	$('.2p3').click(function () {
		bootbox.prompt("How much did you pay?", function(result) {                
			  if (result === null) {                                             
			    Example.show("Prompt dismissed");                              
			  } else {
			    players.player2.wallet.send.player3(result);                          
			  }
		});
	})

	$('.2ph').click(function () {
		bootbox.prompt("How much did you pay?", function(result) {                
			  if (result === null) {                                             
			    Example.show("Prompt dismissed");                              
			  } else {
			    players.player2.wallet.send.house(result);                          
			  }
		});
	})

	$('.2pg').click(function () {
		bootbox.alert("Congrats on passing go", function() {
		  	players.player2.wallet.balance += +2000000 
		});
	})

	// Player 3 Stuff
	$('.3p1').click(function () {
		bootbox.prompt("How much did you pay?", function(result) {                
			  if (result === null) {                                             
			    Example.show("Prompt dismissed");                              
			  } else {
			    players.player3.wallet.send.player1(result);                          
			  }
		});
	})

	$('.3p2').click(function () {
		bootbox.prompt("How much did you pay?", function(result) {                
			  if (result === null) {                                             
			    Example.show("Prompt dismissed");                              
			  } else {
			    players.player3.wallet.send.player2(result);                          
			  }
		});
	})

	$('.3ph').click(function () {
		bootbox.prompt("How much did you pay?", function(result) {                
			  if (result === null) {                                             
			    Example.show("Prompt dismissed");                              
			  } else {
			    players.player3.wallet.send.house(result);                          
			  }
		});
	})

	$('.3pg').click(function () {
		bootbox.alert("Congrats on passing go", function() {
		  	players.player3.wallet.balance += +2000000 
		});
	})
}