const prompt = require('prompt-sync')();

function addnumbers(num1, num2) {
    suma = num1 + num2;
    return suma;
}
var numin1 = prompt("Ingrese un numero: ");
numin1 = parseInt(numin1);
var numin2 = prompt("Ingrese otro numero para sumar al anterior: ");
numin2 = parseInt(numin2);
console.log("La suma da: " + addnumbers(numin1, numin2));
