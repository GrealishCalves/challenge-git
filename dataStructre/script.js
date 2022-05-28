"use strict";

//HINT: destructure arrays - unpacking
const arr = ["maxim", "kai", "noa"];

const [x, y, z] = arr; // destructure arrays (can named as we want)
let [aa, , bb] = arr; // destructure skipped arrays

console.log(x, y, z); //
console.log(aa, bb);
console.log(bb, aa); // assign new position variables

// function - return position (food) from array
const rest = {
	mainCurses: ["pizza", "apple", "hamburger", "orange"],
	secondaryCurses: ["chocolate", "iceCream", "cookie"],

	order: function (mainPos, secondaryPos) {
		return [this.mainCurses[mainPos], this.secondaryCurses[secondaryPos]];
	},
};
console.log(rest.order(1, 2));

// destructure value from arrays to variables
const [xx, yy] = rest.order(2, 0);
console.log(xx, yy);

// destructure nested array
const nested = [1, 2, 44, [4, 5, 6]];
const [qq, ww, hj, [rr, tt, ii]] = nested;
console.log(qq, ii, hj);

//HINT: destructure object - unpacking

const rest2 = {
	mainCurses: ["pizza", "apple", "hamburger", "orange"],
	secondaryCurses: ["chocolate", "iceCream", "cookie"],
	open: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 45,
			close: 53,
		},
		sat: {
			open: 32,
			close: 40,
		},
	},
	par: ["par1", "par2", "par3"],
	orderDelivery: function () {},
};

// destructure object
// const { mainCurses, open, par } = rest2; // have to be like the original properties
// console.log(open, mainCurses);

// assign new name to properties
const { name: restName, open: hours, par: testPar } = rest2;
console.log(restName, hours, testPar);

// mutating variables
let a = 111;
let b = 202;
const obj = { a: 23, b: 43 };
console.log(a, b); // we want to mutated "let: 111,202" to "23,43" and destructure
({ a, b } = obj);
console.log(a, b); // we mutated them and destructured them

// destructure nested object
const {
	fri: { open: o, close: c },
} = rest2.open; // get the object "open" and destructure them and rename them "o,c"
console.log(o, c);

//HINT: Practice using destructure object and function instead

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
	pastaSuse: ["options1", "options2", "options3"],

	getAnOrder: function (positionStarterMenu, positionMainMenu) {
		let arr = [
			this.starterMenu[positionStarterMenu],
			this.mainMenu[positionMainMenu],
		];
		if (positionMainMenu === 1) {
			arr.push(this.pastaSuse[Math.floor(Math.random() * 3)]);
			return arr;
		} else {
			return arr;
		}
	},
	orderDelivery: function ({
		orderTime = "00:00",
		Name = "unknown",
		starterMenu = 0,
		mainMenu = 0,
	}) {
		console.log(
			`order time: ${orderTime} name: ${Name} received!, ${this.starterMenu[starterMenu]}, ${this.mainMenu[mainMenu]}`
		);
	},
	orderPasta: function (ing1, ing2, ing3) {
		console.log(
			`here is your Delicious pasta with ${ing1} and ${ing2} and ${ing3}`
		);
	},
};
console.log(restaurant.getAnOrder(1, 1));

const orderObj1 = {
	mainMenu: 0,
	starterMenu: 1,
	orderTime: "15:15",
	Name: "john",
};
var arr2 = restaurant.orderDelivery(orderObj1);

//HINT: spread operator

const arr3 = [1, 2, 3];
console.log([7, 5, ...arr3]); //add array to array
console.log(...arr3); //spread array value
console.log([...restaurant.mainMenu, "Gnocci"]); //based an array create a new array

//copy array
console.log([...restaurant.mainMenu]);

//join 2 array
console.log([...restaurant.mainMenu, ...restaurant.starterMenu]);

//iterables; array,strings, maps. sets. NOT object
const str = "maxim";
console.log(...str);

//real world example
const ingredients = [
	prompt("let make pasta! ingredients 1?"),
	prompt("ingredients 2?"),
	prompt("ingredients 3?"),
];

// console.log(restaurant.orderPasta(...ingredients)); // calling to function
