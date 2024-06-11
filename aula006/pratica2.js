const listaDeCompras = ["Pão", "Batata", "Cenoura", "Alface", "Carne"];
let produto;

console.log("Digite o produto que quer verificar se está na lista de compras:");
process.stdin.on("data", function(data){

    produto = data.toString().trim();
    if(listaDeCompras.includes(produto)){

        console.log(produto + " está na lista de compras.");
    } else{

        console.log(produto + " não está na lista de compras.");
    }
    process.exit();
});