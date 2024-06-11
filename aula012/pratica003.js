let n;

console.log("Digite um número:");
process.stdin.on("data", function (data) {
  n = data.toString().trim();
  for (let c = 2; c <= n / 2; c++) {
    if (n%c == 0) {
      console.log("O número não é primo.");
      process.exit();
    }
  }
  console.log("O número é primo.");
  process.exit();
});
