const prompt = require('prompt-sync')();

var lista = [];
let i = 0;
var palabra = "";
while (palabra != "fin") {
    palabra = prompt("Ingrese una palabra, para terminar use *fin*: ");
    if (palabra != "fin") {
        lista[i] = palabra;
        i++;
    }
}
console.log(lista);