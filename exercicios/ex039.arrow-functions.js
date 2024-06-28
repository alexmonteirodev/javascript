function sum(a, b = 0) { //b = 0 pra que caso ele não receba nada, o valor dele vai ser 0
    return a + b
}

var sumValue = sum(2,2)
console.log(sumValue)


// var arrowfunction = (a,b) => {
//     return a+b
// }

// mesma coisa que acima (arrow é um jeito de simplificar uma function quando ela só tem uma linha em geral) obs: repare que a arrowfunction esta dentro de uma variavel
var arrowfunction = (a,b) => a+b

var sumarrow = arrowfunction(5,5)
console.log(sumarrow)