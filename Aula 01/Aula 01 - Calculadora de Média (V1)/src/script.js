//Adição de variáveis
var nome = "Jana"

var notaPrimeiroBimestre = 7
var notaSegundoBimestre = 9.5
var notaTerceiroBimestre = 8.9
var notaQuartoBimestre = 8

var media = ((notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4).toFixed(1)

//Para imprimir no console
console.log("Olá, " + nome + "! Seja bem-vinda novamente!")

console.log("Nota 1° Bimestre: " + notaPrimeiroBimestre + ", nota 2° Bimestre: " + notaSegundoBimestre + ", nota 3° Bimestre: " + notaTerceiroBimestre + " e nota 4° Bimestre: " + notaQuartoBimestre)

console.log("Sua média é de: " + media)

//Conversor dólar para reais
var valorDolar = 1
var valorReal = 5.21

var valorConversao = (35 * 5.21).toFixed(0)

console.log ("O dolar hoje vale R$" + valorReal)
console.log ("Se fossemos importar hoje cinco camisas que custam $35, sairiam aproximadamente R$" + valorConversao)

