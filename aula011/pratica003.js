let idades = [];
let idade, resp, media;
media = 0;

console.log("Digite a idade:");
process.stdin.on("data", function (data) {
  if (!idade) {
    idade = Number(data.toString().trim());
    if (idade >= 0) {
      idades.push(idade);
      console.log("Quer inserir mais idades? [sim/não]");
      resp = "";
    } else {
      console.log("Idade inválida, digite novamente:");
      idade = "";
      resp = "j";
    }
  } else if (!resp) {
    resp = data.toString().trim().toLowerCase();
    if (resp == "sim" || resp == "s") {
      console.log("Digite a próxima idade:");
      idade = "";
    } else {
      idades.forEach((num) => {
        media += num;
      });
      media /= idades.length;
      console.log("Média das idades = " + media);
      if (media >= 0 && media <= 25) {
        console.log("A turma é jovem.");
      } else if (media <= 60) {
        console.log("A turma é adulta.");
      } else {
        console.log("A turma é idosa.");
      }
      process.exit();
    }
  }
});
