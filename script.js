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