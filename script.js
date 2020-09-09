function compute(){
    var principal = document.getElementById("principal").value; //Inputted principal 

    if(principal <= 0){
    	//Occurs if principal is less than or equal to 0
    	alert("Enter a Positive Number"); //Pop-up alert shows up
    	document.getElementById("principal").focus(); //Focus on principal input box
    }else{
    	//Occurs if principal is positive
    	var rate = document.getElementById("rate").value; //Selected interest rate
    	var years = document.getElementById("years").value; //Selected years
    	var interest = (principal * rate * parseInt(years))/100; //Calculation of interest

    	var d = new Date();
    	d.setFullYear(d.getFullYear() + parseInt(years)); //Adding years to current year

    	document.getElementById("result").innerHTML = "If you deposit " + '<mark>' + principal + '</mark>' + "," + '<br>'+
    	"at an interest rate of " + '<mark>' + rate + "%" + '</mark>' + "," + '<br>' +
    	"you will receive an amount of " + '<mark>' + interest.toFixed(2) + '</mark>' + "," + '<br>' +
    	"in the year " + '<mark>' + d.getFullYear() + '</mark>'; //Outputting resulting statement with highlighting marks
    } 
}

function range_slide(){
	//Adjusts slide values as it changes
	var r = document.getElementById("rate").value;
	document.getElementById("slide").innerHTML = r + "%";
}  