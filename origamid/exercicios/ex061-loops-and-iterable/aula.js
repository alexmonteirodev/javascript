                                            // Loops e Iterable


    //Iterable
        //São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like e outros. Ou seja, pra ser um item iterável, tem que ter o symbol.iterator.

        const frutas = ['Banana', 'Morango', 'Uva'];
        const frase = 'Isso é JavaScript';

        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(({headers}) => console.log(headers));

        console.log(frase.__proto__) // String.prototype
//-----------------------------------------------------------------------------------------------------
    
    // for...of
      //É possível fazemos um loop por cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos.

      //exemplos de itens que são iteráveis:

      //exemplo 1:
        //const frutas = ['Banana', 'Morango', 'Uva']; - Array

        for (const fruta of frutas) {
          console.log(fruta)
        }

      //exemplo 2:
        //const frase = 'Isso é JavaScript'; - String
        
        for (const char of frase) { // char = caracter em ingles
          console.log(char)
        }

      //exemplo 3:
        const buttons = document.querySelectorAll('button')

        for (const btn of buttons) {
          btn.style.color = 'blue'
        }

        console.log(buttons) //return nodeList
        console.log(...buttons) //return cada botão

      // exemplo 4: Apenas Iteráveis
        //O for...of não irá funcionar em um objeto comum que não seja iterável:

        const carro = { //funcionaria com for in
          marca: 'Honda',
          ano: 2018,
        }
        
        // Erro, não é Iterável
        // for(const propriedade of carro) {
        //   console.log(propriedade);
        // }
//-----------------------------------------------------------------------------------------------------

    //for...in
        //Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.

        const moto = {
          marca: 'Kawasaki',
          cc: 400,
        } 

        Object.defineProperties(moto, {
          rodas: {
            value: 2,
            enumerable: true //controla se mostra no for in ou não
          }
        })

        console.log(moto)

        for (const key in moto) {
          console.log(key) //marca, cc
          console.log(moto[key]) //acessando valores das propriedades: moto[key] = moto.key
        }

//-----------------------------------------------------------------------------------------------------

    // Diferença entre: for of X for in
        // for of funciona com itens iteráveis, que possuem o Symbol.iterator e o for in faz iteração em um objeto qualquer com cada prorpriedade enumerável desse objeto.
        // Basicamente o for of pega o valor e o for in pega a chave.
        //exemplo:

          const nome = 'Andre'

          for (const char of nome) {
            console.log(char) // 'A''n''d''r''e'
          }

          for (const char in nome) {
            console.log(char) // 0 1 2 3 4
          }
//-----------------------------------------------------------------------------------------------------

    // Arrays e for...in
        //Uma Array é um objeto, porém a chave de cada valor é igual ao seu index.

        const frutas2 = ['Banana', 'Morango', 'Uva'];

        for(const index in frutas2) {
          console.log(index); // 0 1 2
        }
        
        for(const index in frutas2) {
          console.log(frutas[index]); // banana morango uva
        }
//-----------------------------------------------------------------------------------------------------
     
    //Chave e Valor
        //Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis.

        const btnUnico = document.querySelector('button')

        const btnStyles = getComputedStyle(btnUnico)

        console.log(btnStyles)

        for (const style in btnStyles) {
          console.log(`${style}: ${btnStyles[style]}`)
        }
//-----------------------------------------------------------------------------------------------------

                                                  // Exercícios
                                                  console.log('Exercícios:')