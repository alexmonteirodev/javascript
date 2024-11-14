// Objetos são um conjunto de variáveis e funções, que são chamadas de propriedades (variáveis) e métodos (funções). As propriedades de um objeto podem ser tanto variáveis (valores) quanto funções (métodos). Os objetos servem para organizar o código em pequenas partes reutilizáveis (quanto menor o código, melhor).

// Propriedades: São os membros de um objeto, e podem armazenar qualquer tipo de valor, incluindo variáveis (como strings, números, objetos) e funções.

// Métodos: Quando uma propriedade de um objeto é uma função, essa propriedade é chamada de método.

var pessoa = { //objeto
    nome: 'André', //propriedade (variável)
    idade: 28, //propriedade (variável)
    profissao: 'Designer', //propriedade (variável)
    possuiFaculdade: true, //propriedade (variável)
}
pessoa.nome //André
pessoa.altura = 'alto' //adicionando propriedade ao objeto pessoa
console.log(pessoa)
// repare que objeto está em branco, propriedade em cinza e métodos em amarelo na legenda
//-------------------------------------------------------------------------------------------------------
//Métodos (É uma propriedade que possui uma função no local do seu valor):
var quadrado = { //objeto
    lados: 4, //propriedade (variável)
    area: function (lado) { //propriedade (método)
        return lado*lado
    },
    perimetro: function (lado) {
        return this.lados * lado //this é o objeto, escrever this.lados = quadrado.lados
    },
}
quadrado.lados // 4
quadrado.area(5) // 25
quadrado.perimetro(5) // 20
//-------------------------------------------------------------------------------------------------------
//Métodos - abreviações:
// Abreviação de area: function(){} para area(){} no ES6+
var triangulo ={
    lados: 3,
    area(lado){ //mesma coisa que a função de baixo
        return this.lados*lado
    },
    // area: function (lado) {
    //     return this.lados * lado
    // }
}
triangulo.area(3) // 9
triangulo.area // se escrever só o nome da função, o console vai retornar a função inteira (testar no html), para executar a função lembrar de usar os ()
//-------------------------------------------------------------------------------------------------------
// objetos nativos de JS:

// Existem objetos já pré definidos no JS, chamados de nativos que podemos acessar, é o caso por exemplo do console.log(), no caso, console é um objeto nativo e o log() é uma função, ou seja, um método já criado pelo JS e essa função resulta em mostrar o que você quer no console. (sempre que tem . o que vem antes é um objeto)
//existem outros objetos nativos como por exemplo:

Math.PI //mostra o valor de PI (3,14) - vscode mostra caixa azul por ser uma propriedade (variavel)
Math.random // mostra um valor aleatório de 0 a 1 - vscode mostra uma caixa roxa por ser um método/função
console.table //organiza o objeto em tabela, só visualmente, não altera o código (exemplo no html)

//exemplo:
var pi = Math.PI
console.log(pi)
//-------------------------------------------------------------------------------------------------------
// Dot Notation Get & Set:
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E'
}

// GET (acesse propriedades de um objeto usando .):
var bg = menu.backgroundColor
console.log(bg)

//SET (quando substitui o valor de uma propriedade utilizando .)
menu.backgroundColor = '#000'

// Adicionando valor ao objeto:
menu.color = 'red'
console.log(menu)
//-------------------------------------------------------------------------------------------------------
// Escopo:
var height = 200
var menu = {
    width: 900,
    height: 100,
    backgroundColor: 'red',
    metadeHeight(){
        return this.height /2 //this.height = menu.height. Obs: se não tivesse o this, ele ia puxar o height da variavel acima
    },
}
console.log(menu.metadeHeight())
//-------------------------------------------------------------------------------------------------------
// Protótipo e Herança:

// ao criar um objeto você utiliza uma funcionalidade do JS/uma função de JS que se chama Object e daí se da a possibilidade de criar um objeto, ou seja, através dessa funcionalidade pre definida e assim como essa funcionalidade, existem também métodos já pré definidos para um Object e ao criar um objeto você herda tbm esses métodos/funções do object ('elemento pai') para seu objeto ('Elemento filho') e saber bem essas propriedades e métodos pre definidos, é saber bem JS.

var menu ={
    width: 800,
}
menu.hasOwnProperty('width') // true (verifica se existe x propriedade no objeto)
menu.hasOwnProperty('height') // false

'Alex'.length // diz quantos caracteres tem a string
console.log('Alex'.length)
//-------------------------------------------------------------------------------------------------------

// EXERCÍCIOS:

// Crie um objeto com os seus dados pessoais. Deve possuir pelo menos duas propriedades nome e sobrenome
var pessoa ={
    nome: 'ALex',
    sobrenome: 'Monteiro',
    aprendendoJs(){
        return 'Estou aprendendo JS!'
    },
}

// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.nomeCompleto = function name(params) {
    return `Meu nome completo é ${this.nome} ${pessoa.sobrenome}!`
}
console.log(pessoa.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  carro.preco = 3000 //você setou um novo valor (set)
  console.log(carro)
  // Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
  var cachorro={
    raca: 'Labrador',
    cor: 'black',
    idade: '10 anos',
    latir(pessoa){
        if (pessoa === 'homem') {
            return 'Au Au'
        } else {
            return ''
        }
        
    },
  }
  console.log(cachorro.latir('homem'))
//-------------------------------------------------------------------------------------------------------
// Tudo é objeto: strings, números, booleans, objetos e mais, possuem propriedades e métodos. Por isso são objetos.
var nome = 'André'

nome.length // 5
nome.charAt(1) // 'n' mostra o caracter daquela posição
nome.replace('ré', 'rei') // 'Andrei' essa função não altera a variável, para isso, crie outra variavel ou adicione essa função diretamente nela - var nomeMinusculo = nome.toLowerCase()

//numeros:
var altura = 1.8

altura.toString() // '1.8' transforma para string
altura.toFixed() // '2' arredonda

//funções:
function areaQuadrado(lado) {
    return lado*lado    
}
areaQuadrado.toString() 
// function areaQuadrado(lado) {
//     return lado*lado    
// }
areaQuadrado.length // 1 length da função retorna quantos paramentros são usados nela nesse caso 1 (lado)
addEventListener.length // nesse caso seriam o resultado seria 2, um do evento e outro do nome

// EXERCÍCIOS PART2:

// nomeie 3 propriedades ou métodos de strings
var s = 'nome'
s.includes()
s.length
s.toLocaleLowerCase()
// nomeie 5 propriedades ou métodos de elementos do DOM
document.addEventListener()
document.getElementById()
document.querySelector()
//innerHtml
// id - retorna o id da tag html
// busque na web um objeto (método) capaz de interagir com o clipboard, clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
read()


/*
            //obs importante:

                //da para acessar propriedades de um objeto com o []:

                ex:

                const handleStyle = {
                    backgroundColor: 'azul'
                }
                
                handleStyle.backgroundColor // retorna = 'azul'

                handleStyle['backgroundColor'] //retorna = 'azul'
*/