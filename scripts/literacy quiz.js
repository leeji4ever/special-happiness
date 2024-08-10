var  bool = false;
var rateObject = literacy;
ansArray = [];
var txt;
const keyArray = Object.keys(rateObject) //makes a list consisted of the keys(countries) in ectotal 
for (let i=1;i<=10;i++){


	var random = Math.floor(Math.random()*keyArray.length)

	txt = keyArray[random] //assigns a random country to txt
	console.log(txt)
	$('#country'+i).text(txt) //use jquery to show random country in html
	if(bool){
		$('#year'+i).text(ranYear)
	}
		
		
	var random = ansRandom();

	var correctAns;



	if (random == 0){
		var correctAns = highestAns(i);
		ansArray.push(correctAns);
		console.log(ansArray)
	}
	else if(random == 1){
		var correctAns = secondHighestAns(i);
		ansArray.push(correctAns);
		console.log(ansArray)
	}
	else if(random ==2){
		
		var correctAns = secondLowestAns(i);
		ansArray.push(correctAns);
		console.log(ansArray)
	}
	else if(random==3){
		
		var correctAns = lowestAns(i);
		ansArray.push(correctAns);
		console.log(ansArray)
	}
}


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
	$("label[for*="+ansArray[1]+"]").text((0.7*ans).toFixed(2)+" %") 
	$("label[for*="+ansArray[2]+"]").text((0.5*ans).toFixed(2)+" %") 
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
		$("label[for*="+ansArray[1]+"]").text((0.7*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[2]+"]").text((0.5*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[0]+"]").text((0.2*ans).toFixed(2)+" %")
	}		
	else{ // if it isnt over 90 same as original function
		$("label[for*="+ansArray[0]+"]").text((ans+(100-ans)*0.7).toFixed(2)+" %") 
		$("label[for*="+ansArray[1]+"]").text((ans+(100-ans)*0.4).toFixed(2)+" %") 
		$("label[for*="+ansArray[2]+"]").text((ans+(100-ans)*0.2).toFixed(2)+" %") 
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
		$("label[for*="+ansArray[0]+"]").text((0.7*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[2]+"]").text((0.5*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[3]+"]").text((0.2*ans).toFixed(2)+" %")
	}
	else{
		$("label[for*="+ansArray[0]+"]").text((ans+(100-ans)*0.7).toFixed(2)+" %") 
		$("label[for*="+ansArray[1]+"]").text((ans).toFixed(2)+" %")
		$("label[for*="+ansArray[2]+"]").text((ans-(100-ans)*0.2).toFixed(2)+" %") 
		$("label[for*="+ansArray[3]+"]").text((ans-(100-ans)*0.4).toFixed(2)+" %")
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
		$("label[for*="+ansArray[1]+"]").text((0.7*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[0]+"]").text((0.5*ans).toFixed(2)+" %") 
		$("label[for*="+ansArray[3]+"]").text((0.2*ans).toFixed(2)+" %")
	}
	else{
		$("label[for*="+ansArray[0]+"]").text((ans+(100-ans)*0.7).toFixed(2)+" %") 
		$("label[for*="+ansArray[1]+"]").text((ans+(100-ans)*0.4).toFixed(2)+" %")
		$("label[for*="+ansArray[2]+"]").text((ans).toFixed(2)+" %")	
		$("label[for*="+ansArray[3]+"]").text((ans-(100-ans)*0.3).toFixed(2)+" %") 
	}
	
	return ansArray[2]
}

function ansRandom(){
	var random = Math.floor(Math.random()*4)
	return random
}


function restart(){
	location.reload();
}
