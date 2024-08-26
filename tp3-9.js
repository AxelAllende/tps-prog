const prompt = require('prompt-sync')();

function pesar(masa) {
    peso = 9,80665 * masa;
    return peso;
}
var masain = prompt("Ingrese la masa de la sustancia: ");
masain = parseInt(masain);
console.log("El peso de la solucion es: " + pesar(masain));
