
                                                        // Automação Front End
    // NPM (Node Package Manager)
        // É um gerenciador de pacotes feito para nodeJS
        
        // Ele facilita a vida porque facilita na hora de instalar ou dar um update em alguma coisa.
        //por exemplo: quero instalar jquery, usando o npm instal jquery vai instalar ja na versão atualizada e não precisa ficar buscando na web os arquivos para baixar e instalar manualmente

        // ex: Linha de comando - $ npm install lodash

        // https://www.npmjs.com/ - esse site contém as informações sobre os pacotes e estatísticas
        //obs: sempre que for instalar algo no site, verificar no npmjs.com as informações do que vai instalar pq, afinal é o código que alguém criou e pode conter problemas que vc vai trazer para o seu site/projeto.

        //ao instalar o lodash ele trouxa algumas pastas.
        //dentre elas a package-lock.json que contém todas as versões e nomes dos pacotes que foram instalados. dentro dessa pasta tem um objeto que tem uma propriedade chamada de dependencias. Ela é importante porque quando for trabalhar com alguem, as dependencias que você instalou ficam somente na sua maquina então o outro cara por essa propriedade consegue ver o que o projeto já está usando de dependencia. Aí ele na maquina dele para não ter que instalar dependencia por dependencia, pode usar o npm install e isso vai instalar tudo que estiver na propriedade dependencias. Ou seja, se eu instalei react e jquery na minha maquina nesse projeto, quando o joão fizer o pull do projeto ele basta usar o npm install que já vai baixar o que eu havia baixado na minha que é o react e o jquery. pq puxa da propriedade dependencias.
//-----------------------------------------------------------------------------------------------------

    // Atalhos
        // Instalar Pacotes

            // $ npm install lodash - Instala o pacote lodash no diretório atual da linha de comando
            
            // $ npm install eslint -g - Instala o eslint globalmente, ou seja, vai instalar diretamente no computador e não somente na pasta, isso é bom quando você quer reutilizar o pacote em várias situações e não precisa ficar instalando toda hora. (No mac é necessário o sudo para instalar globalmente. - $ sudo install eslint -g)
            
            // $ npm update lodash - Atualiza o pacote lodash
            
            // $ npm uninstall lodash - Desinstala o pacote lodash


        // Package.json

            // package.json - Arquivo local com as configurações e dependências de pacotes NPM
            
            // $ npm init - Inicia uma nova configuração local do npm. (cria o package.json) obs: pode usar npm init -y para ja dar yes para tudo e ele instalar de uma vez ao invez de ficar dando y y y...
            
            // $ npm install - Instala todas as dependências listadas no arquivo package.json


        // Arquivos Invisíveis

            // Windows - Exibir > Itens Ocultos
            
            // Mac - 
                // $ defaults write com.apple.Finder AppleShowAllFiles true 
                // $ killall Finder
//-----------------------------------------------------------------------------------------------------

        // NPX
            // O npx é uma ferramenta que vem junto com o Node.js (desde a versão 5.2 do npm) e serve para executar pacotes Node.js diretamente da linha de comando, sem precisar instalar eles globalmente no seu sistema.

            // exemplo: usa o npm install eslint para instalar o pacote no arquivo e depois o npx eslint js/** para buscar no arquivo se as regras do eslint estão sendo seguidas.
            // basicamente: npm instala/atualiza/deleta pacotes e o npx ativa ferramentas desses pacotes



        
