const prompt = require('prompt-sync')();


var num1 = prompt("Ingrese un numero(1/4): ");
var num1 = parseInt(num1);
var num2 = prompt("Ingrese un numero(2/4): ");
var num2 = parseInt(num2);
var num3 = prompt("Ingrese un numero(3/4): ");
var num3 = parseInt(num3);
var num4 = prompt("Ingrese un numero(4/4): ");
var num4 = parseInt(num4);
var suma = num1 + num2 + num3 + num4;
var mult = num1 * num2 * num3 * num4;
if (suma > 30 && mult < 400) {
    console.log("La suma es mayor a 30(" + suma + ") y la multiplicacion menor a 400(" + mult + ").")
} else {
    console.log("No se cumplen ambas condiciones.")
}