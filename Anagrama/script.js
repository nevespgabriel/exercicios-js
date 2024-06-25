console.log("Digite uma palavra:");
let anagramas = [];
process.stdin.on("data", function (data) {
  let aux;
  let palavra = data.toString().trim();
  palavra = palavra.split("");
  console.log("Anagramas:");
  for (let i = 0; i < palavra.length; i++) {
    for (let j = 0; j < palavra.length; j++) {
      aux = palavra[i];
      palavra[i] = palavra[j];
      palavra[j] = aux;
      if (!anagramas.includes(palavra.join(""))) {
        anagramas.push(palavra.join(""));
        console.log(palavra.join(""));
      }
    }
  }
  process.exit();
});
