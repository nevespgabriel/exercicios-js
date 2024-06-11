let anoNascimento;
let idade;
const anoAtual = 2024;

console.log("Qual seu ano de nascimento?");
process.stdin.on("data", function (data) {

  anoNascimento = data.toString().trim();
  idade = anoAtual - anoNascimento;
  console.log("Sua idade: " + idade);
  process.exit();
});
