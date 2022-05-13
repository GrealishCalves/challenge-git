const secretKey = Math.trunc(Math.random() * 20) + 1;
let stateScore = 20;

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);

	// when there no input
	if (!guess) {
		document.querySelector(".message").textContent = "no guess";

		// when there is a guess
	} else if (guess === secretKey) {
		document.querySelector(".number").textContent = secretKey;
		document.querySelector(".message").textContent = "Correct guess";
		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";

		// when guess is too high
	} else if (guess > secretKey) {
		if (stateScore > 1) {
			stateScore--;
			document.querySelector(".score").textContent = stateScore;
			document.querySelector(".message").textContent = "Too high guess";
		} else {
			document.querySelector(".score").textContent = 0;
			document.querySelector(".message").textContent = "you lost the game";
		}
		// when guess is too low
	} else if (guess < secretKey) {
		if (stateScore > 1) {
			stateScore--;
			document.querySelector(".score").textContent = stateScore;
			document.querySelector(".message").textContent = "Too low guess";
		} else {
			document.querySelector(".score").textContent = 0;
			document.querySelector(".message").textContent = "you lost the game";
		}
	}
});
