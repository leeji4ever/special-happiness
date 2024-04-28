s = document.getElementById("submit");
s.addEventListener("click", myFunction);
s.addEventListener("mouseover", myFunction2);
s.addEventListener("mouseout", myFunction3);

c = document.getElementById("restart");
c.addEventListener("click", restart);

var score = 0;
var checClick = false;
function myFunction2(){
	this.value = "Submit!"
}

function myFunction3(){
	this.value = "Submit"
}

function myFunction(){
	console.log($('#1B'))
	console.log($('#1B')[0])
	/*checClick = true;*/
	s.style.display = 'none';
	if(document.getElementById('1B').checked) {
		score++;
	}

	if(document.getElementById('2D').checked) {
		score++;
	}
	
	if(document.getElementById('3A').checked) {
		score++;
	}
	
	if(document.getElementById('4A').checked) {
		score++;
	}
	if(document.getElementById('5B').checked){
		score++;
	}
	if(document.getElementById('6C').checked){
		score++;
	}
	if(document.getElementById('7C').checked){
		score++;
	}
	if(document.getElementById('8B').checked){
		score++;
	}
	if(document.getElementById('9B').checked){
		score++;
	}
	if(document.getElementById('10B').checked){
		score++;
	}
	alert("Quiz submitted! "+ score+"/10 was correct")
	alert("Restart the test.")
}

function restart(){
	location.reload();
}


