var  bool = true;//to check if quiz requires getting the year
				  //see quiz.js
var rateObject = malnutrition; //sends rateObject value to quiz.js

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
	var ans = parseFloat(malnutrition[txt][0]) //gets the malnutrition rate
	console.log(ans)
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	
	if(ans<1){
		$("label[for*="+ansArray[0]+"]").text((ans).toFixed(2)+ " %")
		$("label[for*="+ansArray[1]+"]").text((10*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[2]+"]").text((88*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[3]+"]").text((55*ans).toFixed(2)+ " %")
	}		
	else{
		$("label[for*="+ansArray[0]+"]").text((ans).toFixed(2)+ " %")
		$("label[for*="+ansArray[1]+"]").text((0.81*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[2]+"]").text((0.42*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[3]+"]").text((0.21*ans).toFixed(2)+ " %") 
	}
	return ansArray[0]
}

function lowestAns(num){
	var ans = parseFloat(malnutrition[txt][0])
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	
	if(ans<1){
		$("label[for*="+ansArray[0]+"]").text((13*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[1]+"]").text((33*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[2]+"]").text((59*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[3]+"]").text((ans).toFixed(2)+ " %")
	}
	else{
		$("label[for*="+ansArray[0]+"]").text((ans+(100-ans)*0.95).toFixed(2)+" %") 
		$("label[for*="+ansArray[1]+"]").text((ans+(100-ans)*0.63).toFixed(2)+" %") 
		$("label[for*="+ansArray[2]+"]").text((ans+(100-ans)*0.31).toFixed(2)+" %") 
		$("label[for*="+ansArray[3]+"]").text((ans).toFixed(2)+" %")
	}
	return ansArray[3]
}

function secondHighestAns(num){
	var ans = parseFloat(malnutrition[txt][0])
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	if(ans<1){
		$("label[for*="+ansArray[0]+"]").text((19*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[1]+"]").text((ans).toFixed(2)+ " %")
		$("label[for*="+ansArray[2]+"]").text((80*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[3]+"]").text((37*ans).toFixed(2)+ " %")
	}
	else{
		$("label[for*="+ansArray[0]+"]").text((ans+(100-ans)*0.95).toFixed(2)+" %") 
		$("label[for*="+ansArray[1]+"]").text((ans).toFixed(2)+ " %")
		$("label[for*="+ansArray[2]+"]").text((0.8*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[3]+"]").text((0.3*ans).toFixed(2)+ " %")
	}
	return ansArray[1]
}

function secondLowestAns(num){
	var ans = parseFloat(malnutrition[txt][0])
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	if(ans<1){
		$("label[for*="+ansArray[0]+"]").text((59*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[1]+"]").text((21*ans).toFixed(2)+ " %")
		$("label[for*="+ansArray[2]+"]").text((ans).toFixed(2)+ " %")	
		$("label[for*="+ansArray[3]+"]").text((72*ans).toFixed(2)+ " %") 
	}
	else{
		$("label[for*="+ansArray[0]+"]").text((ans+(100-ans)*0.95).toFixed(2)+" %") 
		$("label[for*="+ansArray[1]+"]").text((ans+(100-ans)*0.59).toFixed(2)+" %")
		$("label[for*="+ansArray[2]+"]").text((ans).toFixed(2)+ " %")	
		$("label[for*="+ansArray[3]+"]").text((0.6*ans).toFixed(2)+ " %") 
	}
	
	return ansArray[2]
}

function ansRandom(){
	var random = Math.floor(Math.random()*4)
	return random
}