                                            // Closures e Debugging

    // Escopo
        // Quando criamos uma função, a mesma possui acesso à todas as variáveis criadas em seu escopo e também ao escopo pai. A mesma coisa acontece para funções dentro de funções.

        let item1 = 1;
        function funcao1() {
          let item2 = 2;
          function funcao2() {
            let item3 = 3;
          }
        }
        
        // func1, possui acesso à
        // item1 e item2
        
        // func2, possui acesso à
        // item1, item2 e item3
        
//-----------------------------------------------------------------------------------------------------
    // Closures
        // Closure só existe quando tem função dentro de função. Closure é o escopo em relação a função pai dela. 
        // A funcao2 possui 4 escopos. O primeiro escopo é o Local, com acesso ao item3. O segundo escopo dá acesso ao item2, esse escopo é chamado de Closure (funcao1) (escopo de função dentro de função). O terceiro escopo é o Script com acesso ao item1 e o quarto escopo é o Global/Window.

        //let item1 = 1;
        function funcao1() {
          let item2 = 2;
          function funcao2() {
            let item3 = 3;
            console.log(item1);
            console.log(item2);
            console.log(item3);
          }
          funcao2();
        }
        
//-----------------------------------------------------------------------------------------------------
    // Debugging
        // É possível "debugarmos" um código JavaScript utilizando ferramentas do browser ou através do próprio Visual Studio Code. Se o código possuir qualquer Web API, o processo deve ser feito no Browser. Plugins podem interferir no debug dentro do browser.

        //É possível acessar o debug de 3 formas:
            // 1 - usar a palavra debugger no código, funciona como um breakpoint (quando abre o navegador já tem esse breakpoint).
            // 2 - debugar direto no navegador indo em: inspecionar > sources > page > script e add os breakpoints (breakpoint serve para dizer onde deve iniciar o processo de debug)
            // 3 - debugar direto no vscode clicando no inseto e o breakpoint é na bolinha. 
            
            // obs: A diferença de usar o debug do vscode é que nele se usa o node e no navegador usa o objeto global window do navegador. E se estiver usando alguma api de web e tentar debugar no vscode, não vai funcionar porque ele roda em node e são processos diferentes, por isso é melhor debugar pelo navegador.

        //debugger; // adicione a palavra debugger - funciona como um breakpoint (quando abre o navegador já tem esse breakpoint)
        //let item1 = 1;
        function funcao1() {
          let item2 = 2;
          function funcao2() {
            let item3 = 3;
            console.log(item1);
            console.log(item2);
            console.log(item3);
          }
          funcao2();
        }
        funcao1()
//-----------------------------------------------------------------------------------------------------

    // Caso Clássico
        // Um dos casos mais clássicos para a demonstração de closures é através da criação de uma função de incremento. É como se a função incrementar carregasse uma mochila chamada contagem, onde uma referência para as suas variáveis estão contidas na mesma.

        function contagem() {
            let total = 0;
            return function incrementar() { //closure de incremetnra é contagem
              total++;
              console.log(total);
            }
          }
          console.log(contagem()) // function
          const ativarIncrementar = contagem(); // contagem() está em uma const para poder ser ativada porque até então se só ativar ela, ela vai retornar a função, porque o que faz tudo acontecer é o incrementar()
          ativarIncrementar(); // 1
          ativarIncrementar(); // 2
          ativarIncrementar(); // 3
//-----------------------------------------------------------------------------------------------------
    
    // Closures na Real
        // Todas as funções internas da Factory Function possuem uma closure de $$. As mesmas contém uma referência à variável elements declarada dentro do escopo da função.

