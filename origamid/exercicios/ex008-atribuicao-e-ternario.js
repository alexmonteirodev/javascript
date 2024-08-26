// Operadores de Atribuição:
var x = 5;
var y = 10;
// x += y; // x = x + y (15)
// x -= y; // x = x - y (-5)
// x *= y; // x = x * y (50)
// x /= y; // x = x / y (0.5)
// x %= y; // x = x % y (0)
// x **= y; // x = x ** y (9765625)

//-------------------------------------------------------------------------------------------------------

// Operador Ternári: (abriviação de condicionais com if e else)
var podeBeber
var idade = 17
podeBeber = (idade >= 18) ? 'true - Pode beber' : 'false - Não pode beber' //bom botar parenteses para isolar e ficar mais visivel
console.log(podeBeber)

//-------------------------------------------------------------------------------------------------------

// EXERCÍCIOS:

// Some 500 ao valor de x abaixo,atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500 // não escrever var antes, se não da erro
console.log(scroll)

// Atribua true para a variável darCredito, caso o cliente possua carro e casa. E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;
// darCredito = (possuiCarro === true && possuiCasa === true) ? true:false
// darCredito = (!!possuiCarro && !!possuiCasa) ? true:false //funciona mas o mais indicado é o abaixo
darCredito = (possuiCarro && possuiCasa) //possuiCarro e possuiCasa já são valores booleanos então não tem porque verificá-los
console.log(darCredito)

//ATENÇÃO: a var possuiCarro já é um valor booleano porque foi atribuido true a ela e não porque uma variavel possui um valor booleano true:
var teste //undefined
console.log(!!teste)
