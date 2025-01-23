                                            // function-expression

//     // Function Declaration
//         // São duas as formas mais comuns de declararmos uma função. A que utilizamos até o momento é chamado de Function Declaration.

//         function somar1(a,b) {
//             return a + b;
//           }
          
//           somar1(4,2); // 6 
// //-----------------------------------------------------------------------------------------------------

//     // Function Expression
//         //É criada a partir da declaração de uma variável, na qual assinalamos uma função. Esta função pode ser anônima ou nomeada. A mesma poderá ser ativada através da variável assinalada.

//         const somar2 = function (a,b) {
//             return a + b
//         }
//         somar2(4,2) // 6
// //-----------------------------------------------------------------------------------------------------

//     // Diferenças entre Function Declaration X Function Expression
        
//         //Hoisting: ordem no js importa, logo o que é declarado antes acontece primeiro. Porém, se usar a function declaration e usar a função em cima, vai funcionar, ex:

//         console.log(somar3(2,2)) //4 (funciona)

//         function somar3(a,b) {
//             return a + b;
//           }

//         //porém, se usar a expression, ex:

//         //console.log(somar4(2,2)) // ERRO: Cannot access 'somar' before initialization ou is not defined

//         const somar4 = function (a,b) {
//             return a + b
//         }
// //-----------------------------------------------------------------------------------------------------

//     //Arrow Function
//         // Podemos criar utilizando arrow functions.

//         const somar5 = (a,b) => a + b
        
//         // const somar5 = function name(a,b) {
//         //     return a + b
//         // }

//         const quadrado = a =>  a * a // da pra fazer assim, mas não é recomendável escrever assim porque dificulta a leitura, porém ao ver esse código, vc tem que saber o que ele faz
// //-----------------------------------------------------------------------------------------------------

//     //Estrutura / Preferência
//         //Geralmente o uso entre expression / declaration é uma questão de preferência. Function Expression força a criação da mesma antes de sua ativação, o que pode contribuir para um código mais estruturado.

//         // Ao declarar uma Function Declaration, ela vai aparecer no objeto pai Window, e nele existem alguns métodos e pode dar problema caso se crie uma function com o mesmo nome de um método do window, porque via reescrever por cima da função que já existia, daí, um benefício de usar a Expression

//         function somar5(a,b) {  //add no window
//             return a + b;
//         }
//         const dividir = (a,b) => a / b; //nao add no window
        
//         somar5(4,2);
//         dividir(4,2);
//         console.log(window)
// //-----------------------------------------------------------------------------------------------------
    
//     // IIFE - Immediately Invoked Function Expression
//         // Antes da introdução de modules e da implementação do escopo de bloco, a forma mais comum utilizada para isolarmos o escopo de um código JavaScript era através das chamadas IIFE's.

//         var instrumento = 'Violão';

//         (function() { // código isolado do escopo global
//         var instrumento = 'Guitarra';
//         console.log(instrumento); // Guitarra
//         })(); //ativando escopo da função

//         console.log(instrumento); // Violão
// //-----------------------------------------------------------------------------------------------------

//     //IIFE - Arrow Function
//         //Compiladores ainda transformam modules em IIFE's para manter a compatibilidade com browsers antigos.

//         const instrumento = 'Violão';

//         (() => {
//           const instrumento = 'Guitarra';
//           console.log(instrumento); // Guitarra
//         })();
        
//         console.log(instrumento); // Violão
//-----------------------------------------------------------------------------------------------------

                                        // Exercícios
                                        console.log('Exercícios')

//-----------------------------------------------------------------------------------------------------
        
    // Remova o erro
    // priceNumber('R$ 99,99')
    // const priceNumber = n => +n.replace('R$', '').replace(',', '.');

    //reposta:
    const priceNumber = n => +n.replace('R$', '').replace(',', '.');
    priceNumber('R$ 99,99')  
    console.log(priceNumber('R$ 99,99')) // 99.99
//-----------------------------------------------------------------------------------------------------

    // Crie uma IIFE e isole o escopo de qualquer código JS.

    // (function() {
    //     var nome = 'André'
    //     console.log(nome)
    // })()
//-----------------------------------------------------------------------------------------------------

    // Como podemos utilizar a função abaixo.
    const active = callback => callback();
    active(function() {
        console.log('teste de active')
    })

    // function active(callback) {
    //     return callback()
    // }