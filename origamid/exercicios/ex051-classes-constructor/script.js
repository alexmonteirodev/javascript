
                                            // Classes

    // repassando Constructor Function
        //Funções responsáveis pela criação de objetos. O conceito de uma função construtora de objetos é implementado em outras linguagens como Classes.

        function Button(text, background) {
            this.text = text
            this.background = background
        }
        
        Button.prototype.element = function() {
            const buttonElement = document.createElement('button')
            buttonElement.innerText = this.text //porque não colocar somente text? porque se não daria erro pq só o this fura o escopo e busca a info da f Button
            buttonElement.style.background = this.background
            return buttonElement
        }

        const blueButton = new Button('comprar', 'blue')
        console.log(blueButton.element())

//-----------------------------------------------------------------------------------------------------

    // Class
        //O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras. Agora podemos utilizar a palavra chave class. É considerada syntactical sugar, pois por baixo dos panos continua utilizado o sistema de protótipos de uma função construtora para criar a classe.

        // syntactical sugar = forma enxuta, escreve diferente mas o que acontece por trás é a mesma coisa.

        //faz a mesma coisa que uma função construtora porém com uma sintaxe específica, ou seja, ao invés de fazer o "macete" de criar uma function x() e depois colocar no prototype os métodos que você quer e usar o new x, agora basta usar o class e o js já sabe que você quer mexer com o constructor:

        class Button2 {
            constructor(text, background) {
                this.text = text
                this.background = background
            }
            element(){
                const button2Element = document.createElement('button')
                button2Element.innerText = this.text
                button2Element.style.background = this.background
                return button2Element
            }
        }

        const blueButton2 = new Button2('comprar 2', 'blue')
        console.log(blueButton2.element())

//-----------------------------------------------------------------------------------------------------

    // Class VS Constructo Function:

        // Class
        class x {
            constructor(propriedade) {
              this.propriedade = propriedade;
            }
            metodo1() {}
            metodo2() {}
          }
          
        // Constructor Function

        function x2(propriedade) {
            this.propriedade = propriedade;
          }
          Button.prototype.metodo1 = function() {}
          Button.prototype.metodo2 = function() {}

//-----------------------------------------------------------------------------------------------------

    //Constructor
        //O método constructor(args) {} é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.

          class Button3 {
            constructor(text, background, color) { //pode passar quantos parametros quiser
              this.text = text;
              this.background = background;
              this.color = color;
              //return this     //por padrão o constructor retorna o this, mas da pra alterar isso..
              return this.element() // alterando o return
            }
            element(){
                const button3Element = document.createElement('button')
                button3Element.innerText = this.text
                button3Element.style.background = this.background
                return button3Element
            }
          }
          
          const blueButton3 = new Button3('Clique 3', 'blue', 'white');
          console.log(blueButton3)
          // Button {text: 'Clique', background: 'blue', color: 'white'} // return this
          //<button style="background: blue;">Clique</button>            // return this.element()


          //obs: não é indicado a fazer isso porque, no final, se perde o acesso ao objeto blueButton3, ou seja, agora ele só retorna o element e não pode retornar outra coisa porque eu já pré defini no constructor. agora por exemplo só daria pra acessar metodo dentro do element porque é como se blueButton3 fosse = a blueButton3.element().alguma coisa.

          //apenas não faça isso, só pra saber que o return this é default.
//-----------------------------------------------------------------------------------------------------

    //This
        //Assim como em uma função construtora, this faz referência ao objeto criado com new. Você pode acessar as propriedades e métodos da classe utilizando o this.

        class Button4 {
            constructor(text, background, color) { //pode passar quantos parametros quiser
              this.text = text;
              this.background = background;
              this.color = color;
              return this //por padrão o constructor retorna o this.
            }
            element(){
                const button4Element = document.createElement('button')
                button4Element.innerText = this.text
                button4Element.style.background = this.background
                button4Element.style.color = this.color
                return button4Element
            }
            appendTo(target){
                const targetElement = document.querySelector(target)
                targetElement.appendChild(this.element())
                return targetElement
            }
          }
          
          const blueButton4 = new Button4('Clique 4', 'blue', 'white');
          console.log(blueButton4)
          console.log(blueButton4.appendTo('body'))
//-----------------------------------------------------------------------------------------------------
        
    //Propriedades
        //Podemos passar qualquer valor dentro de uma propriedade. string, objeto....

        class Button5 {
            constructor(options) {
              this.options = options;
            }
          }
          
          const blueOptions = {
            backgroundColor: 'blue',
            color: 'white',
            text: 'Clique',
            borderRadius: '4px',
          }
          
          const blueButton5 = new Button5(blueOptions);
          blueButton5.options;
          console.log(blueButton5)
          
          //obs: o objeto aqui serviria para ao invés de ter que criar uma por uma, criar um objeto com tudo dentro

          //poderia passar assim também:
          /*
        class Button5 {
            constructor(options) {
              this.options = options;
            }
          }
          
          const blueButton5 = new Button5({
            backgroundColor: 'blue',
            color: 'white',
            text: 'Clique',
            borderRadius: '4px',
          })
          */
//-----------------------------------------------------------------------------------------------------

    //Static vs Prototype
        //Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma. Porém podemos criar métodos diretamente na classe utilizando a palavra chave static. Assim como [].map() é um método de uma array e Array.from() é um método do construtor Array.

        // static vai criar um método dentro da função construtora, ou seja, não vai ser que nem antes (um método do protótipo)

        class Button6 {
            constructor(text) {
              this.text = text;
            }
            static create(background) {
              const elementButton = document.createElement('button');
              elementButton.style.background = background;
              elementButton.innerText = 'Clique 6';
              return elementButton;
            }
          }
          
          const blueButton6 = Button6.create('blue');
          console.log(Button6.prototype)
//-----------------------------------------------------------------------------------------------------

    //Static
        //Você pode utilizar um método static para retornar a própria classe com propriedades já pré definidas.

        //por exemplo: vamos supor que algo é recorrente e a pessoa toda vez que for criar um botão, quer que o background seja azul, da pra retornar a class que cria o botão azul direto nela e depois só acrescentar o que quiser.

        class Button7 {
            constructor(text, background) {
              this.text = text;
              this.background = background;
            }
            element() {
              const elementButton = document.createElement('button');
              elementButton.innerText = this.text;
              elementButton.style.background = this.background;
              return elementButton
            }
            static createBlue(text) {
              return new Button7(text, 'blue');
            }
          }
          
          const blueButton7 = Button7.createBlue('Comprar');
          console.log(blueButton7)
          