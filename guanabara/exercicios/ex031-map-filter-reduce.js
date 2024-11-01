var numbers = [1, 2, 3, 4, 5]
console.log(numbers)


// MAP: executa uma função em cada item e retorna uma nova lista

var numbersMultipliedByTwo = numbers.map(function (multiplicar) {
    return multiplicar*2
})
console.log(`exemplo de MAP: ${numbersMultipliedByTwo}`)


// FILTER: filtra a lista de baseado nos critérios que você estabelecer

var evennumbers = numbers.filter(function (even) {
    return even % 2 == 0    
})
console.log(`exemplo de FILTER: ${evennumbers}`)


// REDUCE: reduzir todos os valores para um só valor

var soma = numbers.reduce(function (numbers, accumulator) {
    return accumulator + numbers //obs: accumulator é um valor inicical que definimos para ser o 0 e ser mantido, logo, acc = 0 + 1...acc = 1+2...acc = 3...
    
})
console.log(soma)