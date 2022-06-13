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

const flightNum = "LD321";
const passenger = {
	name: "John",
	passport: "12345",
};

// passing arguments to the function, value vs reference

const checkInflight = (flightNum, Passenger) => {
	flightNum = "LV123"; // primitive value -  will be changed to the value of the variable flightNum
	Passenger.name = "Mr " + Passenger.name; // reference value - will be changed to the original object Passenger

	if (passenger.passport === "12345") {
		console.log("check in success");
	} else console.log("Sorry, you are not allowed to enter");
};

const newPassport = (passenger) => {
	passenger.passport =
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15);
};
checkInflight(flightNum, passenger);
console.log(passenger);

// error handling - passing reference object to newPassport function and then try to check-in

newPassport(passenger);
checkInflight(flightNum, passenger);
console.log(passenger);
