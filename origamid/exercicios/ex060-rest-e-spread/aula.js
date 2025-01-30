                                            // Rest e Spread


    //Parâmetros
        //Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido a falta de argumentos. Por isso é importante nos prepararmos para caso estes argumentos não sejam declarados.

        function perimetroForma(lado, totalLados) {
            return lado * totalLados;
          }
          
          perimetroForma(10, 4); // 40
          perimetroForma(10); // NaN - 10 * undefined = NaN

        // Caso não se vá usar o segundo parametro sempre, da pra fazer assim:
       
        //antigamente se fazia assim:
        function perimetroForma(lado, totalLados) {
            totalLados = totalLados || 1 //totallados retorna undefined (false), logo se multiplica por 1 por exemplo
            return lado * totalLados;
          }
        
        // hoje com o Es6 da pra atribuir um valor padrão direto no parametro para caso ele não seja utilizado:

        function perimetroForma(lado, totalLados = 1) { //caso totallados não seja atribuido (usado o argumento), seu valor vai ser 1
            return lado * totalLados;
          }
        
        // palavra chave 'arguments' retorna um arrayLike com todos os argumentos da function.
          
        function perimetroForma(lado, totalLados = 1) { //caso totallados não seja atribuido (usado o argumento), seu valor vai ser 1
          console.log(arguments)
          
          const argArray = Array.from(arguments)
          argArray.forEach((arg) => {
            console.log(arg)
          })

          console.log(argArray)

          return lado * totalLados;
        }
        console.log(perimetroForma(10,4))
//-----------------------------------------------------------------------------------------------------
    
    //Parâmetro Rest
        //É possível declararmos uma parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.

        // ao usar os ...ganhadores, todos os argumentos que você passar depois vão ser armazenados dentro do parametro ...ganhadores como se fosse uma array:

        function anunciarGanhadores(...ganhadores) {
          ganhadores.forEach((ganhador) => {
            console.log(ganhador + ' ganhou!')
          })
        }
        anunciarGanhadores('Pedro', 'Maria', 'João')

        // Obs importante: Só pode exisir 1 parametro rest por função e tem que ser o último porque poderia seguir passando outros, por exemplo:
        
        function somaLados(lado1, lado2, ...listaArgumentos) {
          console.log(listaArgumentos)
          const soma = lado1 * lado2
          console.log(soma)
        }
        somaLados(2,2,'oi','teste', 54)
//-----------------------------------------------------------------------------------------------------

    // Diferença entre Rest X Arguments
        // 1: arguments pega todos os argumentos, já o rest só aqueles que estão dentro do ...argumento
        // 2: o Rest tem prototipo de Array, ou seja, dá pra usar métodos de array, e o arguments tem prototipo de objeto

        function divideLados(lado1, lado2, ...listaArgumentos) {
          console.log(listaArgumentos)
          console.log(arguments)
          // console.log(listaArgumentos.indexOf('oi')) - usando método de array

        }
        divideLados(2,2,'oi','teste', 54)
//-----------------------------------------------------------------------------------------------------

    //Spread
        //Assim como o rest, o operador Spread também utiliza os ... para ser ativado. O spread irá distribuir um item iterável, um por um.
        // a diferença entre o spread e o rest é que não utilizamos o spread como um parametro. Utilizamos o spread para destribuir um item iterável, ou seja, vai pegar um item e iterar sobre ele um por um:

        const frutas = ['Banana', 'Uva', 'Morango'];
        const legumes = ['Cenoura', 'Batata'];

        const comidas = [...frutas, 'pizza', ...legumes];

        console.log(comidas) // ['Banana', 'Uva', 'Morango', 'Pizza', 'Cenoura', 'Batata']
        
        // sem spread:
        const comidas2 = [frutas, 'pizza', legumes];
        console.log(comidas2) //[Array(3), 'pizza', Array(2)]
