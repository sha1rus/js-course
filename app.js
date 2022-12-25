const userAge = 25;
const haveWork = false;
const cash = 1900;
const macCost = 2000;

function credit (uage, work){
	if (uage<24) {
		return 0;
	}
	return (haveWork ? 500 : 100);
}
console.log((macCost<=(cash+credit(userAge,haveWork)) ? true : false));
