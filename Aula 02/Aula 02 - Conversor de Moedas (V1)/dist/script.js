function Converter() {
  //Pega o valor pelo id indicado no html que receberá alteração do js
  var valorElemento = document.getElementById("valor");
  //Puxa o que está inserido na input
  var valor = valorElemento.value;
  //Converte de string para decimal - por ser Float
  var valorEmDolarNumerico = parseFloat(valor);
  //Conversão para reais
  var valorEmReal = valorEmDolarNumerico * 5;

  //PUXA o valor referência pelo id no HTML
  var elementoValorConvertido = document.getElementById("valorConvertido");
  //Variávem com a mensagem e valor convertido
  var valorConvertido = "O valor é R$" + valorEmReal;
  //EXIBIDOR que colocar dentro do elemento <></> no HTML
  elementoValorConvertido.innerHTML = valorConvertido;

  //Impressão
  console.log(valorConvertido);
}