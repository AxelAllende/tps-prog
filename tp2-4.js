const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Ingrese el primer numero: "));
let num2 = parseFloat(prompt("Ingrese el segundo numero: "));
var operation = prompt("Ingrese la operacion que desea realizar(suma, resta, multiplicacion o division): ");
if (operation == "suma") {
    console.log("El resultado de la suma es: " + (num1 + num2));
}
if (operation == "resta") {
    console.log("El resultado de la resta es: " + (num1 - num2));
}
if (operation == "multiplicacion") {
    console.log("El resultado de la multiplicacion es: " + (num1 * num2));
}
if (operation == "division") {
    console.log("El resultado de la division es: " + (num1 / num2));
}