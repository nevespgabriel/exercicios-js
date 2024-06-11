let pais_a = 80000;
let pais_b = 200000;
let ano = 0;

while (pais_a < pais_b) {
  pais_a += pais_a * 0.03;
  pais_b += pais_b * 0.015;
  ano++;
}
console.log(
  "Serão necessários " +
    ano +
    " anos para o país a ultrapassar o país b em população."
);
