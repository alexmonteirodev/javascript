export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = {
      finalPosition: 0,
      startX: 0, //startX serve para pegar a referencia inicial de onde o mouse clicou
      movement: 0,
    };
  }
  // lógica consite em usar o css .slide transform: translate3d(Xpx,0px,0px), para fazer o carrosel andar de acordo com o translate3d no eixo x. pra isso, tem que add o evento de mouse click e depois de clicado, o mouse move (pro slide não ficar mexendo sem ter clicado) e atualizar isso com o translate3d:
  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0px, 0px)`;
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6; //para deixar o movimento 1.6* mais rápido
    return this.dist.finalPosition - this.dist.movement; // - para inverter a posição do slide
  }

  onStart(event) {
    let moveType;
    if (event.type === "mousedown") {
      event.preventDefault();
      this.dist.startX = event.clientX;
      moveType = "mousemove";
    } else {
      this.dist.startX = event.changedTouches[0].clientX; //evento para capturar posicao6 do toque é diferente para mobile, 0 é o primeiro toque
      moveType = "touchmove";
    }
    this.wrapper.addEventListener(moveType, this.onMove); //add dentro do onstart pra só começar a contar depois que clicar. se add no addSlideEvents, ao colocar o mouse dentro do slide, já ia contar. porém agora se tirar o mouse da div e recolocar ele continua disparando e por isso se usa o onEnd.
  }

  onMove(event) {
    const pointerPosition =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX; //basicamente mesma coisa que o moveType mas agora para o onMove(), usando ternário
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    const moveType = event.type === "mouseup" ? "mousemove" : "touchmove";
    this.wrapper.removeEventListener(moveType, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("touchstart", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
    this.wrapper.addEventListener("touchend", this.onEnd);
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
