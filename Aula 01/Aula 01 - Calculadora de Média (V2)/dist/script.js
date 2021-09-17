//Variáveis da Dev
var nomeDev = "Janaina"
console.log("Olá, Dev. Bem vindo! Sou a " + nomeDev + ".")

var notaDoPrimeiroBimestreDev = 10
var notaDoSegundoBimestreDev = 8
var notaDoTerceiroBimestreDev = 6
var notaDoQuartoBimestreDev = 8

//Variável pra a soma das notas da Dev
var notaMedia = (notaDoPrimeiroBimestreDev + notaDoSegundoBimestreDev + notaDoTerceiroBimestreDev + notaDoQuartoBimestreDev) / 4

//Variável que arredonda valores quebrados da nota da Dev
var notaFinal = notaMedia.toFixed(2);

if (notaFinal < 5){
  console.log("Minha nota final foi: " + notaFinal + ", fui reprovada.") 
} 

else
  {
    console.log("Minha nota final foi: " + notaFinal + ", fui aprovada!")
  }

function calcularMediaUser() {
 
var n1 = new Number(document.getElementById("n1B").value); 
var n2 = new Number(document.getElementById("n2B").value);
var n3 = new Number(document.getElementById("n3B").value);
var n4 = new Number(document.getElementById("n4B").value);
  
var result = ((n1 + n2 + n3 + n4) / 4).toFixed(2);
  
  if(result >= 6){
    resultado.innerHTML = "Aprovado, parabéns! Sua média: " + result ;
    document.getElementById("resultado").style.color = '#0F1830';
  }else{
    resultado.innerHTML = ( "Reprovado, estude mais na próxima! Sua édia: " + result)
    document.getElementById("resultado").style.color = '#0F1830';
  }
 
}