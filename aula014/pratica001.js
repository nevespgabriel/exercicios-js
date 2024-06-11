let biblioteca = [];
let livro;
let resp;

console.log(
  "Digite o que deseja fazer:\n[1] Adicionar livro\n[2] Remover livro"
);
console.log("[3] Listar livros\n[4] Sair");
process.stdin.on("data", function (data) {
  let entrada = data.toString().trim();
  if (resp == 2) {
    livro = entrada;
  } else if (resp == undefined) {
    resp = Number(entrada);
  }
  switch (resp) {
    case 1:
      if (!livro) {
        livro = {};
        console.log("Digite o nome do livro:");
      } else if (!livro.nome) {
        livro.nome = entrada;
        console.log("Digite o autor do livro");
      } else if (!livro.autor) {
        livro.autor = entrada;
        console.log("Digite o tamanho do livro:");
      } else if (!livro.tamanho) {
        livro.tamanho = entrada;
        console.log("Digite o gênero do livro:");
      } else if (!livro.genero) {
        livro.genero = entrada;
        biblioteca.push(livro);
        livro = undefined;
        resp = undefined;
      }
      break;
    case 2:
      if (!livro) {
        console.log("Digite o nome do livro que deseja excluir:");
      } else {
        for (let c = 0; c < biblioteca.length; c++) {
          if (livro == biblioteca[c].nome) {
            biblioteca.splice(c, 1);
            console.log("Livro removido com suceso");
          }
        }
        livro = undefined;
        resp = undefined;
      }
      break;
    case 3:
      if (biblioteca.length > 0) {
        console.log("LIVROS DA BIBLIOTECA");
        for (let c = 0; c < biblioteca.length; c++) {
          console.log("============================");
          console.log("         LIVRO " + (c + 1));
          console.log("Nome: " + biblioteca[c].nome);
          console.log("Autor: " + biblioteca[c].autor);
          console.log("Tamanho: " + biblioteca[c].tamanho);
          console.log("Gênero: " + biblioteca[c].genero);
          console.log("============================");
        }
      } else {
        console.log("Não foi adicionado nenhum livro a bibliteca ainda.");
      }
      resp = undefined;
      break;
    case 4:
      console.log("Saindo...");
      process.exit();
      break;
  }
  if (resp == undefined) {
    console.log(
      "Digite o que deseja fazer:\n[1] Adicionar livro\n[2] Remover livro"
    );
    console.log("[3] Listar livros\n[4] Sair");
  }
});
