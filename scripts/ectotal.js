
//console.log(ectotal)

const keyEctotal = Object.keys(ectotal) //makes a list consisted of the keys(countries) in ectotal 

var random = Math.floor(Math.random()*keyEctotal.length)
console.log(random)

console.log(keyEctotal)
var txt = keyEctotal[random] //assigns a random country to txt
console.log(txt)
$('#country').text(txt) //use jquery to show random country in html

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


function highestAns(){
	var ans = parseInt(ectotal[txt][1]) //gets the ectotal value
	var ansCurrency = ectotal[txt][2] //gets the currency
	console.log(ans)
	var ansArray = ['1A','1B','1C','1D']
	
	
	shuffle(ansArray)
	console.log(ansArray[0])
	
	$("label[for*="+ansArray[0]+"]").text(ans+" "+ansCurrency)
	$("label[for*="+ansArray[1]+"]").text(0.75*ans+" "+ansCurrency) 
	$("label[for*="+ansArray[2]+"]").text(0.5*ans+" "+ansCurrency) 
	$("label[for*="+ansArray[3]+"]").text(0.25*ans+" "+ansCurrency) 
	
	return ansArray[0]
}

function lowestAns(){
	var ans = parseInt(ectotal[txt][1])
	var ansCurrency = ectotal[txt][2]
	var ansArray = ['1A','1B','1C','1D']
	
	
	shuffle(ansArray)
	console.log(ans)
	$("label[for*="+ansArray[0]+"]").text(2*ans+" "+ansCurrency) 
	$("label[for*="+ansArray[1]+"]").text(1.5*ans+" "+ansCurrency) 
	$("label[for*="+ansArray[2]+"]").text(1.25*ans+" "+ansCurrency) 
	$("label[for*="+ansArray[3]+"]").text(ans+" "+ansCurrency)
	
	return ansArray[3]
}

function secondHighestAns(){
	var ans = parseInt(ectotal[txt][1])
	var ansCurrency = ectotal[txt][2]
	var ansArray = ['1A','1B','1C','1D']
	
	
	shuffle(ansArray)
	console.log(ans)
	$("label[for*="+ansArray[0]+"]").text(1.5*ans+" "+ansCurrency) 
	$("label[for*="+ansArray[1]+"]").text(ans+" "+ansCurrency)
	$("label[for*="+ansArray[2]+"]").text(0.75*ans+" "+ansCurrency) 
	$("label[for*="+ansArray[3]+"]").text(0.5*ans+" "+ansCurrency)
		
	return ansArray[1]
}

function secondLowestAns(){
	var ans = parseInt(ectotal[txt][1])
	var ansCurrency = ectotal[txt][2]
	var ansArray = ['1A','1B','1C','1D']
	
	
	shuffle(ansArray)
	console.log(ans)
	$("label[for*="+ansArray[0]+"]").text(1.5*ans+" "+ansCurrency) 
	$("label[for*="+ansArray[1]+"]").text(1.25*ans+" "+ansCurrency)
	$("label[for*="+ansArray[2]+"]").text(ans+" "+ansCurrency)	
	$("label[for*="+ansArray[3]+"]").text(0.75*ans+" "+ansCurrency) 
	
	return ansArray[2]
}

function ansRandom(){
	var random = Math.floor(Math.random()*4)
	return random
}
