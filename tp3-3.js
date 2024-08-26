const prompt = require('prompt-sync')();

function PerimeterOfRectangle(ancho, largo) {
    perimetro = (largo + ancho) * 2;
    return perimetro;
}
var anchoin = prompt("Ingrese el ancho del rectangulo: ");
anchoin = parseInt(anchoin);
var largoin = prompt("Ingrese el largo del rectangulo: ");
largoin = parseInt(largoin);
console.log("El perimetro del rectangulo es: " + PerimeterOfRectangle(anchoin, largoin));