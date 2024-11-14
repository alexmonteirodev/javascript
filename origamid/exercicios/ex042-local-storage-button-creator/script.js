
const constroles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')


const handleStyle = {
    element: btn,
    backgroundColor(params) {
        this.element.style.backgroundColor = params
    },
    height(params){
        this.element.style.height = params + 'px'
    },
    width(params){
        this.element.style.width = params + 'px'
    },
    texto(params){
        this.element.innerText = params
    },
    color(params) {
        this.element.style.color = params
    },
    border(params) {
        this.element.style.border = params
    },
    borderRadius(params){
        this.element.style.borderRadius = params + 'px'
    },
    fontFamily(params){
        this.element.style.fontFamily = params
    },
    fontSize(params){
        this.element.style.fontSize = params + 'rem'
    },
}

constroles.addEventListener('change', handleChange)

function handleChange(e) {
    const name = e.target.name //pega o name(atributo) de acordo com o elemento 
    const value = e.target.value
    console.log(name, value)

    handleStyle[name](value) // mesma coisa que ex: handleStyle.height(x)
    showCss()
}



function showCss(params) {
    cssText.innerHTML = '<span>' + btn.style.cssText.split(';').join(';</span><span>') //cssText é do prototype de style
}

//obs: para salvar os valores e a pg atualizar e o usuário perder a edição feita, da pra salvar os valores no browser dele, usando localStorage