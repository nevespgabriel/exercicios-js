let altura;
let sexo;
let pesoIdeal;

console.log("Qual seu sexo?[1 - Masculino / 2 - Feminino]");
process.stdin.on("data", function(data){
    
    if(!sexo){

        sexo = data.toString().trim().toUpperCase();
        console.log("Qual a sua altura?");
    } else if(!altura){

        altura = data.toString().trim();
    }
    else{

        if(sexo == 1){

            pesoIdeal = (72.7 * altura) - 58;
        } else if(sexo == 2){

            pesoIdeal = (62.1*altura) - 44.7
        } else{

            console.log("Valor para sexo inválido.");
        }
        console.log("Seu peso ideal seria " + pesoIdeal);
        process.exit();
    }
});