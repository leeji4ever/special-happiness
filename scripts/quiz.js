document.querySelector("h2").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});

s = document.getElementById("submit");
s.addEventListener("click", myFunction);
s.addEventListener("mouseover", myFunction2);
s.addEventListener("mouseout", myFunction3);

function myFunction2(){
	this.value = "Submit!"
}

function myFunction3(){
	this.value = "Submit"
}

function myFunction(){
	alert("Quiz submitted!")
}