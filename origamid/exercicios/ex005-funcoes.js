// obs: qualquer nome em js com um () do lado, é uma função e toda função recebe algo e retorna outro.

//exemplo 1:
function firstFunction() {
    console.log('função ativa')  
}
firstFunction() //() para executar a função
//-------------------------------------------------------------------------------------------------------
//exemplo 2:
function areaQuadrado(lado) {
    return lado*lado
}
console.log(areaQuadrado(5))
//-------------------------------------------------------------------------------------------------------
//exemplo 3 - parâmetro X argumento:

function imc(peso, altura) { // peso, altura são os -parâmetros-
    const imc = peso / (altura ** 2)
    return imc //se no lugar do return tivesse um console.log, ao passar os -argumentos-, o valor já sairia direto, porém sairia um undefined junto, por isso, usar return
}
imc(80, 1.80) //80 e 1.80 são os argumentos
console.log(imc(80,1.80))
//-------------------------------------------------------------------------------------------------------
//exemplo 4:
function corFavorita(cor) {
    if (cor === 'Azul') {
        return 'Você gosta do céu'
    } else if (cor === 'Verde') {
        return 'Você gosta de mato'
    } else {
        return 'Você não gosta de nada'
    }
}
console.log(corFavorita('Azul'))
//-------------------------------------------------------------------------------------------------------
//exemplo 5: função callback (função que ocorre após algo que acontece, nesse caso, clicou (evento),acontece de escrever 'oi' no console):
addEventListener('click', function () {console.log('oi')}) //funcao está no lugar de um parâmetro e nesse caso se trata de uma função anônima pois não tem nome mas poderia ter.

// função anônima: são aquelas em que o nome não é definido, escritas como: 
// function(){}
//ou
// () => {}
//-------------------------------------------------------------------------------------------------------
//exemplo 6:
function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Por favor, preencha um número' //quando bate no return a função já retorna e não le mais nada, é como se fosse o break do switch
    } else if (idade >= 60) {
        return true
    } else {
        return false
    }
}

terceiraIdade(60)
//-------------------------------------------------------------------------------------------------------
//exemplo 7 - escopo:
var totalPaises = 193
function faltaVisitar(paisesVisitados) {
    // var totalPaises = 193 - se a var estiver dentro da função ela não funciona fora.
    return `Falta visitar ${totalPaises - paisesVisitados} países.`
}
faltaVisitar(20)
//-------------------------------------------------------------------------------------------------------
//exemplo 8 - elementos pai: (js se le de cima para baixo)
var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28; //repare que a var idade foi reassinalada abaixo e portanto essa de 28 já não está mais ativa e o vscode ainda pinta de cinza
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro
//-------------------------------------------------------------------------------------------------------

// EXERCÍCIOS:

// Crie uma função para verificar se um valor é Truthy - ACERTOU MIZERAVI
function verificaTruthy(params) {
    return !!params
}

// Crie uma função matemática que retorne o perímetro de um quadrado - lembrando: perímetro é a soma dos quatro lados do quadrado - ACERTOU MIZERAVI
function somaPerimetro(lados) {
    return soma = lados*4
}
console.log(somaPerimetro(2))
// Crie uma função que retorne o seu nome completo, ela deve possuir os parâmetros: nome e sobrenome - ACERTOU MIZERAVI
function completeName(name, surname) {
    return name + ' ' + surname
}
completeName('Alex','Monteiro')
// Crie uma função que verifica se um número é par
function verificadorPairNumbers(number) {
    var calc = number%2
    if (calc === 0) {
        return `O número ${number} é par.`
    } else {
        return `O número ${number} é ímpar.`
    }
}
verificadorPairNumbers(6)
// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function typeValue(params) {
    return typeof params
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function name(params) {
    return console.log('Alex')
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
  