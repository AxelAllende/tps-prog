const prompt = require('prompt-sync')();

var numI = parseFloat(prompt("Ingrese un numero para hacer una cuenta regresiva: "));
while (numI >= 0) {
    console.log(numI);
    numI--;
}