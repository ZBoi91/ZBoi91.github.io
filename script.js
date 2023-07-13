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
// Array with all memes
let allMemes = ["badluck","blackman","boy","doge","nmjgg","overly","philosoraptor","spiderman","badluck","blackman","boy","doge","nmjgg","overly","philosoraptor","spiderman"];
// Array to store clicked memes
let clickedMemes = [];

// gameStart function
function gameStart()
{
	// Select all memes
	let memes = document.querySelectorAll(".memes");
	// Loop through all meme images
	for(let i = 0; i < memes.length; i++)
	{
		// Generate one random meme from the array
		//let randomMeme = allMemes.splice(allMemes.length * Math.random() | 0, 1)[0];
		//let randomMeme = allMemes[Maths.floor(Math.random() * allMemes.length)];
		//let randomMeme = Math.floor(Math.random() * (i + i));
		//allMemes[randomMeme].style.order = i;
		//allMemes[i].style.order = randomMeme;
		let randomIndex = Math.floor(Math.random() * allMemes.length);
		let randomMeme = allMemes.splice(randomIndex, 1)[0];
		// Set the random generated meme image
		document.getElementsByClassName("memes")[i].innerHTML += "<img id='"+i+"' src='images/"+randomMeme+".jpg' width='130' height='130' style='display: none;' />";
	}
}

// Show memes function
function showMeme(memeid)
{
	// Get Click counter
	let allClicks = document.getElementById("clicks").innerHTML;
	// Increase the click counter by 1
	allClicks++;
	// Display the new clicks counter
	document.getElementById("clicks").innerHTML = allClicks;
	// Check if clickedMemes array length IS NOT equal to 2
	if(clickedMemes.length != 2)
	{	// Display the clicked memes
		document.getElementById(memeid).style.display = "block";
		// Disable the mouse pointer
		document.getElementById("memes"+memeid).style.pointerEvents = "none";
		// Push this clicked memes ID into clickedMemes array
		clickedMemes.push(memeid);
		// Check if clickedMemes array length IS equal to 2
		if(clickedMemes.length === 2)
		{
			// Check both clicked memes name are same
			if(document.getElementById(clickedMemes[0]).getAttribute("src") == document.getElementById(clickedMemes[1]).getAttribute("src"))
			{
				// Increase the matchedPair by 1
				matchedPair++;
				setTimeout(function(){
					// Empty the clickedMemes array after half second
					clickedMemes = [];					
				},500);
				// Check if matchedPair IS equal to 8
				if(matchedPair == 8)
					document.getElementById("restartScreen").style.display = "block"; // Display the restartScreen
			}
			else
			{
				setTimeout(function(){
					// Hide 1st meme
					document.getElementById(clickedMemes[0]).style.display = "none";
					// Hide 2nd meme
					document.getElementById(clickedMemes[1]).style.display = "none";
					// Enable the mouse pointer event for first meme
					document.getElementById("memes"+clickedMemes[0]).style.pointerEvents = "auto";
					// Enable the mouse pointer event for second meme
					document.getElementById("memes"+clickedMemes[1]).style.pointerEvents = "auto";
					// Empty the clickedMemes array
					clickedMemes = [];
				},500);
			}
		}
	}
}

// Start the game
gameStart();