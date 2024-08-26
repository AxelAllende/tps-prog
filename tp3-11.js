const prompt = require('prompt-sync')();

function IMC(peso, altura) {
    bmi = peso / (altura * altura);
    return bmi;
}
var pesoin = prompt("Ingrese el peso en Kg: ");
pesoin = parseFloat(pesoin);
var alturain = prompt("Ingrese la altura en centimetros: ");
alturain = parseFloat(alturain / 100);
let imc = IMC(pesoin, alturain);
console.log(imc);
if (imc < 18.5) {
    console.log("Bajo peso, el IMC es menor a 18,5. Resultado: " + imc);
} else if (18.5 <= imc && imc <= 24.9) {
    console.log("Peso normal, el IMC esta entre 18,5 y 24,9. Resultado: " + imc);
} else if (25 <= imc && imc <= 29.9) {
    console.log("Sobrepeso, el IMC esta entre 25 y 29,9. Resultado: " + imc);
} else if (imc >= 30) {
    console.log("Obeso, el IMC es 30 o mayor. Resultado: " + imc);
}