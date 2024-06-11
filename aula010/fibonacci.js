let fibo = [1, 1];
let qtdElementos, temp;

console.log("Digite quantos números da sequência gostaria de descobrir");
process.stdin.on("data", function (data) {
  qtdElementos = Number(data.toString().trim());
  console.log("Elemento 1: 1");
  console.log("Elemento 2: 1");
  for (let c = 2; c < qtdElementos; c++) {
    fibo[c] = fibo[c - 2] + fibo[c - 1];
    console.log("Elemento " + (c + 1) + ": " + fibo[c]);
  }
  process.exit();
});
