//VOLTAR NESSE EXERCÍCIO DEPOIS QUE APRENDER OQ ESTÁ DANDO DE ERRADO

let v1, v2, v3;

console.log("Digite o primeiro valor:");
process.stdin.on("data", function(data){

    if(!v1){

        v1 = data.toString().trim();
        console.log("Digite o segundo valor:");
    } else if(!v2){

        v2 = data.toString().trim();
        console.log("Digite o terceiro valor:");
    } else{

        v3 = data.toString().trim();
        if((v2>v3) && (v2>v1)){

            console.log(v2 + " é o maior valor digitado.");
        } else if((v1>v2) && (v1>v3)){

            console.log(v1 + " é o maior valor digitado.");
        } else{

            console.log(v3 + " é o maior valor digitado.");
        }
        process.exit();
    }
});