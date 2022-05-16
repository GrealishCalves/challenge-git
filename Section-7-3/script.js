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
let stateScore = 0;
let activePlayer = 0;

//: Manipulate String elements
score0Element.textContent = 0;
score1Element.textContent = 0;
diceEl.classList.add("hidden");

//FUNCTION: Manipulate DiceRoll
btnRoll.addEventListener("click", function () {
	const dice = Math.trunc(Math.random() * 6 + 1);
	diceEl.classList.remove("hidden");
	diceEl.src = `dice-${dice}.png`;

	if (dice !== 1) {
		stateScore += dice;
		document.getElementById(`current--${activePlayer}`).textContent = stateScore;
	} else {
		document.getElementById(`current--${activePlayer}`).textContent = 0;
		activePlayer = activePlayer === 0 ? 1 : 0;
		stateScore = 0;
		player0El.classList.toggle("player--active");
		player1El.classList.toggle("player--active");
	}
});
