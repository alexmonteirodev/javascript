                                            // Factory Function

    // Factory Function
        // São funções que retornam um objeto sem a necessidade de utilizarmos a palavra chave new. Possuem basicamente a mesma função que constructor functions / classes.
        //aqui o método é criado diretamente no objeto ,ou seja, faz parte da função e não do window por exemplo
        
        function createButton(text) {
            function element() {
                const buttonElement = document.createElement('button')
                buttonElement.innerText = text
                return buttonElement
            }
            return{
                text,   //text: text, - variavel com mesmo valor da chave, pode deixar só o text,
                element,
            }
        }
        const btnComprar = createButton('comprar')

        console.log(btnComprar)
        console.log(btnComprar.element())
//-----------------------------------------------------------------------------------------------------

    //Métodos / Variáveis privadas
        //Uma das vantagens é a possibilidade de criarmos métodos / variáveis privadas.
        //Obs: a pessoa que usar esse objeto não vai ter acesso ao nome completo. Ou seja, não vai ter como modificar nomecompleto no objeto depois mas não que seja algo para usar senha nem nada disso.

        function criarPessoa(nome, sobrenome) {
            const nomeCompleto = nome + ' ' + sobrenome
            const numeroSecreto = 9129310

            function andar() {
                return `${nomeCompleto} andou!`
            }

            function nadar() {
                return `${nomeCompleto} nadou!`
            }

            return{
                // nome: nome,
                // sobrenome: sobrenome,
                andar,
                nadar,
            }
        }
        
        const professor = criarPessoa('André', 'Rafael')

        professor.nome //undefined
        professor.andar() // André Rafael andou!
//-----------------------------------------------------------------------------------------------------

    //Ice Factory
        //Podemos impedir que os métodos e propriedades sejam modificados com Object.freeze(). Ideia inicial de Douglas Crockford.
        //ex: no exemplo acima se colocar por exemplo professor.nome = 'João', vai reescrever por cima e com o freeze, da pra congelar todo mundo que está no return para que a pessoa não possa reescrever por cima.

        function testeFreeze() {
            const nome = 'joao'

            function testou(nome) {
                return `${nome} testou`
            }

            return Object.freeze({
                nome,
                testou,
            })
        }
        const testeNome = testeFreeze()

        testeNome.nome // joao
        testeNome.nome = 'marcelo'
        testeNome.nome // marcelo - sem freeze
        testeNome.nome // joao - com freeze
//-----------------------------------------------------------------------------------------------------

    //Constructor Function / Factory Function
        //Uma das vantagens da Factory Function é a possibilidade de iniciarmos a mesma sem a utilização da palavra chave new. Também é possível fazer isso com uma Constructor Function.

        function Pessoa(nome) {
            if (!(this instanceof Pessoa)) // ou (!new.target) - verificação se o this é pessoa ou window, caso não seja pessoa, add o new na frente para que se torne pessoa, e assim não tem que add new antes de pessoa na const designer.
              return new Pessoa(nome);
            this.nome = nome;
          }
          
          Pessoa.prototype.andar = function() {
            return `${this.nome} andou`;
          }
          
          const designer = Pessoa('André');
          
          //ou seja, !(this instanceof Pessoa) serve para criar o constructor sem ter que passar o new na frente.


