let usuario = {
    nome: "",
    idade: ""
};

console.log("Digite seu nome:");
process.stdin.on("data", function(data){

    if(!usuario.nome){

        usuario.nome = data.toString().trim();
        console.log("Digite a sua idade:");
    } else if(!usuario.idade){

        usuario.idade = Number(data.toString().trim());
        if(usuario.idade >= 18){

            console.log("Você é de maior, já pode ser preso!");
        } else{

            console.log("Você ainda é menor de idade, não será preso.")
        }
        process.exit();
    } 
});