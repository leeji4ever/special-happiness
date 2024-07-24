ansArray = [];
var txt;


console.log(literacy)


//console.log(ectotal)

$(document).ready(function(){ 
	
	const keyLiteracy = Object.keys(literacy) //makes a list consisted of the keys(countries) in ectotal 
	for (let i=1;i<=10;i++){


	var random = Math.floor(Math.random()*keyLiteracy.length)
	console.log(random)

	console.log(keyLiteracy)
	var txt = keyLiteracy[random] //assigns a random country to txt
	console.log(txt)
	$('#country'+i).text(txt) //use jquery to show random country in html
		
		
	var random = ansRandom();
	console.log(random)
	var correctAns;



	if (random == 0){
		console.log("asdf")
		
		var correctAns = highestAns(i);
		ansArray.push(correctAns);
		console.log(ansArray)
	}
	else if(random == 1){
		console.log("fdsa")
		
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


	s = document.getElementById("submit");
	s.addEventListener("click", submitClick);
	s.addEventListener("mouseover", submitHover);
	s.addEventListener("mouseout", submitDefault);

	c = document.getElementById("restart");
	c.addEventListener("click", restart);
});

var score = 0;
var checClick = false;

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
	var ans = parseFloat(literacy[txt]["total population"]) //gets the literacy rate
	console.log(ans)
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	

	
	shuffle(ansArray)
	console.log(ansArray[0])
	
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
				   //therefor this if statement makes the answers that are over 90 the higest answer
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


function submitHover(){
	this.value = "Submit!"
}

function submitDefault(){
	this.value = "Submit"
}

function submitClick(){
	console.log($('#1B'))
	console.log($('#1B')[0])
	/*checClick = true;*/
	s.style.display = 'none';
	
	if(document.getElementById(ansArray[0]).checked) {
		score++;
	}
	
	if(document.getElementById(ansArray[1]).checked) {
		score++;
	}
	
	if(document.getElementById(ansArray[2]).checked) {
		score++;
	}
	if(document.getElementById(ansArray[3]).checked) {
		score++;
	}
	if(document.getElementById(ansArray[4]).checked) {
		score++;
	}
	if(document.getElementById(ansArray[5]).checked) {
		score++;
	}if(document.getElementById(ansArray[6]).checked) {
		score++;
	}
	if(document.getElementById(ansArray[7]).checked) {
		score++;
	}
	if(document.getElementById(ansArray[8]).checked) {
		score++;
	}
	if(document.getElementById(ansArray[9]).checked) {
		score++;
	}
	
	alert("Quiz submitted! "+ score+"/10 was correct")
	alert("Restart the test.")
}

function restart(){
	location.reload();
}
