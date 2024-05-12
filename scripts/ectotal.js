
console.log(ectotal)

const text = $("#target").text();
const keyEctotal = Object.keys(ectotal)

var random = Math.floor(Math.random()*keyEctotal.length)
console.log(random)

console.log(keyEctotal)
var txt = keyEctotal[random]
console.log(txt)
$('#asdf').text(txt)