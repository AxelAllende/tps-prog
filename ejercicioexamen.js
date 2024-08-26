const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Ingrese un numero: "));
let num2 = parseFloat(prompt("Ingrese un numero mayor al anterior para determinar los numeros pares entre ellos: "));
while (num1 <= num2) {
    if (num1 % 2 == 0) {
        console.log(num1);
    }
    num1++;
}