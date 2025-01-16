
                                            // Classes - get e set

    // Get e Set
        //Podemos definir comportamentos diferentes de get e set para um método.

        //exemplo usando um objeto:

        const button = {
          get element(){
            return this._element    // o _ serve para dizer que se trata de uma propriedade privada do objeto, ou seja, não terá acesso a ela fora do objeto. Isso é só uma 'convenção'/boas práticas, para o js ele não lê dessa forma ou seja, colocar _element daria na mesma que colocar só element.
          },
          set element(tipo){ 
            this._element = document.createElement(tipo)
          }
        }
        
        button.element = 'button' //set obs: quando põe o = é porque está setando a propriedade. (quando atribui valor à ela)
        button.element //get (<button></button>) obs: get é quando acessa o elemento dessa forma: button.element (quando chama o valor)


        //exemplo 2 (mais simples):

        const btn ={
          
          set tamanho(numero){
            this._numero = numero //seta o valor (atribui)
          },
          get tamanho(){
            return this._numero //chama o valor
          }
        }

        //exemplo 3:

        const botao = {
          set value(valor){
            this._valor = valor
          },
          get value(){
            return this._valor || 100 // || 100 significa que caso não seja setado/atribuido um valor à value, o que seria undefined, o || passa para o proximo true que é 100, logo, teriamos que 100 seria um valor pré definido mas caso a pessoa queira editar o valor, ela pode.
          }
        }

        botao.value // 100 (primeiro acesso ao valor/get retorna valor pré definido 100)
        botao.value = 200 // 200 (seta valor ao value)
        botao.value // 200 (retorna primeiro true do ||, ou seja agora não é mais undefined, logo, é 200 que é um numero então da true o js retorna 200)

//-----------------------------------------------------------------------------------------------------

      // valor estático
        //Se definirmos apenas o get de um método, teremos então um valor estático que não será possível mudarmos.

        const matematica = {
          get PI(){
            return 3.14
          }
        }
        matematica.PI //3.14
        matematica.PI = 2 //2
        matematica.PI //3.14
//-----------------------------------------------------------------------------------------------------
      // Set
        //Eu posso ter um método com set apenas, que modifique outras propriedades do meu objeto.

        const frutas = {
          lista: [],
          set nova(fruta){
            this.lista.push(fruta)
          },
        }
        frutas.nova = 'Banana'
        frutas.nova = 'Morango'
        frutas.lista // ['Banana','Morango']
//-----------------------------------------------------------------------------------------------------

      // Class
        //Assim como um objeto, as classes podem ter métodos de get e set. (pq a class retorna um objeto)

        class button1 {
          constructor(text, color) {
            this.text = text
            this.color = color
          }

          get element(){
            const buttonElement = document.createElement('button')
            buttonElement.innerText = this.text
            buttonElement.style.color = this.color
            return buttonElement
          }
        }

        const blueButton = new button1('comprar', 'blue')
        blueButton.element // <button style="color: blue;">comprar</button>
//-----------------------------------------------------------------------------------------------------

      //Set e Class
        //Com o set podemos modificar apenas parte do elemento de get. É comum definirmos variáveis privadas, utilizando o underscore _privada.

        // O button1 só possui get, ou seja, tem um valor estático que é o 'button', mas imagine que eu queira criar ao em vez de um botao, um a, da pra fazer isso usando o set e dessa forma daria pra adicionar ao element a opção de setar qual elemento criar:

        class button2 {
          constructor(text, color) {
            this.text = text
            this.color = color
          }

          get element(){
            const type = this._elementType || 'button' //define o button como padrão
            const buttonElement = document.createElement(type) //opção de setar o type
            buttonElement.innerText = this.text
            buttonElement.style.color = this.color
            return buttonElement
          }

          set element(type){
            this._elementType = type
          }
        }
        const aButton = new button2('comprar', 'red')

        aButton.element // <button style="color: red;">comprar</button>
        aButton.element = 'a'
        aButton.element //<a style="color: red;">comprar</a>