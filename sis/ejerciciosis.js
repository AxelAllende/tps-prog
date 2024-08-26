const prompt = require('prompt-sync')();
const noPosible = "No es posible representar el numero en este sistema.";
function numToString(num) {
    return String.fromCharCode('a'.charCodeAt(0) + (num - 10));
}
function pbd(B, D) {
    result = Math.pow(B, D);
    return result;
}
function rangeSVA(B, D) {
    let rsva = [];
    rsva.push((-1) * pbd(B, D) + 1);
    rsva.push(pbd(B, D) - 1);
    return rsva;
}
function rangeC1(B, D) {
    let rc1 = [];
    rc1.push((pbd(B, D) / 2) * - 1 + 1);
    rc1.push((pbd(B, D) / 2) - 1);
    return rc1;
}
function rangeCB(B, D) {
    let rcb = [];
    rcb.push((pbd(B, D) / 2) * - 1);
    rcb.push((pbd(B, D) / 2) - 1);
    return rcb;
}
function fCD(B, D) {
    let f = pbd(B, D) / 2;
    return f;
}
function rangeCD(B, D, F) {
    let rcd = [];
    rcd.push(F * -1);
    rcd.push(pbd(B, D) - F - 1);
    return rcd;
}
function compareRange(num, range) {
    if (num < range[0] || num > range[1]) {
        return false;
    } else {
        return true;
    }
}
function changeBase(num, B, D) {
    let numBaseB = [];
    if (num < 0) {
        num *= -1; 
    }
    for (let d = 0; d < D; d++) {
        numBaseB.splice(0, 0, (num % B));
        if (numBaseB[0] >= 10) {
            numBaseB[0] = numToString(numBaseB[0]);
        }
        num = Math.floor(num / B);
    }
    return numBaseB;
}
function SVA(num, B, D) {
    if (compareRange(num, rangeSVA(B, D)) == true) {
        let resultSVA = changeBase(num, B, D);
        if (num < 0) {
            resultSVA.splice(0, 0, 1);
        } else {
            resultSVA.splice(0, 0, 0);
        }
        return resultSVA
    } else {
        return noPosible;
    }
}
function C1(num, B, D) {
    if (compareRange(num, rangeC1(B, D)) == true) {
        if (num < 0) {
            num = (pbd(B, D) - 1 + num);
        }
        return changeBase(num, B, D);
    } else {
        return noPosible;
    }
}
function CB(num, B, D) {
    if (compareRange(num, rangeCB(B, D)) == true) {
        if (num < 0) {
            num = (pbd(B, D) + num);
        }
        return changeBase(num, B, D);
    } else {
        return noPosible;
    }
}

function CD(num, B, D) {
    if (compareRange(num, rangeCD(B, D, fCD(B, D))) == true) {
        return changeBase((fCD(B, D) + num), B, D);
    } else {
        return noPosible;
    }
}
let numI = parseFloat(prompt("Ingrese el numero a convertir: "));
let bI = parseFloat(prompt("A continuacion ingrese la base para los sistemas: "));
let dI = parseFloat(prompt("Por ultimo la cantidad de digitos de los sistemas: "));
console.log(["SVA: " + SVA(numI, bI, dI),"C1: " + C1(numI, bI, dI),"CB: " + CB(numI, bI, dI),"CD: " + CD(numI, bI, dI)]);