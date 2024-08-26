const prompt = require('prompt-sync')();
let I = 0;
var lista = [];
for (let i = 499; i < 1001; i++) {
    if (i % 2 == 0) {
        lista[I] = i;
        I++;
    }
}
console.log(lista);