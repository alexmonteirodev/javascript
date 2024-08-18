//Boolean: true & false
var possuiGraduacao = true // 1
var possuiDoutorado = false // 0

if (possuiGraduacao) {
    console.log('Possui graduação')
} else {
    console.log('Não possui graduação')
}

// Falsy (sempre se isso acontecer o resultado será false):
if(false)
if(0) // ou -0
if (NaN)
if(null)
if(undefined)
if('') // ou "" ou ``` - string sem caracter dentro

// Truthy (todo o resto é):
if(true)
if(1)
if(' ') //tem espaço que é considerado como um caracter
if('André')
if(-5)
if({}) // objeto

// Negação !
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false

// Operadores de comparação
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

// Operadores lógicos (OL):

//OL && = e (verifica se o primeiro elemento E o segundo são verdadeiros, caso um seja falso ele retorna o falso ou o último valor verdadeiro caso seja true)
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0 (0 é false)
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

if ((5-5) && (5+5)) {
    console.log('verdadeiros')
} else {
    console.log('falso')
}

//OL || = ou (verifica se uma expressão ou outra é verdadeira. Retorna o primeiro valor true que encontrar)
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato' (retornou gato porque o priemiro já é verdadeiro entao ele já retorna)
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

// Switch (para cada caso, executar uma ação pré-definida, é bom para coisas que não mudam como por exemplo cores, dias da semana...)

var corFavorita = 'Azul'
switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.')
        break;
    case 'Vermelho':
        console.log('Olhe para as rosas.')
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.')
        break;
    default: //default = else (caso nenhuma seja verdadeira, faça isso)
        break;
}

// EXERCÍCIOS----------------------------------------------------

// Verifique se a sua idade é maior do que a de algum parente. Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idadeAlex = 26
var idadeNatalia = +'25'

if (idadeAlex > idadeNatalia) {
    console.log('maior')
} else{
    console.log('menor')
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //false

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false - undefined
var dinheiroNaConta = 0; // true

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

console.log(`A China tem ${china-brasil} milhões de pessoas a mais que o Brasil.`)

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}