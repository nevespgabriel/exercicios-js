let n;

console.log("Digite um número para verificar se é par ou ímpar:");
process.stdin.on("data", function(data){

    n = data.toString();

    if(n%2 == 0){
        console.log("O número é par.");
    } else{
        console.log("O número é ímpar.");
    }

    process.exit();
});