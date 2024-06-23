const person = {
    firstName: 'Alex',
    lastName: 'Monteiro',
    age: 26,
    hobbies: ['academia', 'ler', 'videogame'], //array/lista dentro do objeto
    dog: { //objeto dentro de objeto
        name: 'Simba',
        age: 4
    }
}
console.log(person)

//duas formas de acessar o objeto:

// primeira (forma normal):

// const firstName = person.firstName
// const lastName = person.lastname
// const age = person.age
// const hobbies = person.hobbies
const read = person.hobbies[1]

//Segunda (usando o destructuring):

const {firstName: primeironome, lastName, age, hobbies, dog} = person //pode renomear tbm usando os dois pontos como no firstname



console.log(primeironome)
console.log(lastName)
console.log(age)
console.log(hobbies)
console.log(read)


// person.dog = 'Simba'    pode add uma propriedade ao objeto dessa forma
// console.log(person)

console.log(person.dog.name)

