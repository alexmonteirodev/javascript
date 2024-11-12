
const constroles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')

constroles.addEventListener('change', handleChange)

function handleChange(e) {
    const name = e.target.name //pega o name(atributo) de acordo com o elemento 
    const value = e.target.value
    console.log(name, value)
    btn.style.backgroundColor = value
}