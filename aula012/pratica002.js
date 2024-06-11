let n1, n2, n3;

console.log("Digite o primeiro número:");
process.stdin.on("data", function (data) {
  if (!n1) {
    n1 = Number(data.toString().trim());
    console.log("Digite o segundo número:");
  } else if (!n2) {
    n2 = Number(data.toString().trim());
    console.log("Digite o terceiro número:");
  } else {
    n3 = Number(data.toString().trim());
    if (n1 >= n2 && n1 >= n3) {
      console.log(n1 + " foi o maior valor digitado.");
    } else if (n2 >= n1 && n2 >= n3) {
      console.log(n2 + " foi o maior valor digitado.");
    } else {
      console.log(n3 + " foi o maior valor digitado.");
    }
    process.exit();
  }
});
