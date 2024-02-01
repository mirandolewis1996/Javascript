var result = document.getElementById('disvalue')


function addvalue(val){
	result.value+=val

	console.log(result.value)
}




function ans(){
	result.value = eval(result.value)
	console.log(result.value)
}


function clearvalue(){

	result.value = ""
}