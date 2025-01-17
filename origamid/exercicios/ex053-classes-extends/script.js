
                                            // Subclasses de class - extends e super

    // Subclasses
        //É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo.

    //Extends
        // O extend faz com que dê para acessar um método/herdar de uma classe.
        // por exemplo, da pra criar uma class genérica com métodos de automóveis como motor e depois na hora de criar uma classe especifica para carro, da pra herdar através do extend da class motor.

        class Veiculo {
            constructor(rodas) {
                this.rodas = rodas
            }
            acelerar(){
                console.log('acelerou')
            }
        }

        class Moto extends Veiculo {
            empinar(){
                console.log(`Empinou com ${this.rodas} rodas!`)
            }
        }

        const honda = new Moto(2)
        honda.empinar() // Empinou com 2 rodas!
        honda.acelerar() // acelerou  (da undefined porque não tem o return)
        //obs: a moto pode empinar mas o veiculo não. Caso crie um método acelerar dentro da class moto e use o moto.acelerar() o js vai puxar o método de moto mas o acelerar do veiculo continua funcionando porém dentro de proto (prototipo)
//-----------------------------------------------------------------------------------------------------
    
    // Super
        //É possível utilizar a palavra chave super para falarmos com a classe que pai e acessarmos os seus métodos e propriedades.

        class Veiculo2 {
            constructor(rodas) {
                this.rodas = rodas
            }
            acelerar(){
                console.log('acelerou')
            }
        }

        class Moto2 extends Veiculo2 {
            constructor(rodas,capacete){
                super(rodas) //puxando parametro de constructor de veiculo2
                this.capacete = capacete
            }
            acelerar(){
                super.acelerar() //puxando método de veiculo2
                console.log('Acelerou rápido')
            }
            empinar(){
                console.log(`Empinou com ${this.rodas} rodas!`)
            }
        }

        const honda2 = new Moto2(2, true)
        console.log(honda2)
        honda2.empinar() // Empinou com 2 rodas!
        honda2.acelerar()