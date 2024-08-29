var  bool = false;//to check if quiz requires getting the year
				  //see quiz.js
var rateObject = mortalityRate;//sends rateObject value to quiz.js

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
	var ans = parseFloat(rateObject[txt]["total"]) //gets the mortality rate value
	console.log(ans)
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	
	$("label[for*="+ansArray[0]+"]").text((ans).toFixed(1)+ " deaths/1,000 live births")
	$("label[for*="+ansArray[1]+"]").text((0.77*ans).toFixed(1)+ " deaths/1,000 live births") 
	$("label[for*="+ansArray[2]+"]").text((0.41*ans).toFixed(1)+ " deaths/1,000 live births") 
	$("label[for*="+ansArray[3]+"]").text((0.12*ans).toFixed(1)+ " deaths/1,000 live births") 
	
	return ansArray[0]
}

function lowestAns(num){
	var ans = parseFloat(rateObject[txt]["total"])
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	$("label[for*="+ansArray[0]+"]").text((3.1*ans).toFixed(1)+ " deaths/1,000 live births") 
	$("label[for*="+ansArray[1]+"]").text((2.5*ans).toFixed(1)+ " deaths/1,000 live births") 
	$("label[for*="+ansArray[2]+"]").text((1.3*ans).toFixed(1)+ " deaths/1,000 live births") 
	$("label[for*="+ansArray[3]+"]").text((ans).toFixed(1)+ " deaths/1,000 live births")
	
	return ansArray[3]
}

function secondHighestAns(num){
	var ans = parseFloat(rateObject[txt]["total"])
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	$("label[for*="+ansArray[0]+"]").text((3.6*ans).toFixed(1)+ " deaths/1,000 live births") 
	$("label[for*="+ansArray[1]+"]").text((ans).toFixed(1)+ " deaths/1,000 live births")
	$("label[for*="+ansArray[2]+"]").text((0.74*ans).toFixed(1)+ " deaths/1,000 live births") 
	$("label[for*="+ansArray[3]+"]").text((0.23*ans).toFixed(1)+ " deaths/1,000 live births")
		
	return ansArray[1]
}

function secondLowestAns(num){
	var ans = parseFloat(rateObject[txt]["total"])
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	$("label[for*="+ansArray[0]+"]").text((3.1*ans).toFixed(1)+ " deaths/1,000 live births") 
	$("label[for*="+ansArray[1]+"]").text((1.9*ans).toFixed(1)+ " deaths/1,000 live births")
	$("label[for*="+ansArray[2]+"]").text((ans).toFixed(1)+ " deaths/1,000 live births")	
	$("label[for*="+ansArray[3]+"]").text((0.61*ans).toFixed(1)+ " deaths/1,000 live births") 
	
	return ansArray[2]
}

function ansRandom(){
	var random = Math.floor(Math.random()*4)
	return random
}