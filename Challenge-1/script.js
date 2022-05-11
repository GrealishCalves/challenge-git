//TODO:Functions challenge
function calcAvg(a, b, c) {
	return a + b + c / 3;
}
//const calcAvg2 = (a, b, c) => a + b + c / 3;
const scoreX = calcAvg(1, 20, 3);
const scoreY = calcAvg(2, 4, 6);
function checkWin(avgX, avgY) {
	if (avgX >= 2 * avgY) {
		console.log(`team x wins: ${avgX} > ${avgY}`);
	} else if (avgY >= 2 * avgX) {
		console.log(`team Y wins: ${avgX} < ${avgY}`);
	} else {
		console.log("no team wins");
	}
}
console.log(checkWin(scoreX, scoreY));

//TODO:Array challenge
function calcTip(bill) {
	return bill >= 50 && bill <= 100 ? bill * 0.15 : bill * 0.2;
}
//const calcTip2 = (bill) =>
//bill >= 50 && bill <= 100 ? bill * 0.15 : bill * 0.2;
const bills = [50, 100, 43, 87];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

//TODO:Object challenge

const max = {
	fullName: "maxim mil",
	mass: 76,
	height: 1.83,
	calcBmi: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};
const john = {
	fullName: "john doe",
	mass: 87,
	height: 1.77,
	calcBmi: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};
max.calcBmi(); //first time calculation for max
john.calcBmi(); //first time calculation for john

if (max.bmi > john.bmi) {
	console.log(`${max.fullName} BMI ${john.bmi}
	is higher than john`);
} else max.bmi < john.bmi;
console.log(`${john.fullName} BMI ${max.bmi}
	is higher than john ${john.bmi}`);

console.log(john.bmi, typeof john.bmi, max.bmi, typeof max.bmi); //return as a number
