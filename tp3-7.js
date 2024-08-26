const prompt = require('prompt-sync')();

function density(masa, volumen) {
    densidad = masa / volumen;
    return densidad;
}
var masain = prompt("Ingrese la masa del objeto: ");
masain = parseInt(masain);
var volumenin = prompt("Ingrese el volumen del objeto: ");
volumenin = parseInt(volumenin);
console.log("La densidad del ojeto es: " + density(masain, volumenin));
