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

const checkInflight = (flightNum, Passenger) => {
	flightNum = "LV123";
	Passenger.name = "Mr " + Passenger.name;

	if (passenger.passport === "12345") {
		console.log("Welcome " + passenger.name);
	} else console.log("Sorry, you are not allowed to enter");
};

checkInflight(flightNum, passenger);
console.log(flightNum);
console.log(passenger);
