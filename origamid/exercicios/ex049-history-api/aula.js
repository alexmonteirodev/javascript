                                                
                                                //History API

    //History
        //serve para controlar o histórico da sessão. (é aquele botão de voltar e ir pra frente do browser)

        //É possível acessarmos o histórico de acesso do browser em uma sessão específica através do window.history. O objeto history possui diferentes métodos e propriedades.

        console.log(window.history) //length são os itens/paginas do historico


//-----------------------------------------------------------------------------------------------------
        
    // Métodos:

        // window.history.back() //volta para pg anterior

//-----------------------------------------------------------------------------------------------------

        // window.history.forward() //vai para proxima pg
//-----------------------------------------------------------------------------------------------------

        //window.location //objeto do window que contem a url da pg atual
//-----------------------------------------------------------------------------------------------------

        // window.history.pushState(obj, title, url) //coloque algo no estado do history
        
            // A parte interessante de manipularmos o history é que podemos modificar o histórico e adicionar um novo item. window.history.pushState(obj, title, url).

            // Em obj podemos enviar um objeto com dados mas o seu uso é restrito por isso geralmente utilizamos null. O title ainda é ignorado por alguns browsers, também utilizamos null nele. O url que é parte importante.

            //window.history.pushState(null, null, 'sobre.html'); //altera a url


            //o pushState não serve pra muita coisa sozinho, mas se combinar com o fetch, serve bastante

//-----------------------------------------------------------------------------------------------------
    
    //popstate
        //O evento popstate pode ser adicionado ao objeto window. Assim podemos executar uma função toda vez que o usuário clicar no botão de voltar ou próximo.
/*
        window.addEventListener('popstate', () => {
            // fetchPage(window.location.pathname)
            console.log('teste');
        })
*/
//-----------------------------------------------------------------------------------------------------

    //Fetch e History
        //Ao puxarmos dados via fetch api, o url da página continua o mesmo. Ao combinar fetch com a history api conseguimos simular uma navegação real entre páginas, sem a necessidade de recarregamento da mesma.

        // O código abaixo replica a função de voltar e avançar do browser nativa, porém ao usar voltar/avançar de forma nativa, o browser tem que fazer uma requisição pro servidor e isso faz com que a pg tenha que ser recarregada, e com o código abaixo, não é preciso, ele muda de pagina sem ter que recarregar a pagina, deixando uma experiencia mais fluida e add uma animação ao trocar de pagina, por exemplo

        const links = document.querySelectorAll('a')

        links.forEach((link) => {
            link.addEventListener('click', handleClick)        
        })

        function handleClick(e) {
            e.preventDefault()
            fetchPage(e.target.href)
            window.history.pushState(null,null, e.target.href)
        }

        async function fetchPage(url) {
            // console.log(url)
            document.querySelector('.content').innerHTML = 'Carregando...' //feedback de carregamento
            const pageResponse = await fetch(url)
            // console.log(pageResponse)
            const pageText = await pageResponse.text()
            // console.log(pageText)
            replaceContent(pageText)
        }

        function replaceContent(newText) {
            const newHtml = document.createElement('div')
            newHtml.innerHTML = newText
            // console.log(newHtml)

            const oldContent = document.querySelector('.content')
            const newContent = newHtml.querySelector('.content')

            oldContent.innerHTML = newContent.innerHTML //substitui pg sem dar refresh na pagina
            document.title = newHtml.querySelector('title').innerText //substitui o title da pg
        }

        window.addEventListener('popstate', () => {
            // console.log(window.location.href)
            fetchPage(window.location.href)
        })