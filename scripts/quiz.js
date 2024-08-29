ansArray = [];
const keyArray = Object.keys(rateObject) //makes a list consisted of the keys(countries)
for (let i=1;i<=10;i++){


	var random = Math.floor(Math.random()*keyArray.length)

	var txt = keyArray[random] //assigns a random country to txt
	var Year = rateObject[txt][1]
	console.log(txt)
	$('#country'+i).text(txt) //use jquery to show random country in html
	if(bool){ //if the year will be necessary will be dependent on the boolean variable at the beginning of each quiz javascript file
		$('#year'+i).text(Year)
	}
	if(bool){  //if the quiz is the income quiz, it needs dollar
		var dollarCon = rateObject[txt][3]
	}
		
		
	var random = ansRandom(); // random variable to choose one of the four function below

	var correctAns;



	if (random == 0){
		var correctAns = highestAns(i); //the answer is the higest value
		ansArray.push(correctAns);  //pushes the correct answer to ansArray
		console.log(ansArray)
	}
	else if(random == 1){
		var correctAns = secondHighestAns(i); // the answer is the second highest value
		ansArray.push(correctAns);
		console.log(ansArray)
	}
	else if(random ==2){
		
		var correctAns = secondLowestAns(i); //the answer is the second lowest value
		ansArray.push(correctAns);
		console.log(ansArray)
	}
	else if(random==3){
		
		var correctAns = lowestAns(i); //the anser is the lowest value
		ansArray.push(correctAns);
		console.log(ansArray)
	}
}