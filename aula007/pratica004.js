let frase = "";

console.log("Digite uma frase:");
process.stdin.on("data", function(data){

    frase = data.toString().trim();
    console.log("A frase digitada possui " + frase.length + " caracteres.");
    process.exit();
});