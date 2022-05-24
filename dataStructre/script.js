"use strict";

//HINT: destructure arrays - unpacking
const arr = ["maxim", "kai", "noa"];

const [x, y, z] = arr; // destructure arrays (can named as we want)
let [aa, , bb] = arr; // destructure skipped arrays

console.log(x, y, z); //
console.log(aa, bb);
console.log(bb, aa); // assign new position variables

// function - return position (food) from array
const rest = {
	mainCurses: ["pizza", "apple", "hamburger", "orange"],
	secondaryCurses: ["chocolate", "iceCream", "cookie"],

	order: function (mainPos, secondaryPos) {
		return [this.mainCurses[mainPos], this.secondaryCurses[secondaryPos]];
	},
};
console.log(rest.order(1, 2));

// destructure value from arrays to variables
const [xx, yy] = rest.order(2, 0);
console.log(xx, yy);

// destructure nested array
const nested = [1, 2, 44, [4, 5, 6]];
const [qq, ww, hj, [rr, tt, ii]] = nested;
console.log(qq, ii, hj);

//HINT: destructure object - unpacking

const rest2 = {
	mainCurses: ["pizza", "apple", "hamburger", "orange"],
	secondaryCurses: ["chocolate", "iceCream", "cookie"],
	open: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 45,
			close: 53,
		},
		sat: {
			open: 32,
			close: 40,
		},
	},
	par: ["par1", "par2", "par3"],
};

// destructure object
const { mainCurses, open, par } = rest2; // have to be like the original properties
console.log(open, mainCurses);

// assign new name to properties
const { name: restName, open: hours, par: testPar } = rest2;
console.log(restName, hours, testPar);

// mutating variables
