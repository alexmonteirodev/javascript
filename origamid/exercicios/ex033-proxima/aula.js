
                                        // Modules
    // Os Modules (modulos) serve para separar os arquivos do código e deixar tudo mais organizado. Ex: ao criar um projeto, você cria as pastas html, css e js. Na js você jogar todas as funções lá e quando tem que conferir algo, você tem que procurar a função que você quer naquela bagunça pra poder modificar algo. Com o modules, você basicamente, divide cada função em uma pasta diferente e linka com o arquivo js do projeto, dessa forma, quando você for procurar algo, já vai direto na pasta que quer. Ex: ta com problema no scroll... já vai na pasta do scrol e vê o que está acontecendo e sem o modules teria que ir no js e procurar a parte do scroll. São 3 pontos positivos:

    // 1 - Manutenção:

        // Dividir o código em diferentes arquivos com funções específicas (módulos) facilita a manutenção.

    // 2 - Compartilhamento:

        // O compartilhamento de código com outros projetos é facilitado, pois basta você importar um módulo específico.

    // 3 - Nativo no ES6+:

        // Ferramentas que permitem dividirmos o código em módulos já existem a bastante tempo. Grunt, Gulp, Webpack, Browserify, Parcel e outras. Mas agora os módulos são nativos.
//-------------------------------------------------------------------------------------------------------
    
    //Modules ES6: (Geralmente um valor por módulo)

        //Basta adicionar type="module" na tag script do HTML. Utilize a palavra chave export na frente do valor que deseja exportar (use default se for único). E import nome from arquivo.js para importar.
/*
        <script type="module" src="js/script.js"></script>


        // arquivo scroll-suave.js
        export default function scrollSuave() {
            ...
        };
        
        // arquivo script.js
        import scrollSuave from './scroll-suave.js';

        scrollSuave();
*/
//-------------------------------------------------------------------------------------------------------
    //nessa aula eu add a pasta animações dentro da pasta modules e nessa pasta tinham todas as animações de js, então fui copiando e colando em pastas separadas, add o export default em cada uma, linkei todas as pastas no script (pasta js principal) e no doc html linkei com a pasta script dentro de modules e add type modules (pra funcionar de forma nativa) e ao fim de tudo exclui a pasta animações (não precisa mais dela porque agora estão todas as animações em js divididas em pastas)
//-------------------------------------------------------------------------------------------------------

    //Named Exports
        //Você pode exportar mais de um valor. Quando for importar utilize as chaves para especificar cada valor. O nome importado deve ser igual ao exportado.

/*
        // arquivo scroll.js
        export function scrollSuave() {
        ...
        };
        export function scrollAnimacao() {
        ...
        };

        // arquivo script.js
        import { scrollSuave, scrollAnimacao } from './scroll.js';
        scrollSuave();
        scrollAnimacao();

        // Importe todos os valores em um objeto
        import * as scroll from './scroll.js';
        scroll.scrollSuave();
        scroll.scrollAnimacao();
*/
//-------------------------------------------------------------------------------------------------------
   
    //Valores do Export
        //Podemos exportar objetos, funções, classes, números, strings e mais.

        // arquivo configuracao.js
        export function scrollSuave() {};
        export const ano = 2000;
        export const obj = {nome: 'Ford'};
        export const str = 'Frase';
        export class Carro {};

        // arquivo script.js
        import * as conf from './configuracao.js';
        conf.str;
        conf.obj;
        conf.ano;
//-------------------------------------------------------------------------------------------------------

    //Características:

        // 'use strict' por padrão em todos os arquivos. (Por padrão todo module está no modo estrito)
            //use strict avisa quando não vai funcionar:

           //'use strict'
/*
            nome = 'Ford'; // erro, variável global
            delete Array.prototype; // erro, não deletável
            window.top = 200; // erro, não pode mudar
            const arguments = 3.14; // escrever em palavra reservada
*/
            //ex: se fosse antes sem usar o use strict (escrever isso no script) ou o modules (use strict incluido), o delete Array.prototype não daria erro e tbm não ia deletar e agora o use strict da erro e fala que isso não pode deletar.


        // Variáveis ficam no module apenas (Não vazam para o escopo globo)
            //só o que você exportar que vai vazar para a outra pasta, ou seja, tem que por export na frente de tudo que quer que vá para o outro arquivo e isso cria uma segurança e evita conflito entre variaveis, já pensou se coloca export e ele exporta a pagina inteira, ia dar ruim.

        // This fora de um objeto faz referência a undefined (Ao invés de fazer referência ao window):
            //O this (console.log(this)) escrito somente no script do html faz referencia ao window e se for dentro de algum objeto, aí faz referencia ao objeto mas quando coloca o type module no script, ele se torna undefined.

        // Assíncrono
            //carrega na pagina e puxa as informações dos modules sem ter que ficar recarregando ou seja, não espera um e dpois carrega, ele carrega tudo junto. (obs: carrega tudo junto mas o js executa na ordem)
//-------------------------------------------------------------------------------------------------------

    