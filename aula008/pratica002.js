let alunos = [];
let resp;
let aluno;

console.log("Digite o nome do(a) aluno(a):");
process.stdin.on("data", function(data){

    if(!aluno){

        aluno = {
            nome : "",
            idade : "",
            curso : ""
        }; 
        aluno.nome = data.toString().trim();
        console.log("Digite a idade do(a) aluno(a):")
    }else if(!aluno.idade){

        aluno.idade = Number(data.toString().trim());
        console.log("Digite o curso do(a) aluno(a):");
    } else if(!aluno.curso){

        aluno.curso = data.toString().trim();
        console.log("Quer adicionar mais um(a) aluno(a)? Digite 'sim' caso queira e 'sair' caso não queira:")
    } else if(!resp){

        alunos.push(aluno);
        resp = data.toString().trim().toLowerCase();
        if(resp == "sair"){

            for(let c = 0; c < alunos.length; c++){

                console.log("========================");
                console.log("ALUNO(A) " + (c+1));
                console.log("Nome: " + alunos[c].nome);
                console.log("Idade: " + alunos[c].idade);
                console.log("Curso: " + alunos[c].curso);
                console.log("========================");
            }
            process.exit();
        } else{

            console.log("Digite o nome do(a) próximo(a) aluno(a):");
            aluno = "";
            resp = "";
        }
    }
});