
//console.log(ectotal)

const keyEctotal = Object.keys(ectotal) //makes a list consisted of the keys(countries) in ectotal 

var random = Math.floor(Math.random()*keyEctotal.length)
console.log(random)

console.log(keyEctotal)
var txt = keyEctotal[random] //assigns a random country to txt
console.log(txt)
$('#country').text(txt) //use jquery to show random country in html


function highestAns(){
	var ans = parseInt(ectotal[txt][1]) //gets the ectotal value
	var ansCurrency = ectotal[txt][2] //gets the currency
	console.log(ans)
	$("label[for*='1A']").text(ans+" "+ansCurrency)
	$("label[for*='1B']").text(0.75*ans+" "+ansCurrency) 
	$("label[for*='1C']").text(0.5*ans+" "+ansCurrency) 
	$("label[for*='1D']").text(0.25*ans+" "+ansCurrency) 
	
	
}

function lowestAns(){
	var ans = parseInt(ectotal[txt][1])
	var ansCurrency = ectotal[txt][2]
	console.log(ans)
	$("label[for*='1A']").text(2*ans+" "+ansCurrency) 
	$("label[for*='1B']").text(1.5*ans+" "+ansCurrency) 
	$("label[for*='1C']").text(1.25*ans+" "+ansCurrency) 
	$("label[for*='1D']").text(ans+" "+ansCurrency)
}

function secondHighestAns(){
	var ans = parseInt(ectotal[txt][1])
	var ansCurrency = ectotal[txt][2]
	console.log(ans)
	$("label[for*='1A']").text(1.5*ans+" "+ansCurrency) 
	$("label[for*='1B']").text(ans+" "+ansCurrency)
	$("label[for*='1C']").text(0.75*ans+" "+ansCurrency) 
	$("label[for*='1D']").text(0.5*ans+" "+ansCurrency) 
}

function secondLowestAns(){
	var ans = parseInt(ectotal[txt][1])
	var ansCurrency = ectotal[txt][2]
	console.log(ans)
	$("label[for*='1A']").text(1.5*ans+" "+ansCurrency) 
	$("label[for*='1B']").text(1.25*ans+" "+ansCurrency)
	$("label[for*='1C']").text(ans+" "+ansCurrency)	
	$("label[for*='1D']").text(0.75*ans+" "+ansCurrency) 
}

function ansRandom(){
	var random = Math.floor(Math.random()*4)
	return random
}
