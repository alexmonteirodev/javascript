// Debounce

//sabe a distancia pela verificação da metade da tela - o topo, porém esse código roda a cada scroll, para otimizar isso, fizemos uma alteração em que cada section terá uma distância fixa e de acrodo com a posição da barra do scroll, faremos a animação. (aula 1110 - refazer animacao ao scroll)
// animaScroll() {
//   this.sections.forEach((params) => {
//     const sectionTop = params.getBoundingClientRect().top;
//     const isSectionVisible = sectionTop - this.metadeTela < 0;
//     if (isSectionVisible) {
//       params.classList.add("ativo");
//     } else if (params.classList.contains("ativo")) {
//       params.classList.remove("ativo");
//     }
//   });
// }
//O debounce para parar de ativar a função a cada scroll e ela performar melhor.

// O que o debounce faz é colocar a função na fila com settimeout e vai eliminar a função anterior toda vez que a função for ativada, até que ative apenas uma

//------------------------------------------------------------------------------
//ex: ativa o console.log, toda vez que da o scroll
function onScroll() {
  console.log("teste");
}

// window.addEventListener("scroll", onScroll);

//com debounce:

function debounce(callback, delay) {
  let timer;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      callback(...args);
      timer = null; //null serve pra ao invés de limpar direto o timer,agora só vai limpar quando existir alguma coisa no timer do clearTimeout
    }, delay);
  };
}

const debouncedScroll = debounce(onScroll, 200);

window.addEventListener("scroll", debouncedScroll);

//obs: no fundo no fundo é dar um delay para a função ocorrer, pq antes ao scrollar ja disparava diversas vezes e agora vai disparar apenas algumas vezes em um intervalo maior de tempo e isso economiza o processamento e otimiza o site.

//debounce é bom para eventos de scroll (scrolar a tela) e de resize (aumentar e diminuir a janela do browser) que são os eventos que disparam muitas vezes
