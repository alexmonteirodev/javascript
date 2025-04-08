                                                        // Automação Front End
    // Git
        // Sistema de controle de versões. Facilita o trabalho em equipe e o controle de mudanças entre arquivos e diretórios.

    // Github                                                    
        // Plataforma online de hospedagem para repositórios Git. Existem outras como GitLab e Bitbucket. (no github o repositorio precisa ser de codigo aberto, logo, todos podem ver seu codigo, caso queira um codigo privao tem como mas tem que pagar, o bitbucket tem como ter privado de graça)
//-----------------------------------------------------------------------------------------------------

    // Git Setup

        // Instalar o Git - https://git-scm.com/
        
        // Configurar Nome - $ git config --global user.name "Seu Nome"
        
        // Configurar Email - $ git config --global user.email "email@gmail.com"
//-----------------------------------------------------------------------------------------------------

    // Git Comandos

        // $ git init - Inicia um repositório

        // $ git add style.css - Adiciona o arquivo style.css ao index do git. Com o $ git add -A, adicionamos todos os arquivos.

        // $ git status - Mostra os arquivos que tiveram mudanças. 
        
        // $ git commit -m 'Descrição' - Irá fazer fazer o commit do código adicionado com uma mensagem.
//-----------------------------------------------------------------------------------------------------

    // Branching
        // Branch - Uma das principais vantagens do git é a possibilidade de criarmos 'ramificações'. Assim podemos trabalhar em funcionalidades adicionais para um projeto, sem modificarmos o 'ramificação princpal', o master.

        // o tronco da arvore é a main/master e o galho é a branch, se usa o branch para quando for trabalhar em equipe todo mundo não mexer em várias coisas e bagunçar tudo, logo, se cria uma branch, ela passa por aprovação e depois se une ao tronco/main/master por meio de um merge.

        // comandos:
            
            // $ git branch nomebranch - Toda vez que formos adicionar uma nova funcionalidade, devemos iniciar criando um novo branch ao invés de fazermos alterações direto no master. O que for modificado no branch não afetara o master.

            // $ git checkout nomebranch - Irá mudar de branch. Podemos usar o atalho $git checkout -b novobranch, assim ele cria e muda de branch ao mesmo tempo.

            // $ git branch - Mostra os branch's criados.
//-----------------------------------------------------------------------------------------------------

    // Workflow   
        // Sempre crie um branch - Toda funcionalidade nova, crie um branch para desenvolver a mesma. $ git checkout -b feature1

        // Após o desenvolvimento e commit, vá até o master e veja se existem mudanças - $ git checkout master e $ git pull

        // Volte para o branch e dê um merge com o master - $ git checkout feature1 e depois $ git merge master

        //Conflitos - Se existirem conflitos você será avisado e deverá lidar com os mesmos

        // Git Push - Após lidar com os conflitos faça o push do branch: $ git push e $ git push --set-upstream origin feature1.


        // um exemplo prático de como seria na pratica é:

            // a pessoa que for trabalhar com vc para pegar o projeto a primeira coisa que tem que fazer é clonar o repositório (git clone https://enderecodorepositorio), depois usa o cd e vai pra pasta clonada e trabalha.
            
            //depois de trabalhar o ideal é ir na master para ver se tem alguma atualização (obs: se usar o git status ele não vai puxar pq a alteração é online), para atualizar o master e ver se teve alguma alteração tem que usar o git pull.

            // basicamente, vc cria uma branch (checkout), trabalha no código, adiciona o codigo (git add -A) à branch, faz o commit (git commit -m 'alterei x coisa') para identificar a alteração, git status (para conferir) e depois com a autorização do manager faz o merge, ou seja, junta a branch (galho) na master (tronco), usando o 'git merge master' (estando na pasta da branch). Depois de conferir se não teve nenhuma divergencia entre o seu arquivo que fez o merge com o da master (o vs code mostra caso exista divergencia) aí se faz o git push (push é para subir o arquivo online)

            // obs: no final geralmente o pessoal faz o merge e o pull e depois exclui a branch porque aquilo já foi resolvio e pra não ficar um monte de branchs. a pessoa que fez o commit continua tendo a branch na maquina e para deletar da maquina tbm basta usar o 'git branch -d nomedabranch'

            //depois de tudo ao fazer o pull da master já virá o projeto com as alterações feitas.
//-----------------------------------------------------------------------------------------------------

    // Mais Git
        // gitignore - Lista de arquivos que não devem ser manipulados pelo git. node_modules é um bom exemplo.

        // Commit sem texto - Ao usar o $ git commit você entra no modo completo de comentário, com um editor de texto direto na linha de comando. Utilize esc + :wq para sair do mesmo.

        // Bitbucket - Permite repositórios privados e gratuitos. https://bitbucket.org/product
//-----------------------------------------------------------------------------------------------------

    // processo para criar um novo repositorio:
        // no terminal na pasta do arquivo: cd pasta correta; git init; git add -A (se quiser dar um git status pra ver se foi tudo); git commit -m 'primeiro commit projeto refatornando'.
        // depois, no git hub: cria um repositorio; publica o repositorio; vai no github e pega o git remote (o link do site, no caso: git remote add origin https://github.com/alexmonteirodev/animais-fantasticos.git); git push -u origin master 


        // cria a branch para trabalhar: git checkout -b 'refatorar-scrollsuave'; depois de desenvolver o codigo, na pasta da branch faz o git add -A e o comit git commit -m 'scrollsuave transformado em class' (se não fizer o commit e voltar para a main, vai perder as oisas que fez); faz o checkout pra main, da o git pull pra ver se teve alguma mudança na main e depois faz o checkout de volta pra pasta e da o merge na main e depois o git push (ao fazer o push, o terminal vai mandar um comando git pra por no ar, setupstream, aí usa ele).
        //depois vai no github e aprova o pull request, merge, e deleta a branch.
        //para visualizar melhor assistir a aula refatorar scroll suave origamid a partir dos 15 min.
        // Dpois volta na main de da o git pull pra atualizar o projeto inteiro




                                               



                                           

