function ConverterDolar() {
  //Pega o valor pelo id indicado no html que receberá alteração do js
  var valorElemento = document.getElementById("valor");
  //Puxa o que está inserido na input
  var valorzinho = valorElemento.value;
  //Converte de string para decimal(Float)
  var valorEmDolarNumerico = parseFloat(valorzinho);
  //Conversão para reais
  var valorEmReal = valorEmDolarNumerico * 5.25;

  //PUXA o valor referência pelo id no HTML
  var elementoValorConvertido = document.getElementById("valorConvertido");
  //Variávem com a mensagem e valor convertido
  var valorConvertido = "U$" + valorEmDolarNumerico + " são R$" + valorEmReal;
  //EXIBIDOR que colocar dentro do elemento <></> no HTML
  elementoValorConvertido.innerHTML = valorConvertido;

  //Impressão
  console.log(valorConvertido);
}

function ConverterEuro() {
  //Pega o valor pelo id indicado no html que receberá alteração do js
  var valorElemento = document.getElementById("valor");
  //Puxa o que está inserido na input
  var valorzinho = valorElemento.value;
  //Converte de string para decimal(Float)
  var valorEmEuroNumerico = parseFloat(valorzinho);
  //Conversão para reais
  var valorEmReal = valorEmEuroNumerico * 6.21;

  //PUXA o valor referência pelo id no HTML
  var elementoValorConvertido = document.getElementById("valorConvertido");
  //Variávem com a mensagem e valor convertido
  var valorConvertido = "€$" + valorEmEuroNumerico + " são R$" + valorEmReal;
  //EXIBIDOR que colocar dentro do elemento <></> no HTML
  elementoValorConvertido.innerHTML = valorConvertido;

  //Impressão
  console.log(valorConvertido);
}

function ConverterBitcoin() {
  //Pega o valor pelo id indicado no html que receberá alteração do js
  var valorElemento = document.getElementById("valor");
  //Puxa o que está inserido na input
  var valorzinho = valorElemento.value;
  //Converte de string para decimal(Float)
  var valorEmBitcoinNumerico = parseFloat(valorzinho);
  //Conversão para reais
  var valorEmReal = valorEmBitcoinNumerico * 249134.76;

  //PUXA o valor referência pelo id no HTML
  var elementoValorConvertido = document.getElementById("valorConvertido");
  //Variávem com a mensagem e valor convertido
  var valorConvertido = "₿$" + valorEmBitcoinNumerico + " são R$" + valorEmReal;
  //EXIBIDOR que colocar dentro do elemento <></> no HTML
  elementoValorConvertido.innerHTML = valorConvertido;

  //Impressão
  console.log(valorConvertido);
}
