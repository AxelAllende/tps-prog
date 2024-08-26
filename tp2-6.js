const prompt = require('prompt-sync')();

var num1 = prompt("Ingrese un numero: ");
var num1 = parseInt(num1);
var num2 = prompt("Ingrese otro numero: ");
var num2 = parseInt(num2);
if (num1 < num2) {
    console.log(num2 + " es el mayor y " + num1 + " es el menor.");
} else {
    console.log(num1 + " es el mayor y " + num2 + " es el menor.");
}
