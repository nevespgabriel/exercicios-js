let palavras = ["Javascript", "Python", "PHP", "Ruby", "C", "C++", "C#", "Java", "Pascal", "Assembly"];
const pal = palavras[Math.random*100 - (100 - palavras.length)];

console.log("Digite a letra que deseja inserir na forca:\n");
process.stdin.on("data", function(data){
    console.log("________");
    console.log("|     _|_");
    console.log("|      O");
    console.log("|     ´I`" );
    console.log("|     / \\");
    console.log("|");
});