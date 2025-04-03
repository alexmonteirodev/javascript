                                            // Regexp Substituição

    // Referência da Seleção
      // É possível utilizarmos o $& durante o momento da substituição para fazermos uma referência à seleção.

      // Procura: Java
      const regexp = /Java/g;

      'PHP e Java são linguagens diferentes'.replace(regexp, '$&Script');
      // PHP e JavaScript são linguagens diferentes
      // $& é uma forma de repetir a palavra selecionada sem ter que reescrever ela
      //obs: geralmente referencia serve para mexer com várias palavras. Imagine que tem um texto grande e você precia alterar palavras pontuais, da pra selecionar elas e usar o $& para falar com todas.
//-----------------------------------------------------------------------------------------------------
                                        
    // Grupo de Captura
      // É possível definirmos diferentes grupos de captura, que poderão ser referenciados durante a substituição. Basta envolvermos um grupo entre () parênteses. A referência se cada grupo será feita com $n, sendo o primeiro $1.

      // Procura: sequência alfanumérica, seguida
      // de @, seguido de alfanumérico ou .
      const regexp1 = /(\w+)@[\w.]+/g;

      'andre@email.com.br'.replace(regexp1, '$1@gmail.com');
      // andre@gmail.com
      // o regexp: /(\w+)@[\w.]+/g é dividido em 3 partes: /   \w+   @   [\w.]+  /g. Para selecionar apenas uma parte, basta envolver em parenteses: /(\w+)@[\w.]+/g. Logo a parte que está dentro dos parenteses fazem parte do grupo 1 de captura e para acessá-la basta usar $1 e assim por diante, se podem criar outros grupos de captura.

    // Mais de um grupo  
      //ex:
      // Procura: sequência alfanumérica, seguidade , seguido espaço de sequência alfanumérica.
      const regexp2 = /(\w+),\s(\w+)/g;

      'Rafael, Andre'.replace(regexp2, '$2 $1');
      // Andre Rafael
      // dessa forma da pra manipular uma lista de nomes por exemplo.
    
    // Mais do que Captura apenas
      // Um grupo também serve para agruparmos uma sequência de caracteres que queremos em repetição.

        // Procura: qualquer sequência de ta
        const regexp3 = /(ta)+/gi;

        'Tatata, tata, ta'.replace(regexp3, 'Pá');
        // Pá, Pá, Pá

    // Ignorar Captura                                        
      // caso queira usar os () apenas para selecionar e não usar o grupo de captura, pode usar assim: (?:) 

      // Procura: qualquer sequência de ta
      const regexp4 = /(?:ta)+/gi;

      'Tatata, tata, ta'.replace(regexp4, 'Pá');
      // Pá, Pá, Pá
//-----------------------------------------------------------------------------------------------------

    // Positive Lookahead
      // Faz a seleção dos itens que possuírem o padrão dentro de (?=) à sua frente. Apesar de utilizar () parênteses o positive lookahead não captura grupo.

      // Procura: dígitos em sequência, que
      // possuírem px, sem selecionar o px.
      const regexp5 = /\d(?=px)/g; //d de digito, ou seja, d que vem antes de 'px'

      '2em, 4px, 5%, 2px, 1px'.replace(regexp5, 'X');
      // 2em, Xpx, 5%, Xpx, Xpx
             
    // Negative Lookahead
      // Faz a seleção dos itens não possuírem o padrão dentro de (?!) à sua frente.

      // Procura: dígitos que não possuírem px
      // sem selecionar o restante.
      const regexp6 = /\d(?!px)/g;

      '2em, 4px, 5%, 5px, 1px'.replace(regexp6, 'X');
      // Xem, 4px, X%, 5px, 1px
      
    //Positive Lookbehind
      // Faz a seleção dos itens que possuírem o padrão dentro de (?<=) atrás dos mesmos.

      // Procura: dígitos que possuírem R$
      // na frente dos mesmos
      const regexp7 = /(?<=R\$)[\d]+/g;

      'R$99, 100, 200, R$20'.replace(regexp7, 'X');
      // R$X, 100, 200, R$X
                                      






















                                       


















                              
                                      

    
   