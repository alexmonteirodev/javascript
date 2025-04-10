export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }
  // lógica consite em usar o css .slide transform: translate3d(Xpx,0px,0px), para fazer o carrosel andar de acordo com o translate3d no eixo x. pra isso, tem que add o evento de mouse click e depois de clicado, o mouse move (pro slide não ficar mexendo sem ter clicado) e atualizar isso com o translate3d:

  onStart(event) {
    event.preventDefault();
    console.log("mouseDown");
    this.wrapper.addEventListener("mousemove", this.onMove); //add dentro do onstart pra só começar a contar depois que clicar. se add no addSlideEvents, ao colocar o mouse dentro do slide, já ia contar. porém agora se tirar o mouse da div e recolocar ele continua disparando e por isso se usa o onEnd.
  }

  onMove(event) {
    console.log("moveu");
  }

  onEnd() {
    console.log("acabou");
    this.wrapper.removeEventListener("mousemove", this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
