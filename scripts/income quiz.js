ansArray = [];
const keyEctotal = Object.keys(ectotal) //makes a list consisted of the keys(countries) in ectotal 
for (let i=1;i<=10;i++){


var random = Math.floor(Math.random()*keyEctotal.length)


var txt = keyEctotal[random] //assigns a random country to ranCountry
var ranYear = ectotal[txt][1]
var dollarCon = ectotal[txt][3]

console.log(txt)
$('#country'+i).text(txt) //use jquery to show random country in html
$('#year'+i).text(ranYear)
	
	
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
	var ans = parseInt(ectotal[txt][0]) //gets the ectotal value
	var ansCurrency = ectotal[txt][2] //gets the currency
	console.log(ans)
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	
	
	$("label[for*="+ansArray[0]+"]").text(Math.round(ans)+" "+ansCurrency+"  ( "+Math.round(dollarCon)+" USD )")
	$("label[for*="+ansArray[1]+"]").text(Math.round(0.8*ans)+" "+ansCurrency+"  ( "+Math.round(0.8*dollarCon)+" USD )") 
	$("label[for*="+ansArray[2]+"]").text(Math.round(0.47*ans)+" "+ansCurrency+"  ( "+Math.round(0.45*dollarCon)+" USD )") 
	$("label[for*="+ansArray[3]+"]").text(Math.round(0.3*ans)+" "+ansCurrency+"  ( "+Math.round(0.3*dollarCon)+" USD )") 
	
	return ansArray[0]
}

function lowestAns(num){
	var ans = parseInt(ectotal[txt][0])
	var ansCurrency = ectotal[txt][2]
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	$("label[for*="+ansArray[0]+"]").text(Math.round(2.1*ans)+" "+ansCurrency+"  ( "+Math.round(2*dollarCon)+" USD )") 
	$("label[for*="+ansArray[1]+"]").text(Math.round(1.6*ans)+" "+ansCurrency+"  ( "+Math.round(1.6*dollarCon)+" USD )") 
	$("label[for*="+ansArray[2]+"]").text(Math.round(1.23*ans)+" "+ansCurrency+"  ( "+Math.round(1.23*dollarCon)+" USD )") 
	$("label[for*="+ansArray[3]+"]").text(Math.round(ans)+" "+ansCurrency+"  ( "+Math.round(dollarCon)+" USD )")
	
	return ansArray[3]
}

function secondHighestAns(num){
	var ans = parseInt(ectotal[txt][0])
	var ansCurrency = ectotal[txt][2]
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	$("label[for*="+ansArray[0]+"]").text(Math.round(1.6*ans)+" "+ansCurrency+"  ( "+Math.round(1.6*dollarCon)+" USD )") 
	$("label[for*="+ansArray[1]+"]").text(Math.round(ans)+" "+ansCurrency+"  ( "+Math.round(dollarCon)+" USD )")
	$("label[for*="+ansArray[2]+"]").text(Math.round(0.73*ans)+" "+ansCurrency+"  ( "+Math.round(0.73*dollarCon)+" USD )") 
	$("label[for*="+ansArray[3]+"]").text(Math.round(0.45*ans)+" "+ansCurrency+"  ( "+Math.round(0.45*dollarCon)+" USD )")
		
	return ansArray[1]
}

function secondLowestAns(num){
	var ans = parseInt(ectotal[txt][0])
	var ansCurrency = ectotal[txt][2]
	var ansArray = [num+'A',num+'B',num+'C',num+'D']
	
	
	shuffle(ansArray)
	console.log(ans)
	$("label[for*="+ansArray[0]+"]").text(Math.round(1.55*ans)+" "+ansCurrency+"  ( "+Math.round(1.55*dollarCon)+" USD )") 
	$("label[for*="+ansArray[1]+"]").text(Math.round(1.22*ans)+" "+ansCurrency+"  ( "+Math.round(1.22*dollarCon)+" USD )")
	$("label[for*="+ansArray[2]+"]").text(Math.round(ans)+" "+ansCurrency+"  ( "+Math.round(dollarCon)+" USD )")	
	$("label[for*="+ansArray[3]+"]").text(Math.round(0.74*ans)+" "+ansCurrency+"  ( "+Math.round(0.75*dollarCon)+" USD )") 
	
	return ansArray[2]
}

function ansRandom(){
	var random = Math.floor(Math.random()*4)
	return random
}



function restart(){
	location.reload();
}
