function calculoTemp(c) {
    
    const f = (9*c/5+32);
    return f;
}  

const rLine = require('readline-sync');

const c = parseFloat(rLine.question(`Informe sua temperatura em Celsius: \n`));


console.log(`${c}º Celsios equivalem a ${calculoTemp(c)}º Fahrenheit`);