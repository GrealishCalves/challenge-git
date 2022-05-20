"use strict";
//HINT: using "this" in a function deceleration

//regular function doesn't have a object owner, "this" method would be (undefined) / without the strict mode it will be a global object
const calcAge = function (year) {
	console.log(2022 - year);
	console.log(this);
};
calcAge(1991);

//arrow function use "this" as a lexical, and the parent scope is "windows" (global scope)
const calcAgeArrow = (year) => {
	console.log(2022 - year);
	console.log(this);
};
calcAgeArrow(1991);

//HINT: using "this" as an method declaration

const maxim = {
	year: 1991,
	calcAge: function () {
		console.log(2022 - this.year);
	},
};
calcAge(); // calling the method without a owner object - undefined
maxim.calcAge(); // calling the method with a owner object to calculate maxim age

const matilda = {
	year: 2001,
};
matilda.calcAge = maxim.calcAge; // copy the calcAge method to matilda (method borrowed)
matilda.calcAge(); // using maxim method to calculate age of matilda as an object owner
maxim.calcAge();
