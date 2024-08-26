const prompt = require('prompt-sync')();

var num1 = prompt("Ingrese un numero: ");
var num1 = parseInt(num1);
var num2 = prompt("Ingrese otro numero: ");
var num2 = parseInt(num2);
var num3 = prompt("Ingrese un ultimo numero: ");
if (num1 < num2) {
    if (num2 < num3) {
        console.log(num3 + " es el mayor " + num1 + " es el menor y " + num2 + " esta entre ellos.");
    } else if (num3 < num1) {
        console.log(num2 + " es el mayor " + num3 + " es el menor y " + num1 + " esta entre ellos.");
    } else {
        console.log(num2 + " es el mayor " + num1 + " es el menor y " + num3 + " esta entre ellos.");
    }
} else {
    if (num1 < num3) {
        console.log(num3 + " es el mayor " + num2 + " es el menor y " + num1 + " esta entre ellos.");
    } else if (num3 < num2) {
        console.log(num1 + " es el mayor " + num3 + " es el menor y " + num2 + " esta entre ellos.");
    } else {
        console.log(num1 + " es el mayor " + num2 + " es el menor y " + num3 + " esta entre ellos.");
    }
}