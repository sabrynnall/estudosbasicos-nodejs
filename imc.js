function calcularImc(peso, altura) {
    
    var imc = (peso / (altura*altura));

    if (imc <= 18.5) {
    return (`Seu IMC é ${imc.toFixed([2])}, você está abaixo do peso!`);    
    } else if (imc > 18.5 && imc < 24.9) {
    return (`Seu IMC é ${imc.toFixed([2])}, você está no peso normal!`);
    } else if (imc > 24.9 && imc <= 30) {
    return (`Seu IMC é ${imc.toFixed([2])}, você está com sobrepeso!`);
    } else {
    return (`Seu IMC é ${imc.toFixed([2])}, você está com obesidade!`);
    }
}  

console.log(calcularImc(58, 1.67));
console.log(calcularImc(65, 1.55));
console.log(calcularImc(80, 1.75));
3