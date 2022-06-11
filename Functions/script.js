"use strict";

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
