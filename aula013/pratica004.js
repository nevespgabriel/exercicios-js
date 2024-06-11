const alunos_notas = [
    {nome: "Ana", nota: 8.5},
    {nome: "Carlos", nota: 4.2},
    {nome: "Beatriz", nota: 6.8},
    {nome: "Daniel", nota: 7.0},
    {nome: "Ester", nota: 5.5}
];

for(let c=0; c<alunos_notas.length; c++){
    if(alunos_notas[c].nota >= 7){
        console.log("Aluno(a) " + alunos_notas[c].nome + ": Aprovado.");
    } else if(alunos_notas[c].nota >= 5){
        console.log("Aluno(a) " + alunos_notas[c].nome + ": Recuperação.");
    } else{
        console.log("Aluno(a) " + alunos_notas[c].nome + ": Reprovado.");
    }
}