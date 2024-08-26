const prompt = require('prompt-sync')();

let numeros = [];
let numI = 1;
let i = 0;
while (numI != 0) {
    numI = parseFloat(prompt("Ingrese un numero para guardar en el arreglo, para salir utilice 0: "));
    if (numI != 0) {
        numeros[i] = numI;
        i++;
    }
}
console.log(numeros);