const prompt = require('prompt-sync')();

function velocidad(distancia, tiempo) {
    vel = distancia / tiempo;
    return vel;
}
var distin = prompt("Ingrese la distancia recorrida en metros: ");
distin = parseInt(distin);
var tiemin = prompt("Ingrese el tiempo que tardo en recorrer la distancia en segundos: ");
tiemin = parseInt(tiemin);
console.log("El objeto se mueve a una velocidad de: " + velocidad(distin, tiemin) + " metro/s p/seg.");