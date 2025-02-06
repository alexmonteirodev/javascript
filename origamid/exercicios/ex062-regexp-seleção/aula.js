                                            // Regexp Seleção 1



    // O assunto de regex é muito extenso e para ser mais dinâmico, vamos utilizar o regexr.com e abaixo segue o código utilizado.

    // Lembrete rápido: (um super ctrl F)
      // /teste/g - busca no escopo global um t, seguido de e, s, t, e (logo, temos a busca da palavra)
      // /[teste]/g - busca no escopo global todas as letras t,e,s
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
//-----------------------------------------------------------------------------------------------------

    //Ponto
      //O ponto . irá selecionar qualquer caracter, menos quebras de linha.

      // procura: todos os caracteres menos quebra de linha
      const regexpComPonto = /./g

      const fraseComPonto = 'JavaScript é a linguagem!'.replace(regexpComPonto, '0')
      console.log(fraseComPonto) //0000000000000000000000000
//-----------------------------------------------------------------------------------------------------

    //Escapar Especiais
      //Caracteres especiais como o ponto ., podem ser escapados utilizando a barra \, assim este não terá mais a sua função especial e será tratado como literal. Lista de caracteres especiais: +*?^$\.[]{}()|/

      // Procura: todos os pontos
      const regexpEscapa = /\./g;

      const regexpAlternativa = /[.]/g;

      '999.222.222.11'.replace(regexpEscapa, '-') // 999-222-222-11
//-----------------------------------------------------------------------------------------------------

    //Word
      //O \w irá selecionar qualquer caracter alfanumérico e o underline. É a mesma coisa que [A-Za-z0-9_].


      // Procura: todos os alfanuméricos
      const regexpW = /\w/g;

      'Guarda-chuva R$ 23,00.'.replace(regexpW, '-') // ------------ -$ --,--.

    //obs: W maiusculo seleciona espaços e chars especiais
    
    //Not Word
      //O \W irá selecionar tudo o que não for caracter alfanumérico e o underline. É a mesma coisa que [^A-Za-z0-9_].

      // Procura: o que não for caracter alfanuméricos
      const regexpWUpperCase = /\W/g;

      'Guarda-chuva R$ 23,00.'.replace(regexpWUpperCase, '-') // Guarda-chuva-R--23-00-

//-----------------------------------------------------------------------------------------------------

    //Digit
      //O \d irá selecionar qualquer dígito. É a mesma coisa que [0-9].

      // Procura: todos os dígitos
      const regexpDigit = /\d/g;

      '+55 (21) 2222-2222'.replace(regexpDigit, 'X') // +XX (XX) XXXX-XXXX.
    
    //Not Digit
      //O \D irá selecionar tudo que não for dígito. É a mesma coisa que [^0-9].

      // Procura: o que não for dígito
      const regexpDigitUpperCase = /\D/g;

      '+55 (21) 2222-2222'.replace(regexpDigitUpperCase, '') // 552122222222
//-----------------------------------------------------------------------------------------------------

    //Whitespace
      //O \s irá selecionar qualquer espaço em branco, isso inclui espaços, tabs, quebra de linhas.

      // Procura: espaços em branco
      const regexpWhitespace = /\s/g;

      '+55 (21) 2222-  2222  '.replace(regexpWhitespace, '') // +55(21)2222-2222

    //Not Whitespace
      //O \S irá selecionar qualquer caracter que não for espaço em branco.

      // Procura: o que não for espaço em branco
      const regexpNotWhitespace = /\S/g;

      '+55 (21) 2222-  2222  '.replace(regexpNotWhitespace, 'X') // XXX XXXX XXXXX  XXXX  
//-----------------------------------------------------------------------------------------------------

    //Quantificador
      //É possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb. Com as chaves podemos indicar a repetição /b{3}/g. Agora ele está fazendo uma seleção completa e não caracter por caracter.

      // Procura: 4 a's seguidos
      const regexpQuantificador = /aaaa/g;
      const regexpAlt = /a{4}/g;

      'Vaaaai ali por favor.'.replace(regexpQuantificador, 'a');
      // Vai ali por favor.  

      //obs 1: /i{2,3}/ - seleciona o maximo e o minimo ex: Vaiiiii //return Va iii ii
      //obs 2: /i{2,}/ - seleciona a partir de 2 ex: Vaii //return ii (se fosse um i, não selecionaria)
//-----------------------------------------------------------------------------------------------------

    //Mais +
      //O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrências.

      // Procura: dígitos em ocorrência de um ou mais
      const regexpMais = /\d+/g;

      '222.333.222.42'.replace(regexpMais, 'X') // X.X.X.X

      // Procura: Começa com d, seguido por uma ou mais letras.
      const regexpLetrasD = /d\w+/g;

      'Dígitos, dados, desenhos, Dito, d'.replace(regexpLetrasD, 'X') // Dígitos, X, X, Dito, d
//-----------------------------------------------------------------------------------------------------

    //Asterisco *
      //O sinal * significa que devemos selecionar quando existir 0 ou mais ocorrências.

      // Procura: Começa com d, seguido por zero ou mais letras.
      const regexpAsterisco = /d\w*/g;

      'Dígitos, dados, desenhos, Dito, d'.replace(regexpAsterisco, 'X') // Dígitos, X, X, Dito, X
//-----------------------------------------------------------------------------------------------------

    //Opcional ?
      //O sinal ? significa que o caracter é opcional, pode ou não existir.(a letra selecionada)

    // Procura: Por regex com p opcional
    const regexpQuestion = /regexp?/g; //? indica que o p é opicional, logo a formula seria x? ex: regex?p? - x e p opcionais

    'Qual é o certo, regexp ou regex?'.replace(regexpQuestion, 'Regular Expression') // Qual é o certo, Regular Expression ou Regular Expression?
//-----------------------------------------------------------------------------------------------------

    //Alternado |
      //O sinal | irá selecionar um ou outro. java|php

      // Procura: java ou php (case insensitive)
      const regexpAlternado = /java|php/gi;

      'PHP e Java são linguagens diferentes'.replace(regexpAlternado, 'X') // X e X são linguagens diferentes
//-----------------------------------------------------------------------------------------------------

    //Word Boundary \b
      //O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.

      // Procura: java (case insensitive)
      const regexpBoundaryB = /java/gi;
      'Java não é JavaScript.'.replace(regexpBoundaryB, 'X') //X não é XScript.

      // Procura: java (case insensitive)
      const regexpBoundary = /\bjava\b/gi;
      'Java não é JavaScript.'.replace(regexpBoundary, 'X') // X não é JavaScript. obs: caso tivesse javali, só pegaria o java

      //ex: javali e java - /\bjava\b/ //return java (somente)

      // Procura: Dígitos em sequência, que estejam isolados
      const regexpDigito = /\b\d+\b/gi;
      'O Restaurante25 na Rua 3, custa R$ 32,00'.replace(regexpDigito, 'X') // O Restaurante25 na Rua X, custa R$ X,X

      '11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X') // 11_22 X-X XéX 77e88

    //Not Word Boundary \B
      //É o contrário do \b.

      const regexpDigitoNotWordBoundary = /\B\d+\B/gi;

      '11_22 33-44 55é66 77e88'.replace(regexpDigitoNotWordBoundary, 'X') // 1X_X2 33-44 55é66 7XeX8 - seleciona o que está entre alfanuméricos
      

                              





    
   