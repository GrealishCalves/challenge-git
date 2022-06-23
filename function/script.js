// HINT: Passing by value and reference
// javascript doesn't work with passing by reference

// the function createBooking is called with the parameters flightNum and numPassenger setting the default value of numPassenger to 1 and price to 200
const bookings = [];
const createBooking = (
	flightNum,
	numPassenger = 1,
	price = 200 * numPassenger
) => {
	const booking = {
		flightNum,
		numPassenger,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};
createBooking("LV123", 2, 100);
createBooking("LV123", 2);
createBooking("LV123", undefined, 100);

const object = {
	name: "John duane",
	passport: 12345,
};
const flight = "LD321";
console.log(object);
console.log(flight);

// passing arguments to the function, value vs reference

const checkInflight = function (flightNum, passenger) {
	flightNum = "LV123"; // primitive value
	passenger.name = "Mr " + passenger.name; // passing a reference to the function.

	if (passenger.passport === 12345) {
		console.log("Welcome " + passenger.name);
	} else {
		console.log("You are not allowed to enter");
	}
};

const newPassport = (passenger) => {
	passenger.passport =
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15);
};

checkInflight(flight, object);
console.log(object);
console.log(flight);

// error handling - passing reference object to newPassport function and then try to check-in

newPassport(object);
checkInflight(flight, object); // passing

//HINT: functions accepting callback functions as arguments

const oneWord = function (str) {
	return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
	const [first, second, ...rest] = str.split(" ");
	return [first.toUpperCase(), second.toUpperCase(), ...rest].join(" ");
};

const transformer = function (str, func) {
	console.log(`original string: ${str}`);
	console.log(`transformed string: ${func(str)}`);
};

transformer("JavaScript is the best", upperFirstWord);

//HINT: functions returning functions

const greet = function (greet) {
	return function (name) {
		return `${greet} ${name}`;
	};
};
console.log(greet("Hello")("John")); // passing a function as an argument to another function

const greet2 = (greeting) => (name) => `${greeting} ${name}`; // using arrow function
console.log(greet2("Hello")("maxim"));

// HINT: functions call and apply method calls

const lufthansa = {
	airline: "Lufthansa",
	iata: "LH",
	booking: [],
	book(flightNum, passNum) {
		this.booking.push({
			flightNum: `${this.iata}${flightNum}`,
			passNum,
		});
	},
};
const easyJet = {
	airline: "EasyJet",
	iata: "EZ",
	booking: [],
};
const book = lufthansa.book; // copy the method book to a new function book
const bookEasyJet = book.bind(easyJet); // bind the method book to the object easyJet
const bookEasyJetExposits = book.bind(easyJet, "LV1233333"); // partial application - part of the arguments are passed

book.call(easyJet, "123", 1);
console.log(easyJet);

//HINT: functions method

bookEasyJet("LV123", 2);
bookEasyJetExposits(24);
console.log(easyJet);

// buyPlanes is a method of the object easyJet
easyJet.planes = 300;
easyJet.buyPlanes = function (num) {
	this.planes++;
	console.log(this);
};
// in this case the 'this' keyword refers to the object easyJet and not to the function buyPlanes
document
	.querySelector(".buy")
	.addEventListener("click", easyJet.buyPlanes.bind(easyJet)); // bind the method buyPlanes to the object easyJet (partial application - increase the number of planes)
console.log(easyJet);

//HINT: partial application

const addTax = function (price, tax) {
	return price + price * tax;
};

const addVat = addTax.bind(undefined, 100, 0.2); // partial application - part of the arguments are passed
console.log(addVat());
