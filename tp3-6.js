const prompt = require('prompt-sync')();

var pi = Math.PI
function circumOfCircle(radio) {
    cir = pi * 2 * radio;
    return cir;
}
var radioin = prompt("Ingrese el radio del circulo: ");
radioin = parseInt(radioin);
console.log("la circunsferencia del circulo es: " + circumOfCircle(radioin));
