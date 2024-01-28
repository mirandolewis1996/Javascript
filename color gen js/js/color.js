let target = document.body;

function changeBgColor(){
	target.style.background = getRanColor();
	setTimeout(changeBgColor,1000)
}



function getRanColor(){
	const value = 256;
	let red = getRanNum(value);
	let green = getRanNum(value);
	let blue = getRanNum(value);

	return 'rgb('+red+','+green+','+blue+')'
}

function getRanNum(limitvalue){

	let randomnumber = Math.random()

	randomnumber = randomnumber * limitvalue;
	randomnumber = Math.floor(randomnumber);
	return randomnumber

}

changeBgColor();