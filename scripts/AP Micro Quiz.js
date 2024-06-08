s = document.getElementById("submit");
s.addEventListener("click", submitClicked);
s.addEventListener("mouseover", myFunction2);
s.addEventListener("mouseout", myFunction3);

a = document.getElementById('answer')
a.addEventListener("submit", submitClicked);

r = document.getElementById("restart");
r.addEventListener("click", restart);
var score = 0;
function submitClicked(){
	s.style.display = 'none';
	if(document.getElementById('1A').checked){
		score++;
	}
	if(document.getElementById('2B').checked){
		score++;
	}
	if(document.getElementById('3C').checked){
		score++;	
	}
	if(document.getElementById('4C').checked){
		score++;
	}
	if(document.getElementById('5C').checked){
		score++;
	}
	if(document.getElementById('6B').checked){
		score++;
	}
	if(document.getElementById('answer') == 'price<AVC'){
		score++;
	}
	if(document.getElementById('8D').checked){
		score++;
	}
	if(document.getElementById('9D').checked){
		score++;
	}
	if(document.getElementById('10D').checked){
		score++;
	}
	alert("Quiz submitted! You got " + score*10 +"%")
	alert("Restart the test.")
}
function myFunction2(){
	this.value = "Submit!"
}

function myFunction3(){
	this.value = "Ready?"
}

function restart(){
	location.reload();
}