var num = [5,8,2,9,3]

num.push(1) //coloca o 1 em último lugar

num.sort() //organiza em ordem crescente o vetor

//num.push(1) Obs: se o push fosse depois do sort, ele organizaria o vetor em ordem e depois acrescentaria o 1: [ 2, 3, 5, 8, 9, 1 ]

console.log(num) //mostra os valores do vetor

console.log(`O vetor tem ${num.length} posições`) //mostra o numero de elementos dentro do vetor

console.log(num[0]) //mostra o valor que ocupa a posição 0 (pode usar em template string: `O valor é ${num[0]}`)