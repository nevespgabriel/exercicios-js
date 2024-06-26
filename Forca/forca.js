let palavras = ["Javascript", "Python", "PHP", "Ruby", "C", "C++", "C#", "Java", "Pascal", "Assembly"];
let pessoa = {
    cabeca: "O",
    bracoDir: "`",
    bracoEsq: "´",
    corpo: "I",
    pernaDir: "\\",
    pernaEsq: "/"
}
const indice = Math.floor(Math.random() * palavras.length);
console.log(indice);
let palSorteada = palavras[indice].split("");;
let palAdivinhada = [];
let entrada, retira;
let cont;
for(let c=0; c<palSorteada.length; c++){
    palAdivinhada.push("_ ");
}

console.log("Digite a letra que deseja inserir na forca:\n");
process.stdin.on("data", function(data){
    entrada = data.toString().trim();
    retira = true;
    cont = 0;
    for(let c=0; c<palSorteada.length;c++){
        if(entrada.toLowerCase() == palSorteada[c].toLowerCase()){
            retira = false;
            palAdivinhada[c] = entrada + " ";
        }
    }
    if(retira){
        if(pessoa.pernaDir){
            pessoa.pernaDir = "";
        } else if(pessoa.pernaEsq){
            pessoa.pernaEsq = "";
        } else if(pessoa.bracoDir){
            pessoa.bracoDir = "";
        } else if(pessoa.bracoEsq){
            pessoa.bracoEsq = "";
        } else if(pessoa.corpo){
            pessoa.corpo = ""
        } else{
            pessoa.cabeca = "";
        }
    }
        
    console.log("________");
    console.log("|     _|_");
    console.log("|      " + pessoa.cabeca);
    console.log("|     " + pessoa.bracoEsq + pessoa.corpo + pessoa.bracoDir);
    console.log("|     " + pessoa.pernaEsq + " " + pessoa.pernaDir);
    console.log("|");
    process.stdout.write("|");
    for(let c=0;c<palAdivinhada.length;c++){
        process.stdout.write(palAdivinhada[c]);
        if(palAdivinhada[c] != "_ "){
            cont++;
        }
    }
    if(!pessoa.cabeca){
        console.log("\nVocê não adivinhou a palavra e perdeu.");
        process.exit();
    } else if(cont == palAdivinhada.length){
        console.log("\nVocê acertou a palavra, parabéns!");
        process.exit();
    }
    console.log("\n\nDigite a próxima letra que deseja inserir:\n");
});