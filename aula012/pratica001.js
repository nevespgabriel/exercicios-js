let tipo, temp, conversao;

console.log(
  "[1] Converter de celsius para fahrenheit\n[2]Converter de fahrenheit para celsius\nSua resposta:"
);
process.stdin.on("data", function (data) {
  if (!tipo) {
    tipo = data.toString().trim();
    if (tipo == 1 || tipo == 2) {
      console.log("Agora digite quantos graus:");
    } else {
      console.log(
        "Tipo inválido! Digite 1 ou 2\n[1] Converter de celsius para fahrenheit\n[2]Converter de fahrenheit para celsius\nSua resposta:"
      );
      tipo = "";
    }
  } else if (!temp) {
    temp = Number(data.toString().trim());
    if (Number.isNaN(temp)) {
      console.log("Insira uma temperatura válida:");
      temp = "";
    } else if (tipo == 1) {
      conversao = temp * 1.8 + 32;
      console.log(
        "A conversão de " +
          temp +
          "°C para fahrenheit fica " +
          conversao +
          "°F."
      );
      process.exit();
    } else if (tipo == 2) {
      conversao = (temp - 32) / 1.8;
      console.log(
        "A conversão de " + temp + "°F para celsius fica " + conversao + "°C."
      );
      process.exit();
    }
  }
});
