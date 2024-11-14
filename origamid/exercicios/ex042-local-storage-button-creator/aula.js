                                    
                                    // Local Storage
    
    // clicando em inspecionar e em application, você tem acesso as ferramentas de Storage. Storage é uma forma de armazenamento.

    // O padrão da web sempre foram os cookies que basicamente, é um texto armazenado na sua máquina, e através dele, o site consegue definir por exemplo: o cookie vai dizer pra máquina que da última vez que você acessou o site, você filtrou por melhores ofertas, então agora abrir o site eé já vai filtrar pelas melhores ofertas.

    //Também existem o Local Storage e o Session Storage:

        //Session Storage: acontece quando está com a sessão aberta (janela/browser aberto) e ele vai salvando enquanto você está fazendo, se por acaso você atualizar a página as informações da sua edição (do botão) ainda estarão alí.

        //Local Storage: já no Local Storage, se fechar a pagina, os valores vão permanecer salvos na sua máquina, sempre. (só vai limpar se a pessoa for no cache da máquina e limpar)
//-------------------------------------------------------------------------------------------------------

    // Local Storage
        // É um objeto em que você pode add propriedades e valores nele:

        localStorage.nome = 'andre'
        console.log(localStorage.nome) //andre

        //obs: caso apague isso do script.js, quando abrir novamente e ser consoloe.log, o nome ainda vai estar lá. (porque ficou armazenado) Para limpar: inspecionar, application, localstorage e clica no sinal de proibido estacionar.

        // É assim que o André salva por exemplo em que aula que eu parei no site da origamid. E isso é uma mão na roda pq ao invés de ter que ter um banco de dados para salvar essas pequenas preferencias, ele usa o armazenamento da máquina do usuário. Outro exemplo é salvar qual o tempo do vídeo em que o usuário parou, ele consegue salvar na máquina do usuário sem sujar o seu banco de dados, pq essa informação não é relevante para ele e sim para o usuário.