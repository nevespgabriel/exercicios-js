let palavras = ["Javascript", "Python", "PHP", "Ruby", "C", "C++", "C#", "Java", "Pascal", "Assembly"];
let pal = palavras[Math.random*100 - (100 - palavras.length)];
pal = pal.split()
console.log(pal)

console.log("Digite a letra que deseja inserir na forca:\n");
process.stdin.on("data", function(data){
    console.log("________");
    console.log("|     _|_");
    console.log("|      O");
    console.log("|     ´I`" );
    console.log("|     / \\");
    console.log("|");
});