function ConverterFarenheit() {
  //Pega o valor pelo id indicado no html que receberá alteração do js
  var valorElemento = document.getElementById("valor");
  //Puxa o que está inserido na input
  var valorzinho = valorElemento.value;
  //Converte de string para decimal(Float)
  var valorEmCelsiusNumerico = parseFloat(valorzinho);
  //Conversão para reais
  var valorEmFarenheit = valorEmCelsiusNumerico * 1.8 + 32;

  //PUXA o valor referência pelo id no HTML
  var elementoValorConvertido = document.getElementById("valorConvertido");
  //Variávem com a mensagem e valor convertido
  var valorConvertido =
    valorEmCelsiusNumerico + "°C são " + valorEmFarenheit + "°F";
  //EXIBIDOR que colocar dentro do elemento <></> no HTML
  elementoValorConvertido.innerHTML = valorConvertido;

  //Impressão
  console.log(valorConvertido);
}

function ConverterKelvin() {
  //Pega o valor pelo id indicado no html que receberá alteração do js
  var valorElemento = document.getElementById("valor");
  //Puxa o que está inserido na input
  var valorzinho = valorElemento.value;
  //Converte de string para decimal(Float)
  var valorEmCelsiusNumerico = parseFloat(valorzinho);
  //Conversão para reais
  var valorEmKelvin = valorEmCelsiusNumerico + 273.15;

  //PUXA o valor referência pelo id no HTML
  var elementoValorConvertido = document.getElementById("valorConvertido");
  //Variávem com a mensagem e valor convertido
  var valorConvertido =
    valorEmCelsiusNumerico + "°C são " + valorEmKelvin + "K";
  //EXIBIDOR que colocar dentro do elemento <></> no HTML
  elementoValorConvertido.innerHTML = valorConvertido;

  //Impressão
  console.log(valorConvertido);
}