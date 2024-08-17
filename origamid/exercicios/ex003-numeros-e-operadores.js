//Operadores Aritiméticos
var soma = 100 + 50 // 150
var subtracao = 100 - 50 // 50
var multiplicacao = 100 * 2 // 200
var divisao = 100/2 // 50
var expoente = 2**4 // 16
var modulo = 14 % 5 // 4


// usando o + ou - antes de uma string o js tenta transformar essa string em numero:

//exemplo 1:
var idade = +'26'
console.log(typeof idade)

var idade2 = '26'
var number = Number(idade2)
console.log(typeof number)

//exemplo2:
var idade = '26'
var somaIdade = 5

console.log(idade + somaIdade) //somando como string
console.log(+ idade + somaIdade) //somando como número


// EXERCÍCIOS:-------------------------------------------

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
var res = 35
// Crie duas expressões que retornem NaN
var idade = '26'
var peso = '80kg' + 10
// Somar a string '200' com o número 50 e retornar 250
var valor = +'200' + 50
console.log(valor)
// Incremente o número 5 e retorne o seu valor incrementado
var num = 5
console.log(++num)
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var divs = + numero /2 +unidade
console.log(divs)
