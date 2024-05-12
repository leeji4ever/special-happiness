
console.log(ectotal)

const text = $("#target").text();

var random = Math.floor(Math.random()*ectotal.length)

const keyEctotal = Object.keys(ectotal)

var txt = keyEctotal[random]

$('#asdf').text(txt);