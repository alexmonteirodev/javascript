// herança em POO é fazer uma classe dentro de outra fazendo com que a class filha tenha acesso aos métodos que a classe pai tenha
class animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`${this.name} make some noise!`)
    }
}

class dog extends animal{ //herdar o objeto da classe anima porque todo cachorro é um animal
    constructor(name){ //(name) porque tem que ser os mesmos parametros que a classe animal recebe
        super(name)
    }
}

const animal1 = new animal ('Simba')
animal1.speak()

const dog1 = new dog('Bob')
dog1.speak()

