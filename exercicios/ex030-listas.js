const names = ['rafael', 'joão', 'maria']
const joao = names[1]
console.log('joao')

names.push('pedro') //adiciona nome em ultimo lugar da lista
console.log(names)

names.unshift('ronaldo') //adiciona nome no primeiro lugar (console.log(names[0]))
console.log(names)

names.pop() //remove o ultimo nome da lista
console.log(names)

names[2] = 'marcelo' //reasinalar um nome (joao -> marcelo)
console.log(names)

console.log(names.indexOf('rafael')) //mostra o index (posição) do rafael

const sortednames = names.sort() //organiza em forma crescente e nesse casoe  ordem alfabetica
console.log(sortednames)

console.log(names.length)


// obs: a posição de um elemento da lista se chama index, logo, ao dizer: const names = ['rafael', 'joão', 'maria'], o index do rafael é 0.