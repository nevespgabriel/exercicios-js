let gostaCafe = "";

console.log("Você gosta de café? [sim/nao]");
process.stdin.on("data", function(data){

    gostaCafe = data.toString().trim().toLowerCase();

    if(gostaCafe == "sim"){
        console.log("Tens bom gosto!");
    } else{
        console.log("Que gosto duvidoso...");
    }

    process.exit();
});