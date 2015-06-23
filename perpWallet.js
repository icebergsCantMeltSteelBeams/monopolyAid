var perpWallet = function () {
	setInterval(function(){
		document.getElementById("player1BalanceDisplay").innerHTML = players.player1.wallet.fancyBalance();
		document.getElementById("player2BalanceDisplay").innerHTML = players.player2.wallet.fancyBalance();
		document.getElementById("player3BalanceDisplay").innerHTML = players.player3.wallet.fancyBalance();
		players.player1.wallet.balance += +1000;
		players.player2.wallet.balance += +1000;
		players.player3.wallet.balance += +1000;
	 }, 500);
}