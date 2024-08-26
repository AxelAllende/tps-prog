const prompt = require('prompt-sync')();

function areaOfRectangle(largo, ancho) {
    area = largo * ancho;
    return area;
}
var anchoin = prompt("Ingrese el ancho del rectangulo: ");
anchoin = parseInt(anchoin);
var largoin = prompt("Ingrese el largo del rectangulo: ");
largoin = parseInt(largoin);
console.log("El area del rectagulo es: " + areaOfRectangle(largoin, anchoin));