// HINT: Passing by value and reference
// javascript doesn't work with passing by reference

// the function createBooking is called with the parameters flightNum and numPassenger setting the default value of numPassenger to 1 and price to 200
// const bookings = [];
// const createBooking = (
// 	flightNum,
// 	numPassenger = 1,
// 	price = 200 * numPassenger
// ) => {
// 	const booking = {
// 		flightNum,
// 		numPassenger,
// 		price,
// 	};
// 	console.log(booking);
// 	bookings.push(booking);
// };
// createBooking("LV123", 2, 100);
// createBooking("LV123", 2);
// createBooking("LV123", undefined, 100);

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
