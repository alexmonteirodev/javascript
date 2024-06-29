// POO - programação orientada a objeto (POO cria um molde de um objeto e depois você pode criar objetos que se adaptam a esse molde)

class person{ // essa classe vai imprimir um objeto
    constructor(firstName, lastName, age){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }

    getFullName(){ //isso é um método adicionado que pode ser adicionado a um objeto, que está dentro de uma classe
        console.log(`${this.firstName} ${this.lastName}`)
    }

    // speak(){ 
    //     console.log('Hello World!')
    // }
    static speak(){ //isso é um método estático(porque não usa nenhuma informação do objeto) (mesma coisa que acima mas sem usar o 'static', que possibilida acessar o objeto atraves do this.firstName por exemplo)
        console.log('Hello World!')
    }

}

const person1 = new person('Jane', 'Doe', 40)
console.log(person1)

const person2 = new person('joao','andrade',23)
console.log(person2)
person2.getFullName()

// person2.speak() // assim logaria o speak sem o static
person.speak() //assim se loga com static (diferença é que loga direto na classe person e não no objeto)