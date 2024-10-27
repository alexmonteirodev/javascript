export default function tooltip(params) {
    
}

const tooltips = document.querySelectorAll('[data-tooltip]')
console.log(tooltips)

tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
})

function onMouseOver(e) {
    criarTooltipBox(this) //this faz referencia ao params do criarTooltipBox que é onde o evento onMouseOver ocorre
    console.log(e)
}

function criarTooltipBox(params) {
    const tooltipBox = document.createElement('div')
    const text = params.getAttribute('aria-label') //puxa o texto do elemento que ta passsando o mouse por cima
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    console.log(tooltipBox) //toda vez que passa mouse no mapa cria uma div com class tooltip e com texto dentro
}
//parei em 7:00 min
