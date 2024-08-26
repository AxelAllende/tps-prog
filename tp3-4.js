const prompt = require('prompt-sync')();

function volRectPrism(largo, ancho, alto) {
    volumen = largo * ancho * alto;
    return volumen;
}
var anchoin = prompt("Ingrese el ancho del prisma: ");
anchoin = parseInt(anchoin);
var largoin = prompt("Ingrese el largo del prisma: ");
largoin = parseInt(largoin);
var altoin = prompt("Ingrese el alto del prisma: ");
altoin = parseInt(altoin);
console.log("El volumen del prisma es: " + volRectPrism(largoin, anchoin, altoin));