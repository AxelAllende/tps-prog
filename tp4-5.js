const prompt = require('prompt-sync')();

let numi = parseFloat(prompt("Ingrese un numero: "));
for (let i = 1; i <= numi; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if (i % 3 == 0 && i % 5 != 0) {
        console.log("Fizz");
    } else if (i % 3 != 0 && i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 != 0 && i % 5 != 0) {
        console.log(i);
    }
}