const prompt = require('prompt-sync')();

var notas = [];
var change = [];
var nota = 0;
let i = 0;
while (nota != -1) {
    nota = (prompt("Ingrese los datos, utilice *-1* para terminar la carga: "));
    if (nota != -1) {
        notas[i] = nota;
        i++;
    }
}
let q = notas.length - 1;
for (let i = 0; i < notas.length; i++) {
    change[i] = notas[q];
    q = q - 1;
}
console.log(change);