"use strict";

//HINT: using "this" in a function deceleration

//regular function doesn't have a object owner, "this" method would be (undefined) / without the strict mode it will be a global object
const calcAge = function (year) {
	console.log(2022 - year);
	console.log(this);
};
calcAge(1991);

//arrow function use "this" as a lexical, and the parent scope is "windows"(global scope)
const calcAgeArrow = (year) => {
	console.log(2037 - year);
	console.log(this);
};
calcAgeArrow(1991);

// HINT: using "this" method in function declaration

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

const f = maxim.calcAge; // copy the calcAge without call the function (regular function as a variable)
f(); // the year is undefined because "this" method is not attached to the object owner

// HINT: using "this" method as an arrow function / regular function

const terry = {
	year: 1991,
	lastName: "John",
	email: "john@example.com",
	greet: () => console.log(`hey ${this.lastName}`), // never use this arrow function in object
	greet2: function () {
		console.log(`hey ${this.lastName}`);
	},
};
terry.greet(); //  print undefined, 'this' parent scope in global scope
terry.greet2(); // print john, 'this' parent scope is the object

// HINT: using arrow function inside a regular function - "this" method scope parent will be "calcAge"
const noa = {
	year: 1991,
	lastName: "John",
	email: "john@example.com",
	calcAge: function () {
		console.log(2022 - this.year);
		const isMillennial = () => {
			console.log(this.year >= 1991 && this.year <= 1996);
		};
		isMillennial();
	},
};
noa.calcAge();
