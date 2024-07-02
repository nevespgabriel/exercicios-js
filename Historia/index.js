const prompt = require('prompt-sync')();

let palavras = {};
let hist = prompt("Conte uma história: ").trim();
hist = hist.replaceAll(",", "").replaceAll(".", "").split(" ");
console.log(`A história contada possui ${hist.length} palavras`);

for(let c=0; c<hist.length; c++){
    if(!palavras[hist[c]]){
        palavras[hist[c]] = 1;
    } else{
        palavras[hist[c]]++;
    }
}

for(let c=0; c<Object.keys(palavras).length; c++){
    console.log(`A palavra ${Object.keys(palavras)[c]} aparece ${Object.values(palavras)[c]} vezes.`);
}