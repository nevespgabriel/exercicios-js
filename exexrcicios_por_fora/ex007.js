let numLados;
let medidaLado;
let area;

console.log("Digite o número de lados de um polígono regular:");
process.stdin.on("data", function(data){

    if(!numLados){

        numLados = data.toString().trim();
        console.log("Digite a medida do lado em cm:")
    } else if(!medidaLado){

        medidaLado = data.toString().trim();
    } else{

        if(numLados == 3){

            area = medidaLado * Math.sqrt(medidaLado**2 + (medidaLado/2)**2)
            console.log("O polígono é um triângulo\nÁrea = " + area);
        } else if(numLados == 4){

            area = medidaLado**2;
            console.log("O polígono é um quadrado\nÁrea = " + area);
        } else if(numLados == 5){

            area = 5 * medidaLado * Math.sqrt(medidaLado**2 + (medidaLado/2)**2)
            console.log("O polígono é um pentágono\nÁrea = " + area);
        } else if(numLados <= 2){

            console.log("Com menos de 3 lados não é formado um polígono.");
        } else{
            
            console.log("Polígono não identificado.");
        }
        process.exit();
    }
        
});