        //EXERCÍCIOS:

        // Retorne no console todas as imagens do site:
        const imgs = document.querySelectorAll('img') //nodelist
        console.log(imgs)
        //ou
        // const imgs = document.getElementsByTagName('img') //HTMLCollection
        // console.log(imgs)


        // Retorne no console apenas as imagens que começaram com a palavra imagem
        const imgStartWithImage = document.querySelectorAll('img[src^="imgs/imagem"]') //como se fosse um array '[posicao do index]' para selecionar os itens dentro de 'img' e o '^' é para definir todos os itens que comecem com ...
        console.log(imgStartWithImage)

        // Selecione todos os links internos (onde o href começa com #)
        const LinksInternos = document.querySelectorAll('a[href^="#"]') //tag[jeitoque^="começa"]
        console.log(LinksInternos) // ^ significa: comecem com...
        // Selecione o primeiro h2 dentro de .animais-descricao
        const animaisDescricao = document.querySelectorAll('.animais-descricao h2')[0]
        console.log(animaisDescricao)
        // Selecione o último p do site
        const paragrafos = document.querySelectorAll('p')
        console.log(paragrafos) //25 (lengh)
        console.log(paragrafos[paragrafos.length-1])
        //ou
        // const ultimoP = document.querySelector('.copy p') - assim é olhar e colocar mas caso não queira contar, fazer da forma acima
        // console.log(ultimoP)