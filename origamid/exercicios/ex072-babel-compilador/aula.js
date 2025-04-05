                                                        // Automação Front End
    // Babel
        // É um Compilador: Transforma código novo em código antigo. Ex: const nome = 'Andre'; vira var nome = 'Andre';.
        // pq usar? para dar browser suporte. obs: tem que pesar o que é mais importante para o cliente, de um lado usando babel tem um suporte de browsers antigos e capta mais gnt, por outro o codigo compilado fica maior e pesa mais.

        // https://babeljs.io/docs/usage - como usar
        //https://babeljs.io/ - para testar

        // para saber qual browser suporta o que da pra ver no:  https://caniuse.com/ (os numeros que aparecem são as versões)
//-----------------------------------------------------------------------------------------------------

        // Polyfill vs Transpiler (babel faz os dois)

           // Polyfill
             // Cria métodos / funções com o mesmo nome das atuais, porém utilizando código antigo para permitir o uso em browsers que não possuem a API.

           // Transpiler
             // Transforma código novo em código antigo. Ou seja, transforma const em var.
//-----------------------------------------------------------------------------------------------------
        // instalar babel: npm install --save-dev @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-loader
        //depois tem que criar a pasta webpack.config.js - tem que ser esse nome para funcionar
        // na pasta de config tem que por o entry (pasta de entrada) e o output (pasta de saida). no output tem que por o caminho que é o path, porém tem que por o caminho desde a raiz do pc, e pra facilitar nós importamos um pacote do node (pacote chamado path, para auxiliar em caminhos)
