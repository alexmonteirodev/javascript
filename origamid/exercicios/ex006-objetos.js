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

