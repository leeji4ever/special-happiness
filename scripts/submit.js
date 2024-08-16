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

	s.style.display = 'none';
	
	for (let i=1;i<=10;i++){
		let correctAnswer = document.getElementById(ansArray[i-1]);
		let selectedAnswer = document.querySelector(`input[name="Q${i}"]:checked`);

         if (selectedAnswer) {
            if (selectedAnswer.id === correctAnswer.id) {
                score++;
                correctAnswer.nextElementSibling.style.backgroundColor = "#4CAF50"; // Csorrect Answer color
                correctAnswer.nextElementSibling.style.border = "2.5px solid #033708";
            } else {
                selectedAnswer.nextElementSibling.style.backgroundColor = "#e44f4f"; // Incorrect selected color
                selectedAnswer.nextElementSibling.style.border = "2.5px solid #8b0000";
                correctAnswer.nextElementSibling.style.backgroundColor = "#8da98b"; // Show correct answer color
                correctAnswer.nextElementSibling.style.border = "2.5px solid #000000";
            }
        } else {
            correctAnswer.nextElementSibling.style.backgroundColor = "#4CAF50"; // Show correct answer color if none selected
            correctAnswer.nextElementSibling.style.border = "2.5px solid #000000";
        }  
    }
	alert("Quiz submitted! "+ score+"/10 was correct")
	alert("Restart the test.")
}

function restart(){
	location.reload();
}