var numeroSecreto = parseInt(Math.random() * 11);
//var numeroLimite = 10;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  var elementoResultado = document.getElementById("resultado");

  //console.log(chute);

  if (chute == numeroSecreto) {
    // console.log("acertou");

    elementoResultado.innerHTML = "Acertou, mizeravi!";
  } else if (chute > 10 || chute < 0) {
    //console.log("Digitar um número entre 0 a 10 você deve");

    elementoResultado.innerHTML = "Digitar um número entre 0 a 10 você deve";
  } else {
    //console.log("Errowwwww! O número secreto era " + numeroSecreto);

    elementoResultado.innerHTML =
      "Errowwwww! O número secreto era " + numeroSecreto;
  }
}
