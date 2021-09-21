function calcularMedia(nota1, nota2, nota3) {
    
    var media = ((nota1 + nota2 + nota3)/3);

    if (media >= 7) {
    return (`Sua média é ${media}, você está aprovada!`);    
    } else if (media < 7 && media > 5) {
    return (`Sua média é ${media}, você está em recuperação`); 
    } else {
    return (`Sua média é ${media}, você está reprovada!`);
    }
}  

const rLine = require('readline-sync');

const nota1 = parseFloat(rLine.question(`Qual foi a sua nota 1? \n`));
const nota2 = parseFloat(rLine.question(`Qual foi a sua nota 2? \n`));
const nota3 = parseFloat(rLine.question(`Qual foi a sua nota 3? \n`));

console.log(calcularMedia(nota1, nota2, nota3));