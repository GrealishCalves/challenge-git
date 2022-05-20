"use strict";
// hoisting variable's

console.log(me); //undefined (creat var in window.me with no value)
console.log(me2); //need to initialize (TDZ)
console.log(me3); //need to initialize (TDZ)

var me = "maxim";
let me2 = "john";
const me3 = 1991;

// hoisting variable's

//function deceleration - can call the function before defined
console.log(addDeclaration(1, 2));
function addDeclaration(a, b) {
	return a + b;
}

//function expression - Cannot access 'addExpression' before initialization (const = variable in TDZ)
console.log(addExpression(1, 2));
const addExpression = function (a, b) {
	return a + b;
};

//function expression - addExpression is not a function (the function was hoisting and change to "undefined" (undefined(1,2)))
console.log(addExpression2(1, 2));
var addExpression2 = function (a, b) {
	return a + b;
};

//Function Arrow - Cannot access 'addExpression' before initialization (const = variable in TDZ)
console.log(addArrow(1, 2));
const addArrow = (a, b) => a + b;

//
