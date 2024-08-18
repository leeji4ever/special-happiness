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
	else if(99>= ans && ans >= 90){ // if the answer is over 90, ideal to make it the largest ans
				   //therefor this if statement makes the answers that are over 90 the highest answer
		$("label[for*="+ansArray[3]+"]").text((ans).toFixed(2)+" %")
		$("label[for*="+ansArray[1]+"]").text((0.81*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[2]+"]").text((0.48*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[0]+"]").text((0.2*ans).toFixed(2)+" %")
		return ansArray[3]
	}	
	else{
		$("label[for*="+ansArray[0]+"]").text((ans).toFixed(2)+ "%")
		$("label[for*="+ansArray[1]+"]").text((0.69*ans).toFixed(2)+ "%") 
		$("label[for*="+ansArray[2]+"]").text((0.451*ans).toFixed(2)+ "%") 
		$("label[for*="+ansArray[3]+"]").text((0.29*ans).toFixed(2)+ "%") 
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
	else if(99>= ans && ans >= 90){ // if the answer is over 90, ideal to make it the largest ans
				   //therefor this if statement makes the answers that are over 90 the highest answer
		$("label[for*="+ansArray[3]+"]").text((ans).toFixed(2)+" %")
		$("label[for*="+ansArray[1]+"]").text((0.81*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[2]+"]").text((0.48*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[0]+"]").text((0.2*ans).toFixed(2)+" %")
		return ansArray[3]
	}	
	else{
		$("label[for*="+ansArray[0]+"]").text((ans+(100-ans)*0.95).toFixed(2)+" %") 
		$("label[for*="+ansArray[1]+"]").text((ans+(100-ans)*0.63).toFixed(2)+" %") 
		$("label[for*="+ansArray[2]+"]").text((ans+(100-ans)*0.31).toFixed(2)+" %") 
		$("label[for*="+ansArray[3]+"]").text((ans).toFixed(2)+" %")
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
	else if(99>= ans && ans >= 90){ // if the answer is over 90, ideal to make it the largest ans
				   //therefor this if statement makes the answers that are over 90 the highest answer
		$("label[for*="+ansArray[3]+"]").text((ans).toFixed(2)+" %")
		$("label[for*="+ansArray[1]+"]").text((0.81*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[2]+"]").text((0.48*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[0]+"]").text((0.2*ans).toFixed(2)+" %")
		return ansArray[3]
	}	
	else{
		$("label[for*="+ansArray[0]+"]").text((ans+(100-ans)*0.95).toFixed(2)+" %") 
		$("label[for*="+ansArray[1]+"]").text((ans).toFixed(2)+ " %")
		$("label[for*="+ansArray[2]+"]").text((0.8*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[3]+"]").text((0.3*ans).toFixed(2)+ " %")
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
	else if(99>= ans && ans >= 90){ // if the answer is over 90, ideal to make it the largest ans
				   //therefor this if statement makes the answers that are over 90 the highest answer
		$("label[for*="+ansArray[3]+"]").text((ans).toFixed(2)+" %")
		$("label[for*="+ansArray[1]+"]").text((0.81*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[2]+"]").text((0.48*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[0]+"]").text((0.2*ans).toFixed(2)+" %")
		return ansArray[3]
	}
	else{
		$("label[for*="+ansArray[0]+"]").text((ans+(100-ans)*0.95).toFixed(2)+" %") 
		$("label[for*="+ansArray[1]+"]").text((ans+(100-ans)*0.59).toFixed(2)+" %")
		$("label[for*="+ansArray[2]+"]").text((ans).toFixed(2)+ " %")	
		$("label[for*="+ansArray[3]+"]").text((0.6*ans).toFixed(2)+ " %") 
		return ansArray[2]
	}
}


function ansHundred(num){
    var ans = parseFloat(water[txt][0]); // 100%
    var ansArray = [num+'A', num+'B', num+'C', num+'D'];

    shuffle(ansArray);

    // Generate random percentages close to 100% for the incorrect answers
    let incorrect1 = (Math.random() * (0.98 - 0.75) + 0.75).toFixed(2);
    let incorrect2 = (Math.random() * (0.74 - 0.60) + 0.60).toFixed(2);
    let incorrect3 = (Math.random() * (0.59 - 0.35) + 0.35).toFixed(2);

    $("label[for*="+ansArray[0]+"]").text((incorrect1 * ans).toFixed(2) + "%");
    $("label[for*="+ansArray[1]+"]").text((incorrect2 * ans).toFixed(2) + "%");
    $("label[for*="+ansArray[2]+"]").text((incorrect3 * ans).toFixed(2) + "%");
    $("label[for*="+ansArray[3]+"]").text((ans).toFixed(2) + "%"); // 100%

    return ansArray[3]; // The correct answer is always placed at the 4th position
}

function ansRandom(){
	var random = Math.floor(Math.random()*4)
	return random
}