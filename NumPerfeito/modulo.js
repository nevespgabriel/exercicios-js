function verificaNum(num){
    if(isNaN(num)){
        console.log("ERRO. Valor digitado não é um número.");
        return false;
    }
    return true;
}

function somaMultiplo(num){
    let soma;
    for(let c=2; c <= num/2; c++){
        if(num%c == 0){
            soma += c;
        }
    }
    return soma;
}

function verificaPerfeito(num){
    if(num == somaMultiplo(num)){
        console.log("O número é perfeito");
    } else{
        console.log("O número não é perfeito.");
    }
}

module.exports = {
    verificaPerfeito,
    verificaNum
};
    