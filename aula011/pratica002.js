let usuario = {
  nome: "",
  idade: "",
  salario: "",
  sexo: "",
  estado_civil: "",
};

console.log("Digite seu nome:");
process.stdin.on("data", function (data) {
  if (!usuario.nome) {
    usuario.nome = data.toString().trim();
    if (usuario.nome.length <= 3) {
      console.log("Nome muito pequeno. Digite novamente:");
      usuario.nome = "";
    } else {
      console.log("Digite sua idade:");
    }
  } else if (!usuario.idade) {
    usuario.idade = Number(data.toString().trim());
    if (usuario.idade < 0 || usuario.idade > 150) {
      console.log("Idade inválida. Digite novamente:");
      usuario.idade = "";
    } else {
      console.log("Digite seu salário:");
    }
  } else if (!usuario.salario) {
    usuario.salario = Number(data.toString().trim());
    if (usuario.salario < 0) {
      console.log("Salário inválido. Digite novamente:");
      usuario.salario = "";
    } else {
      console.log("Digite seu sexo [valores aceitos: f/m]:");
    }
  } else if (!usuario.sexo) {
    usuario.sexo = data.toString().trim();
    if (usuario.sexo != "m" && usuario.sexo != "f") {
      console.log("Sexo inválido. Digite novamente [valores aceitos: f/m]: ");
      usuario.sexo = "";
    } else {
      console.log("Digite seu estado civil [valores aceitos: s/c/v/d]:");
    }
  } else if (!usuario.estado_civil) {
    usuario.estado_civil = data.toString().trim();
    if (
      usuario.estado_civil != "s" &&
      usuario.estado_civil != "c" &&
      usuario.estado_civil != "v" &&
      usuario.estado_civil != "d"
    ) {
      console.log(
        "Estado civil inválido. Digite novamente [valores aceitos: s/c/v/d]:"
      );
      usuario.estado_civil = "";
    } else {
      console.log("Seu nome é " + usuario.nome);
      console.log("Você tem " + usuario.idade + " anos.");
      console.log("Seu salário é R$" + usuario.salario);
      switch (usuario.sexo) {
        case "f":
          console.log("Você é uma mulher.");
          break;
        case "m":
          console.log("Você é um homem");
          break;
      }
      switch (usuario.estado_civil) {
        case "s":
          console.log("Você está solteiro.");
          break;
        case "c":
          console.log("Você é casado.");
          break;
        case "v":
          console.log("Você é viúvo.");
          break;
        case "d":
          console.log("Você é divorciado.");
          break;
      }
      process.exit();
    }
  }
});
