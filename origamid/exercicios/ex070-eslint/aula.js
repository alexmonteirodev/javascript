
                                                        // Automação Front End
    // ESLint
        // É uma ferramenta que existe para detectar problemas e definir padrões no seu código

        // Vai existir um arquivo de configuração onde vão ter algumas regras específicas que são prédefinidas que da pra habilitar e deshabilitar e essas regras serão forçadas no código e se o código não estiver seguindo alguma regra específica, vai dar um erro no eslint e vai ter que corrigir essa regra

        //obs: eslint tbm é bom para projetos em conjunto, assim, todos envolvidos seguem as mesmas regras e mantém boas práticas.

        // https://eslint.org/ - site
        // https://eslint.org/docs/latest/rules/ - regras

        // ao instalar o eslint como dependencia dev, npm intall --save-dev eslint, precisa criar o arquivo de configuração e colocar as regras que vc quer, logo, criei uma pasta chamada eslint.config.mjs (m de modules), e criei as regras, depois disso basta ativar o eslint com npx eslint js/** ( js/** significa que o eslint vai funcionar em tudo que estiver dentro da pasta js)

        // ja fica vermelho o nome da pasta onde tem o erro que vc configurou poruqe o vscode está com a extensao instalada no eslint

//-----------------------------------------------------------------------------------------------------