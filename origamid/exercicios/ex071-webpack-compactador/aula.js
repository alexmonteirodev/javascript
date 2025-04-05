// Automação Front End
// Webpack
// É um Bundler. Serve para agrupar / processar diversos arquivos e otimiza esses arquivos. (serve pra compilar código, ou seja, transformar muito codigo em pouco)

// https://webpack.js.org/

// instalei o webpack: npm install --save-dev webpack webpack-cli
// usei o comando que compilou as importações do js/script.js em um arquivo unico chamado main.js e alterei o index pra puxar o main.js: npx webpack --entry ./js/script.js -o ./ e tbm tirei o type module
//essa compilação serve para deixar o arquivo menos pesado pois possui menos letras e etc, se tornou um 'ugly file', porém otimizado
// pra não ter que ficar usando o nox toda hora que vc adicionar um novo arquivo js para ele ter que atualizar o main.js, vamos usar o 'npx webpack --entry ./js/script.js -o ./ --watch' e o watch serve para ele ficar de olho e atualizando em automatico pra que quando eu crie um novo arquivo ele recompile automatico e eu não tenha que dar um novo npx
//para testar se está atualizando automatico fui no script.js e dei um console.log('teste') e apareceu. para fazer ele interromper o watch basta clicar 'control c'. caso não de o control c, o terminal vai ficar rodando e a linha para digitar no terminal vai sumir.
//obs: o watch deve ser usado da seguinde forma: --watch faz as alterações e interrompe com ctrl c. é só pra não ter que dar um npx a cada alteração.

//para não ter que digitar todo o comando 'npx webpack --entry ./js/script.js -o ./ --watch' toda vez que quiser usar ele, da pra usar um script para facilitar. Para isso, tem que ir no package.json e em scripts criar (não precisa do npx pq ele ja vai pular a cli do webpack). (olhar no package.json)
//depois do script criado para usar tem que fazer o npm run (nome do script), no caso 'npm run dev' vai ativar o watch.
// ao criar o script utilizamos o '--mode development' isso serve para produtividade do dev, logo, aquele arquivo main.js que tinha sido compilado, ao correr esse npm, ele descompila e adciona comentários e agora da pra um dev ler o arquivo o que antes não dava. Já o --mode production (npm run build) serve pra compilar e quando quiser subir o site.
//exemplo pratico: escrever consssole.log('teste) (console errado para acusar erro), no modo dev o erro mostra a linha e a pasta do arquivo e no modo production(compilado), mostra linha 1 da main, ou seja, não tem como saber de onde vem o erro. Logo, é muito bom para destrinchar código e saber onde está algum erro. (obs: mostra linha 1 porque provavelmente no compilado o erro deve estar pela linha 1 mas não da pra entender PN)
//logo, quando estiver mexendo no codigo vc usa o run deve  quando for subir o site roda o run build pra compilar tudo e ficar mais otimizado.
//-----------------------------------------------------------------------------------------------------
//outra vantagem do webpack é poder instalar scripts externos
//repare que ele vai para a parte de dependencias do package.json, porque são pacotes que farão parte do site depois. (o devdependencia não farão que é por exemplo o webpack que serve só para compilar antes de subir o site)
//depois de instalar os pacotes npm install jquery e npm install lodash basta importar no script.js
//deixei comentado o teste deles
//jquery e lodash são basicamente bibliotecas de scripts, ou seja, tem funções prontas que você pode importar e usar sem precisar escrever na mão do zero.


//obs: CLI quer dizer Command Line Interface, ou seja, Interface de Linha de Comando. webpack-cli é o pacote que permite você usar o Webpack via terminal (linha de comando), rodando comandos como: npx webpack
