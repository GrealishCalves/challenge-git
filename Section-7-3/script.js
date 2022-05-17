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
const score = [0, 0];
let stateScore = 0;
let activePlayer = 0;
let playing = true;

//: Manipulate String elements
score0Element.textContent = 0;
score1Element.textContent = 0;
diceEl.classList.add("hidden");

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

//FUNCTION: Manipulate DiceRoll
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
//FUNCTION: create winner
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
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add("player--winner");
		} else {
			switchPlayer();
		}
	}
});
