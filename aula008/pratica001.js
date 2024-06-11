let numeros = [];
let n, resp, media=0;

console.log("Digite o número que deseja adicionar ao array:")
process.stdin.on("data", function(data){

    if(!n){

        n = Number(data.toString().trim());
        numeros.push(n);
        resp = "";
        console.log("Deseja continuar a adicionar números?");
    } else if(!resp){

        resp = data.toString().trim().toLowerCase();
        if(resp == "sim" || resp == "s"){

            console.log("Digite o próximo número a ser adicionado.");
            n = "";
        } else{

            for(let c=0; c<numeros.length; c++){

                media += numeros[c];
            }
            media = media / numeros.length;
            console.log("A média dos números digitados ficou " + media);
            process.exit();
        }
    }    
        
});