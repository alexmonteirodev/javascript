                                            // Factory Function - 2

    // Exemplo real usando factory function tentando imitar o funcionamento de um jquery
        // 
//-----------------------------------------------------------------------------------------------------

function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements)

    function hide() {
        elements.forEach((element) => {
            element.style.display = 'none'
        })
        return $$(selectedElements) // para poder encadear e usar por ex: $$('button').hide().elements, porque sem esse return ele retorna undefined
    }

    function show() {
        elements.forEach((element) => {
            element.style.display = 'initial'
        })
        return this // this é o objeto, ou seja this == $$(selectedElements)
    }

    function on(onEvent, callback) {
        elements.forEach((element) => {
            element.addEventListener(onEvent, callback)
        })
        return $$(selectedElements)
    }

    function addClass(className) {
        elements.forEach((element) => {
            element.classList.add(className)
        })
        return $$(selectedElements)
    }

    function removeClass(className) {
        elements.forEach((element) => {
            element.classList.remove(className)
        })
        return $$(selectedElements)
    }

    return{
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass,
    }
}
const btns = $$('button')
console.log($$('button').elements)
//$$('button').hide() - esconde elementos
//$$('button').hide().show() - mostra elementos e com o return na função é possivel encadear e não usar somente: $$('button').show()

$$('button').on('click', handleClick) //assim não preciso criar várias funções 'on' para vários elementos, só aproveito o $$

function handleClick(e) {
    console.log(e.target)
}

$$('button').addClass('ativo')