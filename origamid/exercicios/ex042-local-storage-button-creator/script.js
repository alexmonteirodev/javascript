
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
    saveValues(name, value)
}

function showCss(params) {
    cssText.innerHTML = '<span>' + btn.style.cssText.split(';').join(';</span><span>') //cssText é do prototype de style
}

//obs: para salvar os valores e a pg atualizar e o usuário perder a edição feita, da pra salvar os valores no browser dele, usando localStorage:

function saveValues(name, value) { //f que salva as preferencias no local storage
    localStorage[name] = value
}

function setValues(params) { //f para setar as preferencias quando recarregar a pg (aplicar os valores guardados)
    const properties = Object.keys(localStorage)
    console.log(properties)
    properties.forEach((propertie) => {
        constroles.elements[propertie].value = localStorage[propertie] //aqui só muda nos controles, note que quando escolhe uma cor e atualiza a pg a cor permanece mas o botão reseta, isso acontece porque o método que linka os controles com o botão é o 'change' e tudo acontece só quando acontece o change, então para mander salvo o botão tbm, é preciso:
        
        handleStyle[propertie](localStorage[propertie])
    })
    showCss()
}
setValues()