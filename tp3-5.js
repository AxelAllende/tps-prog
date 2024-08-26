const prompt = require('prompt-sync')();

var pi = Math.PI
function areaOfCircle(radio) {
    area = pi * radio * radio;
    return area;
}
var radioin = prompt("Ingrese el radio del circulo: ");
radioin = parseInt(radioin);
console.log("El area del circulo es: " + areaOfCircle(radioin));
