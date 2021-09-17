var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 0;
//var numeroLimite = 10;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");

  tentativa = tentativa + 1;

  //console.log(chute);

  if (chute == numeroSecreto && tentativa < 3) {
    console.log("Acertou, mizeravi!");
    elementoResultado.innerHTML = "Acertou, mizeravi!";
  } else if (chute > 10 || chute < 0) {
    console.log("Digitar um número entre 0 a 10 você deve");
    elementoResultado.innerHTML = "Digitar um número entre 0 a 10 você deve";
  } else if (tentativa == 4) {
    //caso o número de tenta
    elementoResultado.innerHTML = "Esgotowwwww! O número era " + numeroSecreto;
  } else if (numeroSecreto > chute && tentativa < 3) {
    console.log(
      "Errowwwww! O número secreto é maior do que esse, tente novamente! Tentativas: " +
        tentativa
    );
    elementoResultado.innerHTML =
      "Errowwwww! O número secreto é maior do que esse, tente novamente! Tentativas: " +
      tentativa;
  } else if (numeroSecreto < chute && tentativa < 3) {
    console.log(
      "Errowwwww! O número secreto é menor do que esse, tente novamente! Tentativas: " +
        tentativa
    );
    elementoResultado.innerHTML =
      "Errowwwww! O número secreto era menor do que esse, tente novamente! Tentativas: " +
      tentativa;
  } else if (tentativa > 4 || tentativa == 4) {
    //caso o número de tenta
    elementoResultado.innerHTML =
      "Hoje sim, hoje sim, hoje não foi desta vez... mas tente novamente!";
  }
}
