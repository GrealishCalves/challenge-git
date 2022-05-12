const secretKey = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretKey;
let stateScore = 20;

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess, typeof guess);
	if (!guess) {
		document.querySelector(".message").textContent = "Please enter a guess";
	} else if (guess === secretKey) {
		document.querySelector(".message").textContent = "Correct guess";
	} else if (guess > secretKey) {
		document.querySelector(".score").textContent = stateScore--;
		if (stateScore > 1) {
			document.querySelector(".message").textContent = "Too high guess";
		} else {
			document.querySelector(".message").textContent = "you lost the game";
			document.querySelector(".score").textContent = 0;
		}
	} else if (guess < secretKey) {
		document.querySelector(".score").textContent = stateScore--;
		if (stateScore > 1) {
			document.querySelector(".message").textContent = "Too low guess";
		} else {
			document.querySelector(".message").textContent = "you lost the game";
			document.querySelector(".score").textContent = 0;
		}
	}
});
