export default function initAnimaNumeros(params) {
    
}

const numeros = document.querySelectorAll('[data-numero]')


numeros.forEach((params) => {
    const total = +params.innerText

    const incremento = Math.floor(total/100) //floor serve para arredondar os numeros para inteiros

    let start = 0
    const timer = setInterval(() => { //repare que a arrow, fura o escopo e busca o params do forEach
        start += incremento //start = start + incremento
        params.innerText = start //para mostrar na pagina e não no console
        if (start > total) {
            params.innerText = total //pq no  if (start > total) pelo incremento o numero passa então, isso serve para ele voltar ao numero correto
            clearInterval(timer)
        }
    }, 25)
})