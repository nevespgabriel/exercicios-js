let n;

console.log("Digite um número:");
process.stdin.on("data", function (data) {
  n = Number(data.toString().trim());
  let fat = 1;
  for (let c = n; c > 0; c--) {
    fat *= c;
  }
  console.log("O fatorial de " + n + " é " + fat);
  process.exit();
});
