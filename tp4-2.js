const prompt = require('prompt-sync')();

var cadena = [];
var cI = "";
let i = 0;
while (cI != "CANCELAR") {
    cI = prompt("Ingrese una palabra deseada, para terminar ingrese CANCELAR: ");
    if (cI != "CANCELAR") {
        cadena[i] = cI;
        i++;}
}
let I = 0;
let largo = cadena.length;
concecucion = "";
while (largo > I) {
    var concecucion = concecucion + cadena[I]; 
    I++;
    if (I < largo) {
        concecucion = concecucion + "-";
    }
}
console.log(concecucion);