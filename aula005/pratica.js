let nome = "";
let idade = "";
let possui_cnh = "";

console.log("Qual o seu nome?");

process.stdin.on("data", function(data){

    if(!nome){

        nome = data.toString().trim();
        console.log("Qual a sua idade?"); 
    } else if(!idade){

        idade = data.toString().trim();
        console.log("Olá " + nome + ", você tem " + idade + " anos.");
        console.log("Você possui cnh?"); // Se colocasse essa pergunta no else, primeiramente seria lido o possui_cnh para depois aparecer a pergunta do console.log
    } else{

        possui_cnh = data.toString().trim();

        if(possui_cnh == "sim" || possui_cnh == "s"){

            console.log("Você pode dirigir.");
        } else{

            console.log("Você não pode dirigir.");
        }
        process.exit(); //Esse comando estando aqui, o código vai ser executado até chegar nele. De certa forma, se assemelha a uma estrutura de repetição
    }    
});