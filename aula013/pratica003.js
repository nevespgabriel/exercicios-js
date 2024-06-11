const cesta_frutas = {}
const frutas = ["maçã", "banana", "pêssego", "maçã", "banana"];

for(let c=0; c<frutas.length; c++){
    if(!cesta_frutas[frutas[c]]){
        cesta_frutas[frutas[c]] = 1;
    } else{
        cesta_frutas[frutas[c]]++;
    }
}
console.log(cesta_frutas);