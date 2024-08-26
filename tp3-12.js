const prompt = require('prompt-sync')();

function checkSeason(mesF) {
    if (mesF == "enero" || mesF == "diciembre" || mesF == "febrero") {
        console.log("Estamos en verano!");
    } else if (mesF == "marzo" || mesF == "abril" || mesF == "mayo") {
        console.log("Estamos en otoño!");
    } else if (mesF == "junio" || mesF == "julio" || mesF == "agosto") {
        console.log("Estamos en invierno!");
    } else if (mesF == "septiembre" || mesF == "octubre" || mesF == "noviembre") {
        console.log("Estamos en primavera!");
    } else {
        console.log("Ingrese un mes valido en minusculas!");
    }
}

var mesI = prompt("En que mes estamos? ");
checkSeason(mesI);