var  bool = true;//to check if quiz requires getting the year
				  //see quiz.js
var rateObject = water;//sends rateObject value to quiz.js

function shuffle(array) { //shffling fucntion used to shuffle the abcd choices once more within each function
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
	var ans = parseFloat(rateObject[txt][0]) //gets the percentage value
	console.log(ans)
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	
	if(ans ==100){
		return ansHundred(num)
	}
	else{
		$("label[for*="+ansArray[0]+"]").text((ans).toFixed(2)+ "%")
		$("label[for*="+ansArray[1]+"]").text((0.8*ans).toFixed(2)+ "%") 
		$("label[for*="+ansArray[2]+"]").text((0.5*ans).toFixed(2)+ "%") 
		$("label[for*="+ansArray[3]+"]").text((0.3*ans).toFixed(2)+ "%") 
		return ansArray[0]
	}
	
}

function lowestAns(num){
	var ans = parseFloat(rateObject[txt][0])
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	
	if(ans ==100){
		return ansHundred(num)
	}
	
	else{
		$("label[for*="+ansArray[0]+"]").text((2.1*ans).toFixed(2)+ "%") 
		$("label[for*="+ansArray[1]+"]").text((1.5*ans).toFixed(2)+ "%") 
		$("label[for*="+ansArray[2]+"]").text((1.3*ans).toFixed(2)+ "%") 
		$("label[for*="+ansArray[3]+"]").text((ans).toFixed(2)+ "%")
		return ansArray[3]
	}
	
}

function secondHighestAns(num){
	var ans = parseFloat(rateObject[txt][0])
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
		
	shuffle(ansArray)
	console.log(ans)
	
	if(ans ==100){
		return ansHundred(num)
	}
	else{
	$("label[for*="+ansArray[0]+"]").text((1.6*ans).toFixed(2)+ "%") 
	$("label[for*="+ansArray[1]+"]").text((ans).toFixed(2)+ "%")
	$("label[for*="+ansArray[2]+"]").text((0.8*ans).toFixed(2)+ "%") 
	$("label[for*="+ansArray[3]+"]").text((0.3*ans).toFixed(2)+ "%")
		
	return ansArray[1]
	}
}

function secondLowestAns(num){
	var ans = parseFloat(rateObject[txt][0])
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	
	if(ans ==100){
		return ansHundred(num)
	}
	else{
	$("label[for*="+ansArray[0]+"]").text((1.7*ans).toFixed(2)+ "%") 
	$("label[for*="+ansArray[1]+"]").text((1.3*ans).toFixed(2)+ "%")
	$("label[for*="+ansArray[2]+"]").text((ans).toFixed(2)+ "%")	
	$("label[for*="+ansArray[3]+"]").text((0.6*ans).toFixed(2)+ "%") 
	
	return ansArray[2]
	}
}


function ansHundred(num){
	var random1 = Math.random()*(0.92-0.52)+0.1
	var random2 = Math.random()*(0.5-0.1)+0.1
	var ans = parseFloat(water[txt][0])
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	$("label[for*="+ansArray[0]+"]").text(((random1-random2)*ans).toFixed(2)+ "%") 
	$("label[for*="+ansArray[1]+"]").text(((random1-random2)*ans).toFixed(2)+ "%")
	$("label[for*="+ansArray[2]+"]").text((ans).toFixed(2)+ "%")	
	$("label[for*="+ansArray[3]+"]").text(((random1-random2)*ans).toFixed(2)+ "%") 
	return ansArray[2]
}

function ansRandom(){
	var random = Math.floor(Math.random()*4)
	return random
}