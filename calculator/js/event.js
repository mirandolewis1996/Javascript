function myans(){

	var fnum = parseInt(document.getElementById("fnum").value);
	var snum = parseInt(document.getElementById("snum").value);

	var sel = document.getElementById("sele").value;

	

	if(sel === "add" ){
		
		document.getElementById('ans').value = fnum + snum
	}

	else if (sel === "sub"){

		document.getElementById('ans').value = fnum - snum
	}

	else if (sel === "mul"){

		document.getElementById('ans').value = fnum * snum
	}

	else if(sel === "div"){

		document.getElementById('ans').value = fnum  / snum
	}



}
