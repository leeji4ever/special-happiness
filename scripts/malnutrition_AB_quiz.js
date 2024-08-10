let ansArray = [];
const keyLiteracy = Object.keys(malnutrition) //makes a list consisted of the keys(countries) in ectotal 
for (let i=1;i<=10;i++){

//generates random country pairs
var random = Math.floor(Math.random()*keyLiteracy.length) //for the first option
//var random2 = Math.floor(Math.random()*(keyLiteracy.length-1))
//if (random2>=random) {random2++;}

var txt = keyLiteracy[random] //this is a country name
//var txt2 = keyLiteracy[random2]
console.log(txt)


let allowedquintiles = ["Q1","Q2","Q3","Q4","Q5"]
let correctAnswer = ""

if (quintiles["Q1"].includes(txt))
    {    
allowedquintiles = ["Q3","Q4","Q5"]
correctAnswer = "B"
    }

if (quintiles["Q2"].includes(txt))
    {    
allowedquintiles = ["Q4","Q5"]
correctAnswer = "B"
    }

if (quintiles["Q3"].includes(txt))
    {   
allowedquintiles = ["Q1"] //change later
correctAnswer = "A"
    }

if (quintiles["Q4"].includes(txt))
    {   
allowedquintiles = ["Q1","Q2"]
correctAnswer = "A"
    }
    
if (quintiles["Q5"].includes(txt))
    {    
allowedquintiles = ["Q1","Q2","Q3"]
correctAnswer = "A"
    }

//var random = Math.floor(Math.random()*keyLiteracy.length) //for the first option
//var txt = keyLiteracy[random] //this is a country name

var randomquint = Math.floor(Math.random()*allowedquintiles.length)
var randomelement = allowedquintiles[randomquint] // a string like "Q1" or "Q2"

var otherquintile = quintiles[randomelement] // the list of countries in that quintile

var randomelement2 = Math.floor(Math.random()*otherquintile.length)
var othercountry = otherquintile[randomelement2]

$("label[for*="+i+"A]").text(txt)
$("label[for*="+i+"B]").text(othercountry)

ansArray.push(i+correctAnswer)}