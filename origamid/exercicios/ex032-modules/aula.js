
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