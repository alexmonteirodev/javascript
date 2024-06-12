var num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(8)
console.log(`O valor 8 não está na posição ${pos}`)
//mostrando o valor -1 não faz sentido e por isso pode-se usar um if

if (pos !== -1) {
    console.log(`O valor está na posição ${pos}`)
} else {
    console.log(`Valor não encontrado`)
}