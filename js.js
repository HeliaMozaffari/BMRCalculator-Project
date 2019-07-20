
	
	
	document.getElementById('calculateBMR').addEventListener('mousedown', BMR);
	function BMR(){
	var gender = document.getElementById('gender').value;
	var age = document.getElementById('age').value;
	var height2= document.getElementById('centimeter').value;
	var weight1= document.getElementById('kilogram').value;
	var activity = document.getElementById('activity1').value;
	var calculate;
	
	if(gender=="female"){
		calculate = activity*((10 * weight1) + (6.25 * height2) - (5 * age) - 161)
		document.getElementById("display").innerHTML = (calculate.toFixed(2));
		}
	else{
		calculate = activity*((10 * weight1) + (6.25 * height2) - (5 * age) + 5)
		document.getElementById("display").innerHTML = (calculate.toFixed(2));
	}
	}
 