/*
var nome = "Gabriel";
var sobrenome = "Pereira Neves";

console.log("Hello world " + nome + " " + sobrenome);
*/

console.log('Digite seu nome:\n');

process.stdin.on('data', function(data){

    let nome_usuario = data.toString();

    console.log("Concatenado com sucesso " + nome_usuario);

    process.exit();
});



