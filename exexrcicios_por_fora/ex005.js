let v1, v2, v3;
let cont = 0;

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

        if(v2>v1 && v2>v3){

            v1 += v2;
            v2 = v1 - v2;
            v1 = v1 - v2;
        } else if(v3>v1 && v3>v2){

            v1 += v3;
            v3 = v1 - v3;
            v1 = v1 - v3;
        } else if(v3 > v2){
            
            v2 += v3; // inverter corretamente aq
            v3 = v2 - v3;
            v2 = v2 - v3;
        } else{
            console.log(v1 + " > " + v2 + " > " + v3);
            process.exit();
        }
    }
});