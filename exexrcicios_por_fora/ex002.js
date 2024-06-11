let anoNascimento;

console.log("Digite seu ano de nascimento:");
process.stdin.on("data", function(data){

    anoNascimento = data.toString().trim();

    if(2024 - anoNascimento >= 16){

        console.log("Você poderá votar nesse ano.");
    }
    else{

        console.log("Você não poderá votar nesse ano.");
    }
    process.exit();
});