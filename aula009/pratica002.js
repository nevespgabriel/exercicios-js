let dia = true; //variável que será alterada depois não deve ser declarada como const. Const especifica valores que permanecerão constantes durante o programa

if(dia) {
    console.log("Bom dia");
} else{ //Else com condição não existe. Além disso, faltou abrir a chave do else.
    console.log("Boa noite");
}

dia = false;

let aluno = { //Deve haver um sinal de igual para atribuir a um objeto
    frio: true, //Para atribuirmos um valor a um atributo de objeto, usamos :
    molhado: true //: no lugar de =
}

if(aluno.molhado && aluno.frio && !dia) { //O correto para duas condições serem obrigatoriamente verdadeiras é &&, e não EE
    console.log("Vou usar um casaco");

    let casacos = ["casaco1", "casaco2", "casaco3"]; //Os elementos de um array são separados por , e não por ;
    
    for (let i = 0; i < casacos.length; i++) { //i deve começar no 0, pois o primeiro elemento do array possui índice 0; 
        //i deve ser < que casacos.lenght e não <=, pois como o primeiro índice do array é 0, seu último índice será o tamanho - 1, e não o tamanho.
        console.log("Ponha " + casacos[i] + " tira " + casacos[i]);
        
    }
} //Faltou a chave para fechar o bloco de comando do if