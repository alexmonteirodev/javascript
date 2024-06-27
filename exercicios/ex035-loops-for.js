// for (let index = 0; index <= 10; index++) {
//     console.log(index)    
// }


var carros = ['ferrari','tesla','mercedes']


//for
for (let index = 0; index < carros.length; index++) {
    console.log(carros[index])
}

console.log(carros[0])

// for of
for(let car of carros){  //leia-se: para cada carro na lista de carros, logue carro
    console.log(car)
}


// for each
carros.forEach(function(carro, index) { //usando o for each, tem-se acesso a index, por meio do segundo parametro
    console.log(index)
    console.log(carro)
})

// for in (se usa geralmente em objetos) obs: o JS não trabalha tao bem com for in como com os outros loops
const person = {
    name: 'joao',
    age: '21'
}
for (const propriedade in person) {
    console.log(person[propriedade])
}
