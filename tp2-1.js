const prompt = require('prompt-sync')();

console.log ("Ingrese su apellido: ");
const apellido = prompt();
const nombre = prompt("Ingrese su/s nombre/s: ");
console.log ("Su apellido y nombre es: " + apellido + " " + nombre);