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
    this.classList.toggle('active') //this = menu (dica, para saber o que é o this, segue ele => this>event>HandleClick>menu). toggle é a mesma coisa que add mas se clicar dnv ele remove
}