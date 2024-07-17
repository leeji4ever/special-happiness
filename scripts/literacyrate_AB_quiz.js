const literacy = require('../json/literacy.json');
console.log(literacy);

ansArray = [];
const keyLiteracy = Object.keys(literacy) //makes a list consisted of the keys(countries) in ectotal 
for (let i=1;i<=10;i++){

var random = Math.floor(Math.random()*keyLiteracy.length)
var random2 = Math.floor(Math.random()*(keyLiteracy.length-1))
if (random2>=random) {random2++;}
console.log(random)
console.log(random2)

console.log(keyLiteracy)
var txt = keyLiteracy[random]
var txt2 = keyLiteracy[random2]
console.log(txt)
console.log(txt2)
$('#'+i+'A').text(txt) //use jquery to show random country in html
$('#'+i+'B').text(txt2) //use jquery to show random country in html
}

function getRandomCountry(data) {
    const keys = Object.keys(data);
    return keys[Math.floor(Math.random()*keys.length)];
}

function parseRate(rate) {
    return parseFloat(rate.replace('%', '').trim());
}

function displayQuiz(data) {
    const countryA = getRandomCountry(data);
    let countryB = getRandomCountry(data);
    while (countryA === countryB) {
        countryB = getRandomCountry(data);
    }
    document.getElementById('countryA').textContent = countryA;
    document.getElementById('countryB').textContent = countryB;
}

function checkAnswer(selected, data) {
    const countryA = document.getElementById('countryA').textContent;
    const countryB = document.getElementById('countryB').textContent;
    const rateA = parseRate(data[countryA]['total population']);
    const rateB = parseRate(data[countryB]['total population']);
}