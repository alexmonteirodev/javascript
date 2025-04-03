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
                                            // Métodos regex
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
//-----------------------------------------------------------------------------------------------------
                                      // Métodos regex de String

      // str.match() - retorna array com resultado
        // O match() é um método de strings que pode receber como argumento uma Regexp. Existe uma diferença de resultado quando utilizamos a flag g ou não.

        const regexp5 = /\w{2,}/g;
        const regexp5SemG = /\w{2,}/;
        const frase2 = 'JavaScript, TypeScript e CoffeeScript';

        frase2.match(regexp5);
        // ['JavaScript', 'TypeScript', 'CoffeeScript']

        frase2.match(regexp5SemG);
        // ["JavaScript", index: 0, input: "JavaScript,
        // TypeScript e CoffeeScript", groups: undefined]
//-----------------------------------------------------------------------------------------------------

      // str.split()
        // O split serve para distribuirmos uma string em uma array, quebrando a string no argumento que for passado. Este método irá remover o match da array final.

        const frase3 = 'JavaScript, TypeScript, CoffeeScript';

        frase3.split(', ');
        // ["JavaScript", "TypeScript", "CoffeeScript"]
        frase3.split(/Script/g);
        // ["Java", ", Type", ", Coffee", ""]
        
        const tags = `
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        `;
        
        tags.split(/(?<=<\/?)\w+/g).join('div');
        // <div>
        //   <div>Item 1</div>
        //   <div>Item 2</div>
        // <div>
//-----------------------------------------------------------------------------------------------------
             
      // str.replace() - mais utilizada
        // O método replace() é o mais interessante por permitir a utilização de funções de callback para cada match que ele der com a Regexp.

        const tags1 = `
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        `;
        
        tags1.replace(/(?<=<\/?)\w+/g, 'div');
        // <div>
        //   <div>Item 1</div>
        //   <div>Item 2</div>
        // <div>
                                 
         // obs: se usasse tags1.replace('ul', 'div'), o JS mudaria apenas a primeira ul, daí já vem a vantagem do regex de poder manipular isso, usando /ul/g ele alteraria todas as ul.                                 
         // incluso, da pra usar a referencia do regex para adicionar class, ex: /<li/g e no replace usar o $& class='ativa'. $& é uma referencia ao proprio regex.                                   
//-----------------------------------------------------------------------------------------------------

      // Grupos de Captura
        // É possível definirmos quantos grupos de captura quisermos.

        const emails = `
        empresa@email.com
        contato@email.com
        suporte@email.com
        `;
        
        emails.replace(/(\w+@)[\w.]+/g, '$1gmail.com');
        // empresa@gmail.com
        // contato@gmail.com
        // suporte@gmail.com
//-----------------------------------------------------------------------------------------------------
      // Callback
        // Para substituições mais complexas, podemos utilizar um callback como segundo argumento do replace. O valor do return será o que irá substituir cada match.

        const regexp6 = /(\w+)(@[\w]+)/g;
        const emails2 = `joao@homail.com.br
        marta@ggmail.com.br
        bruna@oulook.com.br`
        
        emails2.replace(regexp6, function(...args) {
          console.log(args);
          if(args[2] === '@homail') {
            return `${args[1]}@hotmail`;
          } else if(args[2] === '@ggmail') {
            return `${args[1]}@gmail`;
          } else if(args[2] === '@oulook') {
            return `${args[1]}@outlook`;
          } else {
            return 'x';
          }
        });
        
        // joao@hotmail.com.br
        // marta@gmail.com.br
        // bruna@outlook.com.br
                                            







































