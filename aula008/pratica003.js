// Existem 4 erros

let nome = ""

console.log("Digite seu nome:");
process.stdin.on("data", function(data) {
    nome = data.toString().trim();
    console.log("Olá " + nome);
    process.exit();
})