console.log(mortalityRate)


//console.log(ectotal)

ansArray = [];
const keyMortality = Object.keys(mortalityRate) //makes a list consisted of the keys(countries) in mortalityRate
for (let i=1;i<=10;i++){


var random = Math.floor(Math.random()*keyMortality.length)
console.log(random)

//console.log(keyEctotal)
var txt = keyMortality[random] //assigns a random country to ranCountry
//var ranYear = ectotal[txt][0]
//console.log(txt)
$('#country'+i).text(txt) //use jquery to show random country in html
//$('#year'+i).text(ranYear)
	
	
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
	var ans = parseInt(mortalityRate[txt]["total"]) //gets the ectotal value
	//var ansCurrency = ectotal[txt][2] //gets the currency
	console.log(ans)
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ansArray[0])
	
	$("label[for*="+ansArray[0]+"]").text((ans))
	$("label[for*="+ansArray[1]+"]").text((0.75*ans)) 
	$("label[for*="+ansArray[2]+"]").text((0.5*ans)) 
	$("label[for*="+ansArray[3]+"]").text((0.25*ans)) 
	
	return ansArray[0]
}

function lowestAns(num){
	var ans = parseInt(mortalityRate[txt]["total"])
	//var ansCurrency = ectotal[txt][2]
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	$("label[for*="+ansArray[0]+"]").text((2*ans)) 
	$("label[for*="+ansArray[1]+"]").text((1.5*ans)) 
	$("label[for*="+ansArray[2]+"]").text((1.25*ans)) 
	$("label[for*="+ansArray[3]+"]").text((ans))
	
	return ansArray[3]
}

function secondHighestAns(num){
	var ans = parseInt(mortalityRate[txt]["total"])
	//var ansCurrency = ectotal[txt][2]
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	$("label[for*="+ansArray[0]+"]").text((1.5*ans)) 
	$("label[for*="+ansArray[1]+"]").text((ans))
	$("label[for*="+ansArray[2]+"]").text((0.75*ans)) 
	$("label[for*="+ansArray[3]+"]").text((0.5*ans))
		
	return ansArray[1]
}

function secondLowestAns(num){
	var ans = parseInt(mortalityRate[txt]["total"])
	//var ansCurrency = ectotal[txt][2]
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	$("label[for*="+ansArray[0]+"]").text((1.5*ans)) 
	$("label[for*="+ansArray[1]+"]").text((1.25*ans))
	$("label[for*="+ansArray[2]+"]").text((ans))	
	$("label[for*="+ansArray[3]+"]").text((0.75*ans)) 
	
	return ansArray[2]
}

function ansRandom(){
	var random = Math.floor(Math.random()*4)
	return random
}




s = document.getElementById("submit");
s.addEventListener("click", submitClick);
s.addEventListener("mouseover", submitHover);
s.addEventListener("mouseout", submitDefault);

c = document.getElementById("restart");
c.addEventListener("click", restart);

var score = 0;
var checClick = false;
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
	}
	if(document.getElementById(ansArray[6]).checked) {
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
