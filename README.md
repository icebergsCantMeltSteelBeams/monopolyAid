# monopolyAid
If you've played monopoly before, you know the pain of having to count out and 
give others money. Even with the shitty debit card edition it takes a minute to 
make a single transaction. Monopoly Aid hopes to fix those problems.
(Note: I'm a shitty but getting better programmer and I wrote half of this barely awake and did my best to comment areas so others can see what I did and improve it
Flowchart of shitty js: http://puu.sh/ip6mu/f5542fcf4c.png)

Current Version: 2.0


Planned Features:

	Unknown Release Date:
	
		- Can roll dice for you
		
		- Supports Support for up to 5 players
		
		- Pool taxes to Free Parking

	V2.0:
	
	- No more reading from the console! Features a notification log! That means that it will be able to be run
	on google chrome instead of just firefox. (Reason being that in firefox you can open the console while there is prompts asking for info unlike chrome, although I also fixed this by
	using bootstrap)
	
	- Supports 3 Players
	
	- Text Area Input Fields!

Existing Builds:

	V1.4:
	
	- Text-Only
	
	- Only support for firefox
	
	- Rolls Dice for you
	
	- Supports 3 players
	
	- Save your progress
	



<!-- Player 1 -->
			<div class="wd-pwd col-md-12">
				<span class="wd-pwd-info">
					<script type="text/javascript">document.write("<p class="wd-pwd-info-text">" + players.player1.name + " has $" + numbersWithCommas(players.player1.wallet.balance) + "K "+ "</p>"); </script>
				</span>
			</div>
			

$('.wd').after('<div class="wd-pwd col-md-12"><span class="wd-pwd-info"><script type="text/javascript">document.write("<p>" + players.player1.name + " has $" + numbersWithCommas(players.player1.wallet.balance) + "K "+ "</p>"); </script></span></div>');