const jogo_velha = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let resp,
  cont = 1;
let valid = false;
let elemento = "X";

for (let l = 0; l < 3; l++) {
  for (let c = 0; c < 3; c++) {
    process.stdout.write(jogo_velha[l][c] + "\t");
  }
  process.stdout.write("\n");
}

console.log("Digite o local em que deseja adicionar um X:");
process.stdin.on("data", function (data) {
  resp = data.toString().trim();
  console.log("");
  for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
      if (resp == jogo_velha[l][c]) {
        jogo_velha[l][c] = elemento;
        cont++;
        valid = true;
      }
      process.stdout.write(jogo_velha[l][c] + "\t");
    }
    process.stdout.write("\n");
  }

  for (let c = 0; c < 3; c++) {
    if (
      (jogo_velha[c][0] == jogo_velha[c][1] &&
        jogo_velha[c][2] == jogo_velha[c][1]) ||
      (jogo_velha[0][c] == jogo_velha[1][c] &&
        jogo_velha[2][c] == jogo_velha[1][c])
    ) {
      console.log("Parabéns, o elemento " + elemento + " venceu");
      process.exit();
    }
  }
  if (
    (jogo_velha[1][1] == jogo_velha[0][0] &&
      jogo_velha[2][2] == jogo_velha[1][1]) ||
    (jogo_velha[0][2] == jogo_velha[1][1] &&
      jogo_velha[2][0] == jogo_velha[1][1])
  )
    console.log("");
  if (!valid) {
    console.log("Valor inválido digitado, digite um local disponível.");
  } else if (cont % 2 == 0) {
    console.log("Digite o local em que deseja inserir a O:");
    elemento = "O";
  } else {
    console.log("Digite o local em que deseja inserir o X:");
    elemento = "X";
  }
  valid = false;
});
