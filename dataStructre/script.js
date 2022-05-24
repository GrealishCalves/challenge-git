"use strict";

//HINT: destructure arrays - unpacking
const arr = ["maxim", "kai", "noa"];

const [x, y, z] = arr; // destructure arrays
let [aa, , bb] = arr; // destructure arrays

console.log(x, y, z); //
console.log(aa, bb);
console.log(bb, aa); // assign new position variables

//function - return position (food) from array
const rest = {
	mainCurses: ["pizza", "apple", "hamburger", "orange"],
	secondaryCurses: ["chocolate", "iceCream", "cookie"],

	order: function (mainPos, secondaryPos) {
		return [this.mainCurses[mainPos], this.secondaryCurses[secondaryPos]];
	},
};
console.log(rest.order(1, 2));
