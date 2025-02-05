                                            // Regexp Seleção 1



    // O assunto de regex é muito extenso e para ser mais dinâmico, vamos utilizar o regexr.com e abaixo segue o código utilizado.
//-----------------------------------------------------------------------------------------------------
                                      
    // Regular Expression
      //Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split().

      // obs 1: em geral vamos usar o nome Regexp porque é o nome do construtor que o js utiliza.

      // obs 2: Praticamente todas as linguagens possuem uma implementação de regexp

      const regexp = /J/ // procura: J

      const frase = 'JavaScript'
      const novaFrase = frase.replace(regexp, 'B')

      console.log(novaFrase) // BavaScript

      // usando o ctrl F da pra usar o regex e substituir letras ou palabras como a função acima. basta clicar comand F > clicar na seta '>' e ativar a função regex no .*

      // Em regex tem que pensar da seguinte forma, ele vai busca pela letra que você definir, então se passar uma palavra por exemplo 'animal', ele não vai buscar a palavra 'animal' como se fosse uma string mas sim um 'a' que tiver seguido um 'n', que tiver seguido um 'i' e por aí vai.
//-----------------------------------------------------------------------------------------------------

    //Literal
      //Utilizar um caracter literal irá realizar uma busca específica deste caracter.

      // procura: J seguido de a, v e a
      const regexpJava = /Java/

      const typereplace = 'JavaScript'.replace(regexpJava, 'Type')
      console.log(typereplace) //TypeScript
//-----------------------------------------------------------------------------------------------------

    //Flag: g
      //As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas é a g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.

      // Procura: Todo a
      const regexpBuscaA = /a/g

      const palavra = 'JavaScript'.replace(regexpBuscaA, 'i')
      console.log(palavra) //JiviScript
//-----------------------------------------------------------------------------------------------------

    //Flag: i
      //Com o i informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A.

      // Procura: Todo PE, Pe, pE, pe
      const regexpPe = /Pe/gi

      const frasePe = 'Perdeu perdido'

      const novaFrasePe = frasePe.replace(regexpPe, 'Ba')
      console.log(novaFrasePe) //Bardeu Bardido
//-----------------------------------------------------------------------------------------------------

    //Character Class
      //Se colocarmos os caracteres entre colchetes, estamos definindo uma classe. /[ab]/ irá procurar por a ou por b. Ou seja, não seria a string 'ai' uma letra seguida da outra.

      // Procura: A, a, I, i
      const regexpAi = /[ai]/gi // seleciona todo 'a' e todo 'i' que tiver. (se fosse ai sem [], só selecionaria onde tivesse 'ai')

      const fraseAi = 'JavaScript'.replace(regexpAi, 'u')
      console.log(fraseAi) //JuvuScrupt
//-----------------------------------------------------------------------------------------------------

    //Character Class e Especiais
      //Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento, pois existem diversos casos especiais para os mesmos.

      // Procura: - ou .
      const regexpPonto = /[-.]/g;

      const atencao = /./g // o . seleciona todos os itens // '111.222-333-44'.replace(atencao, 'a') //return aaaaaaaaaaaaaa
      //caso queira que selecione apenas os . da pra usar \.

      const numero = '111.222-333-44'.replace(regexpPonto, '')
      console.log(numero) // 11122233344
//-----------------------------------------------------------------------------------------------------

    //Um ou Outro
      //Combine caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho.

      //Procura: B, seguido de r, a seguido de s ou z, seguido de i, l
      const regexpBrasil = /Bra[sz]il/g //seleciona brasil com s ou brazil com z

      const brasil = 'Brasil é com z: Brazil'.replace(regexpBrasil, 'Prazer')
      console.log(brasil) //Prazer é com z: Prazer
//-----------------------------------------------------------------------------------------------------

    //De A à Z
      //O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance.

      // Busca por itens de a à z
      const regexp1 = /[a-z]/g;

      'JavaScript é a linguagem.'.replace(regexp1, '0');
      // J000S00000 é 0 000000000.

      // Busca por itens de a à z e A à Z
      const regexp2 = /[a-zA-Z]/g;

      'JavaScript é a linguagem.'.replace(regexp2, '1');
      // 1111111111 é 1 111111111.

      // Busca por números de 0 à 9
      const regexpNumero = /[0-9]/g;

      '123.333.333-33'.replace(regexpNumero, 'X');
      // XXX.XXX.XXX-XX

      // se usar de [A-z], vai pegar o [, \, ] entre outros seguindo o padrão tabela unicode - https://symbl.cc/en/unicode-table/#basic-latin
      // o mesmo acontece para caracteres com acento
//-----------------------------------------------------------------------------------------------------

    //Negar
      //Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]

      // Procura: tudo que não estiver entre a e z
      const regexpNega = /[^a-z]/g;

      'Brasil é com z: Brazil'.replace(regexpNega, ' ');
      // rasil   com z   razil 

      //observações / exemplos:
      // [^teste] - pega todos os t,e,s,
      //[^] - seleciona tudo (porque não nega nada), é como se usasse o .
      // [^ ] - pega tudo menos os espaços
      // [^ .] - pega tudo menos espaço e ponto


    
   