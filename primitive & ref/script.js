"use strict";

//HINT: primitive type and reference

// the lastName and oldName point different address on the stack
let lastName = "williams";
let oldName = lastName;
lastName = "davis";
console.log(lastName, oldName);

// the reference are point to the same address on the heap
const jessica = {
	firstName: "jessica",
	lastName: "williams",
	age: 29,
};
const marriedJessica = jessica;
marriedJessica.lastName = "davis";
console.log("before married:", jessica);
console.log("after:", marriedJessica);

// method for getting a new copy of the existing object and Manipulate properties
const jessicaCopy = Object.assign({}, marriedJessica);
jessicaCopy.firstName = "John";
jessicaCopy.childrens = 2;
jessicaCopy.nameChild = [];
jessicaCopy.nameChild.push("boy1");
jessicaCopy.nameChild.push("boy2");
console.log(jessicaCopy);
