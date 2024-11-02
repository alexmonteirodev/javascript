export default function dropdown(params) {
    
}

const dropdownMenus = document.querySelectorAll('[data-dropdown]')

dropdownMenus.forEach((menu) => {
    ['click', 'touchstart'].forEach((eachEvent) => {
        menu.addEventListener(eachEvent, handleClick)
    })
        /*
    macete: o de cima é a mesma coisa que passar os dois eventos, porém passa em uma array:

    params.addEventListener('click', HandleClick)
    params.addEventListener('touchstart', HandleClick) //evento de mobile que é quando inicia o ato (mesma coisa que click mas mais rapido e otimizado para mobile)
    */
})

function handleClick(event) {
    event.preventDefault()
    // console.log(event)
    this.classList.add('active') //this = menu (dica, para saber o que é o this, segue ele => this>event>HandleClick>menu). toggle é a mesma coisa que add mas se clicar dnv ele remove, porém como depois tem que remover quando for add o 'eachEvent', é melhor deixar o add.
    outsideClick(this, function () {
        this.classList.remove('active')
    })
}

function outsideClick(element, callback) { //f que verifica se o click foi do lado de fora (a idéia é ser uma f que verifica se está clicando no html menos no dropdown)
    const html = document.documentElement
    html.addEventListener('click', handleOutsideClick)

    function handleOutsideClick(event) { //f está dentro de 'outsideClick' pq só é pra funcionar quando o outsideClick for iniciado
        // console.log('html')
        if (!element.contains(event.target)){//verificação pra saber se o elemento que está sendo clicado está fora do dropdown
            callback() //esse callback está servindo de parametro (element = this; callback = function) para a a function do outsideclick que está dentro da function handleClick
        }  
        // console.log(element.contains(event.target)) - da true quando clica no dropdown e false quando clica fora
        // console.log(element)
        
    }
}