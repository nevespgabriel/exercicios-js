let senha;

console.log("Informe a senha:");
process.stdin.on("data", function(data){

    senha = data.toString().trim();

    if(senha == "1234"){

        console.log("Senha correta. Acesso permitido.");
    } else{

        console.log("SENHA INCORRETA.");
    }

    process.exit();
})