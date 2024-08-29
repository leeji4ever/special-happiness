var  bool = false;//to check if quiz requires getting the year
				  //see quiz.js
var rateObject = literacy;//sends rateObject value to quiz.js

function shuffle(array) {
	  let currentIndex = array.length;

	  // While there remain elements to shuffle...
	  while (currentIndex != 0) {

		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
		  array[randomIndex], array[currentIndex]];
	  }
	}


function highestAns(num){
	var ans = parseFloat(rateObject[txt]["total population"]) //gets the literacy rate
	console.log(ans)
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	

	
	shuffle(ansArray)
	
	$("label[for*="+ansArray[0]+"]").text(ans.toFixed(2)+" %")
	$("label[for*="+ansArray[1]+"]").text((0.81*ans).toFixed(2)+" %") 
	$("label[for*="+ansArray[2]+"]").text((0.48*ans).toFixed(2)+" %") 
	$("label[for*="+ansArray[3]+"]").text((0.2*ans).toFixed(2)+" %") 
	
	return ansArray[0]
}

function lowestAns(num){
	var ans = parseFloat(literacy[txt]["total population"])
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	
	if(ans >= 90){ // if the answer is over 90, ideal to make it the largest ans
				   //therefor this if statement makes the answers that are over 90 the highest answer
		$("label[for*="+ansArray[3]+"]").text((ans).toFixed(2)+" %")
		$("label[for*="+ansArray[1]+"]").text((0.81*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[2]+"]").text((0.48*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[0]+"]").text((0.2*ans).toFixed(2)+" %")
	}		
	else{ // if it isnt over 90 same as original function
		$("label[for*="+ansArray[0]+"]").text((ans+(100-ans)*0.95).toFixed(2)+" %") 
		$("label[for*="+ansArray[1]+"]").text((ans+(100-ans)*0.63).toFixed(2)+" %") 
		$("label[for*="+ansArray[2]+"]").text((ans+(100-ans)*0.31).toFixed(2)+" %") 
		$("label[for*="+ansArray[3]+"]").text((ans).toFixed(2)+" %")
	}
	
	return ansArray[3]
}

function secondHighestAns(num){
	var ans = parseFloat(literacy[txt]["total population"])
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	if(ans >= 90){ 
		$("label[for*="+ansArray[1]+"]").text((ans).toFixed(2)+" %")
		$("label[for*="+ansArray[0]+"]").text((0.81*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[2]+"]").text((0.48*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[3]+"]").text((0.2*ans).toFixed(2)+" %")
	}
	else{
		$("label[for*="+ansArray[0]+"]").text((ans+(100-ans)*0.95).toFixed(2)+" %") 
		$("label[for*="+ansArray[1]+"]").text((ans).toFixed(2)+" %")
		$("label[for*="+ansArray[2]+"]").text((ans*0.25).toFixed(2)+" %") 
		$("label[for*="+ansArray[3]+"]").text((ans*0.68).toFixed(2)+" %")
	}
		
	return ansArray[1]
}

function secondLowestAns(num){
	var ans = parseFloat(literacy[txt]["total population"])
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	
	if(ans >= 90){ 
		$("label[for*="+ansArray[2]+"]").text((ans).toFixed(2)+" %")
		$("label[for*="+ansArray[1]+"]").text((0.81*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[0]+"]").text((0.48*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[3]+"]").text((0.2*ans).toFixed(2)+" %")
	}
	else{
		$("label[for*="+ansArray[0]+"]").text((ans+(100-ans)*0.95).toFixed(2)+" %") 
		$("label[for*="+ansArray[1]+"]").text((ans+(100-ans)*0.59).toFixed(2)+" %")
		$("label[for*="+ansArray[2]+"]").text((ans).toFixed(2)+" %")	
		$("label[for*="+ansArray[3]+"]").text((ans*0.35).toFixed(2)+" %") 
	}
	
	return ansArray[2]
}

function ansRandom(){
	var random = Math.floor(Math.random()*4)
	return random
}
