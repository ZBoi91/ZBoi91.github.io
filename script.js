
let startGameBtn = document.querySelector("#startGameBtn");
// Start Game button event
startGameBtn.addEventListener("click", function(){
	// Get both player's name
	let playername1 = document.getElementById("name1").value;
	let playername2 = document.getElementById("name2").value;
	// Check if player name 1 is empty
	if(playername1 == "")
	{
		// Display error message
		document.getElementById("error").innerHTML = "";
		document.getElementById("error").innerHTML = "Player Name 1 Required";
	}
	// Check if player name 2 is empty
	else if(playername2 == "")
	{
		// Display error message
		document.getElementById("error").innerHTML = "";
		document.getElementById("error").innerHTML = "Player Name 2 Required";
	}
	// Check if both player's name not empty
	else
	{
		// Hide the error message
		document.getElementById("error").innerHTML = "";
		// Hide the player name screen
		document.getElementById("createGameScreen").style.display = "none";
		// Display the game screen
		document.getElementById("gameScreen").style.display = "inline-block";
		// Display the player's name
		document.getElementById("pname1").innerHTML = playername1;
		document.getElementById("pname2").innerHTML = playername2;
		// Get all memes
		let memes = document.querySelectorAll(".memes");
		for(let i = 0; i < memes.length; i++)
		{
			// Generate random meme
			//let randomMeme = allMemes.splice(allMemes.length * Math.random() | 0, 1)[0];
			let randomIndex = Math.floor(Math.random() * allMemes.length);
			let randomMeme = allMemes.splice(randomIndex, 1)[0];
			// Set the random generated meme
			document.getElementsByClassName("memes")[i].innerHTML += "<img id='"+i+"' src='images/"+randomMeme+".jpg' width='140' height='140' style='display: none;' />";
		}
		// Set the player 1 as default turn
		document.getElementById("player1").classList.add("currentplayer");
	}
});

// Matched pair count
let matchedPair = 0;
// Set score 0 for both players
let scoreP1 = 0, scoreP2 = 0;
// Set current player default 1
let currentPlayer = "1";
// Array with all memes
let allMemes = ["badluck","blackman","boy","doge","nmjgg","overly","philosoraptor","spiderman","badluck","blackman","boy","doge","nmjgg","overly","philosoraptor","spiderman"];
// Array to store clicked memes
let clickedMemes = [];

// Show memes function
function showMeme(memeid)
{
	// Check if clickedMemes array length IS NOT equal to 2
	if(clickedMemes.length != 2)
	{
		// Display the clicked memes
		document.getElementById(memeid).style.display = "block";
		// Disable the mouse pointer
		document.getElementById("memes"+memeid).style.pointerEvents = "none";
		// Push this clicked meme ID into clickedMemes array
		clickedMemes.push(memeid);
		// Check if clickedMemes array length IS equal to 2
		if(clickedMemes.length == 2)
		{
			// Check both clicked memes name are same
			if(document.getElementById(clickedMemes[0]).getAttribute("src") == document.getElementById(clickedMemes[1]).getAttribute("src"))
			{
				// Increase the matchedPair by 1
				matchedPair++;
				// Check current player turn is 1
				if(currentPlayer == "1")
				{
					// Increment the player 1 score
					scoreP1++;
					// Display new score
					document.getElementById("scoreP1").innerHTML = scoreP1;
				}
				// Check current player turn is 2
				else if(currentPlayer == "2")
				{
					// Increment the player 2 score
					scoreP2++;
					// Display new score
					document.getElementById("scoreP2").innerHTML = scoreP2;
				}
				setTimeout(function(){
					// Empty the clickedMemes array after half second
					clickedMemes = [];					
				},500);
				// Check if matchedPair IS equal to 8
				if(matchedPair == 8)
				{
					//Get all memes
					let memes = document.querySelectorAll(".memes");
					for(let i = 0; i < memes.length; i++)
					{
						// Disable mouse cursor pointer on all memes
						document.getElementById("memes"+memeid).style.pointerEvents = "none";
					}
					// Display WINNER result
					document.getElementById("winresult").style.display = "block";
					// Check if player 1 score more than player 2 score
					if(scoreP1 > scoreP2)
						document.getElementById("winner").innerHTML = "PLAYER "+document.getElementById("pname1").innerHTML+" WINNER"; // Player 1 WINNER
					else if(scoreP2 > scoreP1) // Check if player 2 score more than player 1 score
						document.getElementById("winner").innerHTML = "PLAYER "+document.getElementById("pname2").innerHTML+" WINNER"; // Player 2 WINNER
					else if( scoreP1 == scoreP2) // Check if both player score are same
						document.getElementById("winner").innerHTML = "BOTH PLAYERS ARE WINNER"; // Both players are winner
				}
			}
			else
			{
				setTimeout(function(){
					// Check if current player is 1
					if(currentPlayer == "1")
					{
						// Set the current player to 2
						currentPlayer = "2";
						// Change the background color for the turn change
						document.getElementById("player1").classList.remove("currentplayer");
						document.getElementById("player2").classList.add("currentplayer");
					}
					// Check if current player is 2
					else
					{
						// Set the current player to 1
						currentPlayer = "1";
						// Change the background color for the turn change
						document.getElementById("player2").classList.remove("currentplayer");
						document.getElementById("player1").classList.add("currentplayer");
					}
					// Hide the clicked memes
					document.getElementById(clickedMemes[0]).style.display = "none";
					document.getElementById(clickedMemes[1]).style.display = "none";
					// Enable the mouse cursor pointer to click it again
					document.getElementById("memes"+clickedMemes[0]).style.pointerEvents = "auto";
					document.getElementById("memes"+clickedMemes[1]).style.pointerEvents = "auto";
					// Empty the clickedMemes array
					clickedMemes = [];
				},500);
			}
		}
	}
}
// Start the new game
function newGame()
{
	location.reload();
}