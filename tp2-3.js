const prompt = require('prompt-sync')();

var num1 = prompt("Ingrese un numero: ");
num1 = parseInt(num1);
var num2 = prompt("Ingrese otro numero para sumar al anterior: ");
num2 = parseInt(num2);
var suma = num1 + num2;
console.log("La suma dio: " + suma);