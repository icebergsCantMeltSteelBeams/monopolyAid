var players = {
	player1: {
		name: "Loading",
		wallet: {
			balance: 0,
			fancyBalance: function () {
				return "$" + numbersWithCommas(this.balance);
			},
			send: {
				player2: function(amount) {
					players.player1.wallet.balance -= +amount
					players.player2.wallet.balance += +amount
				},
				player3: function(amount) {
					players.player1.wallet.balance -= +amount
					players.player3.wallet.balance += +amount
				},
				house: function(amount) {
					players.player1.wallet.balance -= +amount
					players.house.wallet.balance += +amount
				},
			},
		},
	},
	player2: {
		name: "Loading",
		wallet: {
			balance: 0,
			fancyBalance: function () {
				return "$" + numbersWithCommas(this.balance);
			},
			send: {
				player1: function(amount) {
					players.player2.wallet.balance -= +amount
					players.player1.wallet.balance += +amount
				},
				player3: function(amount) {
					players.player2.wallet.balance -= +amount
					players.player3.wallet.balance += +amount
				},
				house: function(amount) {
					players.player2.wallet.balance -= +amount
					players.house.wallet.balance += +amount
				},
			},
		},
	},
	player3: {
		name: "Loading",
		wallet: {
			balance: 0,
			fancyBalance: function () {
				return "$" + numbersWithCommas(this.balance);
			},
			send: {
				player1: function(amount) {
					players.player3.wallet.balance -= +amount
					players.player1.wallet.balance += +amount
				},
				player2: function(amount) {
					players.player3.wallet.balance -= +amount
					players.player2.wallet.balance += +amount
				},
				house: function(amount) {
					players.player3.wallet.balance -= +amount
					players.house.wallet.balance += +amount
				},
			},
		},
	},
	house: {
		name: "Bank",
		wallet: {
			balance: 0,
			fancyBalance: function () {
				return "$" + numbersWithCommas(this.balance);
			},
		},
	}
}