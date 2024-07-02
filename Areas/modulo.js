function areaCirculo(raio){
    return Math.PI * raio ** 2;
}

areaTriangulo = (base, altura) => base * altura / 2 

function areaRetangulo(base, altura){
    return base * altura;
}

module.exports = {
    areaCirculo,
    areaTriangulo,
    areaRetangulo
};