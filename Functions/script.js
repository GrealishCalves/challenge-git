"use strict";

//HINT: passing arguments, passing by value vs reference

//creat flight number var and passenger object
const flight = "LV25";
const john = {
	name: "John",
	passport: "332211",
	flight: flight,
};

//creat a check-in object
const checkIn = function (flightNum, passenger) {
	//check-in manipulating the passenger properties
	flightNum = "LV845555";
	passenger.name = "Mr. " + passenger.name;

	//add validate passport method
	if (passenger.passport === "332211") {
		alert("check-in");
	} else "wrong passport";
};
//call the function with the passenger
checkIn(flight, john);

console.log(flight); // flight is a primitive type, we passing a copy value, flightNum is a new copy value (passing by value)
console.log(john); // passenger is a reference to john - same object in memory heap , so we changing the (passing by value)
