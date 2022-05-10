//--Functions challenge
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

//--Arrays challenge
function calcTip(bill) {
	return bill >= 50 && bill <= 100 ? bill * 0.15 : bill * 0.2;
}
//const calcTip2 = (bill) =>
//bill >= 50 && bill <= 100 ? bill * 0.15 : bill * 0.2;
const bills = [50, 100, 43, 87];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
