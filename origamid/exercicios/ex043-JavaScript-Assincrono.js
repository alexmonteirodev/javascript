
                                    // JavaScript Assíncrono

    //Síncrono vs Assíncrono

        //Síncrono: Espera a tarefa acabar para continuar com a próxima. (ex: escrever console.log, o js vai esperar monstrar o console.log e passa pra prox linha)

        //Assíncrono: Move para a próximo tarefa antes da anterior terminar. O trabalho será executado no 'fundo' e quando terminado, será colocado na fila (Task Queue).

        //Exemplos: setTimeout, Ajax, Promises, Fetch, Async.
//-----------------------------------------------------------------------------------------------------

    //Vantagens:

// Carregamento no Fundo: Não trava o script. É possível utilizar o site enquanto o processamento é realizado no fundo. (ex: se tem uma animação que acontecerá depois de 3s, ele não vai travar o carregamento da pagina pra mostrar a animação e depois seguir)

// Função ao término: Podemos ficar de olho no carregamento e executar uma função assim que ele terminar.(ex: pode carregar uma img de forma assincrona e depois que carregar, mostrar no site)

// Requisições ao Servidor: Não precisamos recarregar a página por completo à cada requisição feita ao serviro. (ex: facebook antigamente pra mandar um msg teria que mandar e atualizar a pagina para enviar pro servidor e com o js assincrono da pra fazer sem ter que recarregar a pagina)
