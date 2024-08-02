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
	
	for (let i=0;i<=9;i++){
        if(document.getElementById(ansArray[i]).checked) {
            score++;
        }    
    }
	
	alert("Quiz submitted! "+ score+"/10 was correct")
	alert("Restart the test.")
}

function restart(){
	location.reload();
}