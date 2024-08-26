const prompt = require('prompt-sync')();

var notas = [];
let nota = 0;
let i = 0;
let ptotal = 0;
let pmayorsiete = 0;
let qpmayorsiete = 0;
while (nota != -1) {
    nota = parseFloat(prompt("Ingrese la nota, utilice *-1* para terminar de cargar las notas: "));
    if (nota != -1) {
        notas[i] = nota;
        i++;
    }
}
for (let I = 0; I < notas.length; I++) {
    if (notas[I] > 7) {
        pmayorsiete = pmayorsiete + notas[I];
        qpmayorsiete++;
    }
    ptotal = notas[I] + ptotal;
}
console.log("Promedio de los estudiantes que sacaron mas de 7: " + (pmayorsiete/qpmayorsiete));
console.log("Promedio total de los estudiantes: " + (ptotal/notas.length));