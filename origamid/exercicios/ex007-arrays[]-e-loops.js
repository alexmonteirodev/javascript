// ARRAYS:

// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
var videoGames = ['Switch', 'PS4', 'XBox'] //cada item/videogame é um index(index = posição)

//acesse um elemento do array usando o [n]:
videoGames[0] // Switch
videoGames[2] // XBox

videoGames.push('3DS') //adicionar um item no final do array
videoGames.pop() // remove o último item e retorna ele
console.log(videoGames.length)

//-------------------------------------------------------------------------------------------------------

// LOOPS (faz algo repetidamente até que uma condição seja atingida):

// FOR:
for (let index = 0; index <= 10; index++) { // for (início; condição; incremento;)
   console.log(numero)
}

// WHILE:
var i = 0
while (i<10) {
    console.log(i)
    i++
}

// FOREACH: (interage com cada item do array sem ter que fazer a lógica como no for)
var frutas = ['Banana', 'Maçã', 'Pera', 'Abacaxi', 'Uva']
frutas.forEach(function (item, index, array) {
    console.log(item, index, array)
})

//exemplo (olhar na pasta html e executar no console):
var videoGames = ['Switch', 'PS4', 'XBox']
for (let index = 0; index < array.length; index++) {
    console.log(videoGames[index]); 
}
/*
    também existem o for of e o for in.

        Diferença entre for of e for in:

        // for of: retorna valor do elemento

            let word = "Hello";
            for (let char of word) {
                console.log(char); // H, e, l, l, o
            }
                
        // for in: retorna índices (arrays) ou chaves (objetos)

            let nums = [10, 20, 30];
            for (let i in nums) {
                console.log(i, nums[i]); // Índices e valores: 0 10, 1 20, 2 30
            }
*/
//-------------------------------------------------------------------------------------------------------

//EXERCÍCIOS:

// Crie uma array com os anos que o Brasil ganhou a copa: 1959, 1962, 1970, 1994, 2002

var anosDaCopa = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (let index = 0; index < anosDaCopa.length; index++) {
    console.log(`O Brasil ganhou a copa de ${anosDaCopa[index]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index])
    if (frutas[index] === 'Pera') {
        break
    }
}
// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.

var ultimoItemFrutas = frutas.length // length = 5 elementos mas o último elemtno do array é o 4 
console.log(frutas[frutas.length-1])// portanto total de elemento -1 = ao ultimo elemento

var res = frutas[frutas.length-1]
