const prompt = require('prompt-sync')();
var num1 = prompt ("ingresa un valor: ");
var num1 = parseFloat (num1);
var num2 = prompt ("ingresa otro valor: ");
var num2 = parseFloat (num2);
for (var i = num1 ; i <= num2 ; i++){
    if (i %2 == 1){
        console.log (i);
    }
}