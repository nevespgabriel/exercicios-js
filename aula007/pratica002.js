let lista = [];
let hobbie;
let resp;

console.log("Digite o hobbie que deseja adicionar:");
process.stdin.on("data", function(data){

    if(!hobbie){

        hobbie = data.toString().trim();
        lista.push(hobbie);
        console.log("Deseja adicionar outro hobbie?");
        resp = "";
    } else if(!resp){

        resp = data.toString().trim().toLowerCase();
        if(resp != "sim" && resp != "s"){

            console.log("Hobbies digitados:");
            lista.forEach(function(elemento){

                console.log(elemento);
            })
            process.exit();
        } else {

            hobbie = "";
            console.log("Digite o próximo hobbie:");
        }
    }   
    
});
