const prompt = require('prompt-sync')();
var word = "";
let q = 0;
while (word != "fin") {
    var word = prompt("Ingrese una palabra, para terminar use *fin*: ");
    if (word != "fin") {
        q++;
    }
}
console.log("La cantidad de palabras ingresadas fue: " + q);