"use strict";

//VAR: Selections elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let score, stateScore, activePlayer, playing;

// FUNCTION: Create a initialize state function
const init = function () {
	// staring state
	score = [0, 0];
	stateScore = 0;
	activePlayer = 0;
	playing = true;

	// reset state
	score0Element.textContent = 0;
	currentScore0El.textContent = 0;
	score1Element.textContent = 0;
	currentScore1El.textContent = 0;

	// reset winner
	diceEl.classList.add("hidden");
	player0El.classList.remove("player--winner");
	player0El.classList.add("player--active");
	player1El.classList.remove("player--winner");
	player1El.classList.remove("player--active");
};
// calling the initialize
init();
//FUNCTION: switchPlayer function
const switchPlayer = function () {
	// define a current--player
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	// define a query for which player are currently
	activePlayer = activePlayer === 0 ? 1 : 0;
	// reset the next player score
	stateScore = 0;
	// active the style on the current player
	player0El.classList.toggle("player--active");
	player1El.classList.toggle("player--active");
};
//FUNCTION: Manipulate DiceRoll function
btnRoll.addEventListener("click", function () {
	if (playing) {
		// generate a new random Number
		const dice = Math.trunc(Math.random() * 6 + 1);
		// display the dice roll
		diceEl.classList.remove("hidden");
		// define a picture of the dice
		diceEl.src = `dice-${dice}.png`;
		// check if the dice roll is a 1
		if (dice !== 1) {
			stateScore += dice;
			document.getElementById(`current--${activePlayer}`).textContent =
				stateScore;
		} else {
			switchPlayer();
		}
	}
});
//FUNCTION: create winner function
btnHold.addEventListener("click", function () {
	if (playing) {
		// add current score to active players score
		score[activePlayer] += stateScore;
		document.getElementById(`score--${activePlayer}`).textContent =
			score[activePlayer];
		// check if score is >= 100
		if (score[activePlayer] >= 20) {
			// un-active the dice
			playing = false;
			diceEl.classList.add("hidden");
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add("player--winner");
		} else {
			switchPlayer();
		}
	}
});
//FUNCTION: reset function
btnNew.addEventListener("click", init);
