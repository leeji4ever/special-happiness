var  bool = true;//to check if quiz requires getting the year
				  //see quiz.js
var rateObject = ectotal;//sends rateObject value to quiz.js
var dollarCon = rateObject[txt][3]

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
	var ans = parseInt(rateObject[txt][0]) //gets the ectotal value
	var ansCurrency = rateObject[txt][2] //gets the currency
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
	var ans = parseInt(rateObject[txt][0])
	var ansCurrency = rateObject[txt][2]
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
	var ans = parseInt(rateObject[txt][0])
	var ansCurrency = rateObject[txt][2]
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
	var ans = parseInt(rateObject[txt][0])
	var ansCurrency = rateObject[txt][2]
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