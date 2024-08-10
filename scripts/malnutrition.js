var  bool = true;
var rateObject = malnutrition;
ansArray = [];
const keyArray = Object.keys(malnutrition) //makes a list consisted of the keys(countries) in mortalityRate
for (let i=1;i<=10;i++){


var random = Math.floor(Math.random()*keyArray.length)


var txt = keyArray[random] //assigns a random country to ranCountry
var ranYear = malnutrition[txt][1]
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
	var ans = parseFloat(malnutrition[txt][0]) //gets the malnutrition rate
	//var ansCurrency = ectotal[txt][2] //gets the currency
	console.log(ans)
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	
	if(ans<1){
		$("label[for*="+ansArray[0]+"]").text((ans).toFixed(2)+ " %")
		$("label[for*="+ansArray[1]+"]").text((10*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[2]+"]").text((66*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[3]+"]").text((40*ans).toFixed(2)+ " %")
	}		
	else{
		$("label[for*="+ansArray[0]+"]").text((ans).toFixed(2)+ " %")
		$("label[for*="+ansArray[1]+"]").text((0.8*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[2]+"]").text((0.5*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[3]+"]").text((0.3*ans).toFixed(2)+ " %") 
	}
	return ansArray[0]
}

function lowestAns(num){
	var ans = parseFloat(malnutrition[txt][0])
	//var ansCurrency = ectotal[txt][2]
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
		$("label[for*="+ansArray[0]+"]").text((2.1*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[1]+"]").text((1.5*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[2]+"]").text((1.3*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[3]+"]").text((ans).toFixed(2)+ " %")
	}
	return ansArray[3]
}

function secondHighestAns(num){
	var ans = parseFloat(malnutrition[txt][0])
	//var ansCurrency = ectotal[txt][2]
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
		$("label[for*="+ansArray[0]+"]").text((1.6*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[1]+"]").text((ans).toFixed(2)+ " %")
		$("label[for*="+ansArray[2]+"]").text((0.8*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[3]+"]").text((0.3*ans).toFixed(2)+ " %")
	}
	return ansArray[1]
}

function secondLowestAns(num){
	var ans = parseFloat(malnutrition[txt][0])
	//var ansCurrency = ectotal[txt][2]
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
		$("label[for*="+ansArray[0]+"]").text((1.7*ans).toFixed(2)+ " %") 
		$("label[for*="+ansArray[1]+"]").text((1.3*ans).toFixed(2)+ " %")
		$("label[for*="+ansArray[2]+"]").text((ans).toFixed(2)+ " %")	
		$("label[for*="+ansArray[3]+"]").text((0.6*ans).toFixed(2)+ " %") 
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
