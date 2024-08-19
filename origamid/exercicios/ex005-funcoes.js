// obs: qualquer nome em js com um () do lado, é uma função e toda função recebe algo e retorna outro.

//exemplo 1:
function firstFunction() {
    console.log('função ativa')  
}
firstFunction() //() para executar a função

//exemplo 2:
function areaQuadrado(lado) {
    return lado*lado
}
console.log(areaQuadrado(5))

//exemplo 3 - parâmetro X argumento:

function imc(peso, altura) { // peso, altura são os parâmetros
    const imc = peso / (altura ** 2)
    return imc
}
imc(80, 1.80) //80 e 1.80 são os argumentos
console.log(imc(80,1.80))

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

//exemplo 5 - função callback (função que ocorre após algo que acontece, nesse caso, clicou (evento),acontece de escrever 'oi' no console):
addEventListener('click', function () {console.log('oi')}) //funcao está no lugar de um parâmetro e nesse caso se trata de uma função anônima pois não tem nome mas poderia ter.

// função anônima: são aquelas em que o nome não é definido, escritas como: 
// function(){}
//ou
// () => {}