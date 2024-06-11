let qtdMacas;
let precoTotal;

console.log("Digite a quantidade de maçãs compradas:");
process.stdin.on("data", function(data){

    qtdMacas = data.toString().trim();

    if(qtdMacas < 12){
        precoTotal = qtdMacas * 0.3;
    } else{
        precoTotal = qtdMacas * 0.25
    }
    
    console.log("Foram compradas " + qtdMacas + " maçãs, resultando em R$" + precoTotal);
    process.exit();
});

