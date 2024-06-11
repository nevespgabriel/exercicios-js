let aleatorio = 100 + Math.floor(Math.random() * 100);
let numUsuario,
  repeticoes = 0;

console.log("Adivinhe o número gerado entre 0 e 100:");
process.stdin.on("data", function (data) {
  numUsuario = Number(data.toString().trim());
  repeticoes++;
  if (numUsuario == aleatorio) {
    console.log(
      "Parabéns, você acertou o número em " + repeticoes + " tentativas!"
    );
    process.exit();
  } else if (numUsuario > aleatorio - 10 && numUsuario < aleatorio + 10) {
    console.log(
      "Você digitou um número próximo do número gerado. Está quente."
    );
  } else {
    console.log(
      "O número digitado ainda está longe do número gerado. Você está frio."
    );
  }
  if (repeticoes >= 5) {
    console.log(
      "Por você ter extrapolado a quantidade de tentativas, outro número foi gerado. A resposta anterior era " +
        aleatorio +
        ". Tente acertar o próximo:"
    );
    repeticoes = 0;
    aleatorio = Math.floor(Math.random() * 100);
  } else {
    console.log("Digite o próximo palpite:");
  }
});
