const modulo = require('./modulo.js');
const prompt = require("prompt-sync");

let num = prompt("Digite um número: ");

if(modulo.verificaNum(num)){
    modulo.verificaPerfeito(num);
}
