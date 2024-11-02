
                                        // Dropdown Menu

    // É aquilo que quando você passa o mouse por cima de um item do nav ele abre um sub menu com outras opções.

    //para criar basta fazer um ul dentro de um li (ex linha 21 do html)

//-------------------------------------------------------------------------------------------------------

    //foi feito em css a animação do dropdown e toda a estilização e com mouse funciona tudo. O problema é para mobile que fica bugado então em js, foi feito de uma forma para que quando a pessoa clique o dropdown apareca e quando clique fora ele suma para ficar bom para os dois, desktop e mobile.
//-------------------------------------------------------------------------------------------------------

//explicação:

// const dropdownMenus = document.querySelectorAll('[data-dropdown]')

// dropdownMenus.forEach((menu) => {
//     ['click', 'touchstart'].forEach((eachEvent) => {
//         menu.addEventListener(eachEvent, handleClick)
//     })
//         /*
//     macete: o de cima é a mesma coisa que passar os dois eventos, porém passa em uma array:

//     params.addEventListener('click', HandleClick)
//     params.addEventListener('touchstart', HandleClick) //evento de mobile que é quando inicia o ato (mesma coisa que click mas mais rapido e otimizado para mobile)
//     */
// })

// function handleClick(event) {
//     event.preventDefault()
//     // console.log(event)
//     this.classList.add('active') //this = menu (dica, para saber o que é o this, segue ele => this>event>HandleClick>menu). toggle é a mesma coisa que add mas se clicar dnv ele remove, porém como depois tem que remover quando for add o 'eachEvent', é melhor deixar o add.
//     outsideClick(this, () => {
//         this.classList.remove('active')
//     })
// }

// function outsideClick(element, callback) { //f que verifica se o click foi do lado de fora (a idéia é ser uma f que verifica se está clicando no html menos no dropdown)
//     const html = document.documentElement
//     html.addEventListener('click', handleOutsideClick)

//     function handleOutsideClick(event) { //f está dentro de 'outsideClick' pq só é pra funcionar quando o outsideClick for iniciado
//         // console.log('html')
//         if (!element.contains(event.target)){//verificação pra saber se o elemento que está sendo clicado está fora do dropdown
//             callback() //esse callback está servindo de parametro (element = this; callback = function) para a a function do outsideclick que está dentro da function handleClick
//         }  
//         // console.log(element.contains(event.target)) - da true quando clica no dropdown e false quando clica fora
//         // console.log(element)
        
//     }
// }
// //já está funcionando mas os eventos estão recriando (inspecionar - event listners) e para otimizar de forma que os eventos não sejam criado a cada click, vamos apagar o evento após ser utilizado como se mostra no código acima. Ou seja, ao remover a class tbm vai remover o evento, porque não precisamos mais dele.

//assim: 
// if (!element.hasAttribute(outside)) {
//     html.addEventListener('click', handleOutsideClick)
//     element.setAttribute(outside, '')
// }


// function handleOutsideClick(event) { 
//     if (!element.contains(event.target)){
//         element.removeAttribute(outside)
//         html.removeEventListener('click', handleOutsideClick)
//         callback() 
//     }
// }


//obs: a function que verifica se foi o click, fora do lugar foi colocada na pasta outside-click para ser reaproveitada e importada aqui.