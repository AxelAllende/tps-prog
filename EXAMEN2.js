const prompt = require('prompt-sync')();
var num1 = prompt("ingresa un valor: ");
var num1 = parseFloat (num1);
var num2 = prompt("ingresa un valor: ");
var num2 = parseFloat (num2);
var num3 = prompt("ingresa un valor: ");
var num3 = parseFloat(num3);
function calculo (num1f , num2f , num3f) {
    var resta = (num1f - num2f - num3f);
    var division = (num1f / num2f / num3f);
    if (resta <25 && division >200){
        console.log ("se cumple la condicion");
    }    else {
        console.log ("no se cumplio la condicion");
    }
} 
calculo (num1 , num2 , num3);
