let v1;
let v2;

console.log("Digite o primeiro valor:");
process.stdin.on("data", function(data){

    if(!v1){

        v1 = data.toString().trim();
        console.log("Digite o segundo valor:");
    } else if(!v2){

        v2 = data.toString().trim();
    } else{

        if(v1 > v2){

            console.log(v1 + " é maior que " + v2);
        } else if (v2 > v1){

            console.log(v2 + " é maior que " + v1);
        } else{

            console.log(v1 + " e " + v2 + " são iguais");
        }

        process.exit();
    }
})