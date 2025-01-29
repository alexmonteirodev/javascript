                                            // Destructuring 1

                                            // Destructuring - Objetos
    // Destructuring
        // Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades à novas variáveis.

        // Basicamente é transformar a chave/propriedade de um objeto em uma variável

        const carro = {
          marca: 'Fiat',
          ano: 2018,
          portas: 4,
        }
        
        // Processo normal seria:

        // const marca = carro.marca
        // const ano = carro.ano

        // console.log(marca) // Fiat
        // console.log(ano) // 2018


        // Com destructuring:

        const {marca, ano} = carro 

        console.log(marca) // Fiat
        console.log(ano) // 2018

        // Assim, se otimiza o processo de atribuit valor a váriavel sem ter que ficar repetindo código.

        // Obs 1: caso queira reasiinalar o nome da const basta fazer assim: 

          // const {marca: nomeMarca, ano} = carro
          // console.log(nomeMarca) // Fiat
        
        // Obs 2: Se passar uma chave que não existe por ex: cavalos, daria undefined, para atribuir um valor que ainda não existe no objeto use assim.

          //const {marca, ano, cavalos = 50} = carro //atribui 50 ao valor de cavalos - caso nenhum valor seja atribuido, ou seja, é dado o 50 como um valor padrão para iniciar, mas caso coloque cavalos: 42 direto no objeto, o js vai escrever por cima e vai sair 42 no console ao invés de 50.
//-----------------------------------------------------------------------------------------------------

    // Destructuring Objects
      // A desestruturação irá facilitar a manipulação de dados. Principalmente quando temos uma grande profundidade de objetos.

      const cliente = {
        nome: 'Andre',
        compras: {
          digitais: {
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Video JS', 'Video HTML']
          },
          fisicas: {
            cadernos: ['Caderno 1']
          }
        }
      }

      console.log(cliente.compras.digitais.livros);
      console.log(cliente.compras.digitais.videos);
      
      const {livros, videos} = cliente.compras.digitais;
      
      console.log(livros);
      console.log(videos);
//-----------------------------------------------------------------------------------------------------
      
    //Nesting - Aninhamento
      //É possível aninhar uma desestruturação dentro de outra.

      const cliente2 = {
        nome: 'Andre',
        compras: {
          digitais: {
            livros2: ['Livro 1', 'Livro 2'],
            videos2: ['Video JS', 'Video HTML']
          },
          fisicas: {
            cadernos: ['Caderno 1']
          }
        }
      }

      const {digitais, fisicas, digitais: {livros2, videos2}} = cliente2.compras
      
      console.log(digitais);
      console.log(fisicas);
      console.log(livros2);
      console.log(videos2);
//-----------------------------------------------------------------------------------------------------

                                            // Destructuring - Arrays
                            
    //Destructuring Arrays
      //Para desestruturar array's você deve colocar as variáveis entre [] colchetes.

      const frutas = ['Banana', 'Uva', 'Morango'];

      //Processo normal seria:
      const fruta1 = frutas[0]
      const fruta2 = frutas[1]
      const fruta3 = frutas[2]

      console.log(fruta1) // Banana
      console.log(fruta2) // Uva
      console.log(fruta3) // Morango

      // Com destructuring

      const [primeira, segunda, terceira] = frutas

      console.log(primeira) // Banana
      console.log(segunda) // Uva
      console.log(terceira) // Morango
//-----------------------------------------------------------------------------------------------------
    
    //Declaração de Variáveis
      //A desestruturação pode servir para declararmos uma sequência de variáveis.

      const first = 'Item 1';
      const second = 'Item 2';
      const third = 'Item 3';
      // ou
      const [firs, secon, thir] = ['Item 1', 'Item 2', 'Item 3']; 
      
      //obs: do primeiro jeito é mais aconselhável para que o código fique mais fácil de entender
//-----------------------------------------------------------------------------------------------------

                                            // Destructuring - argumento de funções
    // Argumento Desestruturado
      //Se uma função espera receber como argumento um objeto, podemos desestruturar ele no momento da declaração.

      //sem destructuring:

        document.addEventListener('keyup', handlwKeyboard)
        
        function handlwKeyboard(event) { 
          console.log(event) //event é um objeto, logo, da pra desestruturar
          console.log(event.key) //retorna tecla clicada
        }

       //com destructuring:

        // Para entender melhor:
        // ao acessar event.key se está acessando o KeyboardEvent.key, que é um objeto então teclando o F por exemplo, teriamos:
        // KeyboardEvent.key: 'F'
        //logo: 
        // const {key} = KeyboardEvent, sendo que KeyboardEvent é o event, então temos:

        document.addEventListener('keyup', handlwKeyboardWithDestruct)
        
        function handlwKeyboardWithDestruct({key}) { 
          console.log(key) //retorna tecla clicada
        }

