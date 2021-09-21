/* const rLine = require('readline');

const rl = rLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Qual é o seu nome? `, (nome) => {
    console.log(`Olá ${nome}`)
    rl.close()
}) */

const rLine = require('readline-sync');

const nome = rLine.question(`Qual é o seu nome? \n`); 
    console.log(`Olááááá, ${nome}`);
