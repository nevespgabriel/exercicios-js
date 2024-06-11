const listaNumeros = [1, 2, 3, 4, 5];
let n;
let c;

console.log("Digite o número que quer verificar se está na lista:")
process.stdin.on("data", function(data){

    n = data.toString().trim();
    for(c=0; c<listaNumeros.length; c++)
    {
        if(n == listaNumeros[c]){

            console.log("O número digitado está na lista.");
            process.exit();
        }
    }
    console.log("O número digitado não está na lista.");
    process.exit();
});