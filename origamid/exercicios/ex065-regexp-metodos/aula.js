                                            // Regexp Métodos

    // 
     
//-----------------------------------------------------------------------------------------------------
   
    // Regexp Constructor
      // Toda regexp é criada com o constructor RegExp() e herda as suas propriedades e métodos. Existem diferenças na sintaxe de uma Regexp criada diretamente em uma variável e de uma passada como argumento de RegExp.

      // Diferenças para usar no construtor:
      // 1 - Não precisa envolver o regex em barras: /exemplo/g
      // 2 - A contra barra quando usada deve ser duas ao invés de uma \\ (pq tem que escapar a contra barra, por isso duas barras)
      // 3 - As Flags são o segundo argumento

      const regexp = /\w+/gi;

      const regexpObj1 = new RegExp('\\w+', 'gi'); //mesma coisa que abaixo
      const regexpObj2 = new RegExp(/\w+/, 'gi');

      'JavaScript Linguagem 101'.replace(regexpObj1, 'X');
      // X X X

      // Exemplo complexo:
      const regexpTELEFONE1 = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
      const regexpTELEFONE2 = new RegExp('(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}', 'g');
//-----------------------------------------------------------------------------------------------------
    
    // Propriedades
      // Uma regexp possui propriedades com informações sobre as flags e o conteúdo da mesma.

      const regexp2 = /\w+/gi;

      regexp2.flags; // 'gi' - retorna as flags que tem
      regexp2.global; // true - retorna se tem a flag g
      regexp2.ignoreCase; // true - retorna se tem o i
      regexp2.multiline; // false - retorna se tem m
      regexp2.source; // '\w+' - retorna o que está dentro da regex
//-----------------------------------------------------------------------------------------------------
    // Métodos

      //regexp.test()
        // O método test() verifica se existe ou não uma ocorrência da busca. Se existir ele retorna true. A próxima vez que chamarmos o mesmo, ele irá começar do index em que parou no último true.

        const regexp3 = /Java/g;
        const frase = 'JavaScript e Java';

        regexp3.lastIndex; // 0
        regexp3.test(frase); // true - primeiro 'java'
        regexp3.lastIndex; // 4 (continua procurando a partir do quarto index)
        regexp3.test(frase); // true - segundo 'java'
        regexp3.lastIndex; // 17
        regexp3.test(frase); // false
        regexp3.lastIndex; // 0
        regexp3.test(frase); // true (Reinicia - primeiro 'java'
        regexp3.lastIndex;  // 4
//-----------------------------------------------------------------------------------------------------
      //regexp.exec()
        // O exec() diferente do test(), irá retornar uma Array com mais informações do que apenas um valor booleano.

        const regexp4 = /\w{2,}/g;
        const frase1 = 'JavaScript, TypeScript e CoffeeScript';
        
        regexp4.exec(frase1);
        // ["JavaScript", index: 0, input: "JavaScript,
        // TypeScript e CoffeeScript", groups: undefined] 
        regexp4.exec(frase1);
        // ["TypeScript", index: 12, input: "JavaScript,
        // TypeScript e CoffeeScript", groups: undefined] 
        regexp4.exec(frase1);
        // ["CoffeeScript", index: 25, input: "JavaScript,
        // TypeScript e CoffeeScript", groups: undefined] 
        regexp4.exec(frase1);
        // null
        regexp4.exec(frase1); // Reinicia
        // ["JavaScript", index: 0, input: "JavaScript,
        // TypeScript e CoffeeScript", groups: undefined] 
        
                   



























