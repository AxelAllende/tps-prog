const prompt = require('prompt-sync')();

var age = prompt("Ingrese su edad: ");
var age = parseInt(age);
if (age >= 18) {
    console.log("Es mayor de edad.");
} else {
   console.log("Es menor de edad.");
}