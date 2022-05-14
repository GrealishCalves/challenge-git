//VAR:
let secretKey = Math.trunc(Math.random() * 20) + 1;
let stateScore = 20;
let highScore = 0;

//FUNCTION: refactoring displayMassage
const displayMassage = function (message) {
	document.querySelector(".message").textContent = message;
};

//FUNCTION: guess vs stateScore function
document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);

	// when there no input
	if (!guess) {
		displayMassage("no guess");

		// when there is a guess
	} else if (guess === secretKey) {
		document.querySelector(".number").textContent = secretKey;
		displayMassage("Correct guess");
		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";
		if (stateScore > highScore) {
			highScore = stateScore;
			document.querySelector(".highscore").textContent = highScore;
		}

		// when guess is too high
	} else if (guess !== secretKey) {
		if (stateScore > 1) {
			stateScore--;
			displayMassage(guess > secretKey ? "Too high guess" : "too low guess");
			document.querySelector(".score").textContent = stateScore;
		} else {
			document.querySelector(".score").textContent = 0;
			displayMassage("you lost the game");
		}
		// when guess is too low
	}
});

//FUNCTION: rest button
document.querySelector(".again").addEventListener("click", function () {
	stateScore = 20; // initialize the state score
	secretKey = Math.trunc(Math.random() * 20) + 1; // initialize the secret key
	//initialize the content
	document.querySelector(".number").textContent = "?";
	displayMassage("start guessing...");
	document.querySelector(".score").textContent = stateScore;
	document.querySelector(".guess").value = "";

	//initialize the style
	document.querySelector("body").style.backgroundColor = " #222";
	document.querySelector(".number").style.width = "15rem";
});
