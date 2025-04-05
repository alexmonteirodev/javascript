export default function initModal(params) {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  //no console se digitar direto ele não aparece porque só ta exportando a function mas se por no console.log aparece: (caso isso esteja fora da função initModal que é a que está sendo exportada)

  //console.log(botaoAbrir,botaoFechar,containerModal)
  //-------------------------------------------------------------------------------------------------------

  //para funcionar o modal precisamos de:

  // abrir o modal
  botaoAbrir.addEventListener("click", abrirModal);
  function abrirModal(event) {
    event.preventDefault();
    containerModal.classList.add("ativo");
  }

  // fechar o modal
  //clique no x
  botaoFechar.addEventListener("click", fecharModal);
  function fecharModal(e) {
    e.preventDefault();
    containerModal.classList.remove("ativo");
  }

  //clique fora do modal
  containerModal.addEventListener("click", clickForaModal);
  function clickForaModal(e) {
    if (e.target === this) fecharModal(e); //if de uma linha só não precisa abrir {}
  }
  //aqui acontece que o containerModal é o pai e tem os elementos dentro então ao clicar fora ou dentro do elemento ainda está clicando no elemento pai de tabela e por isso tem que isolar no if pra que feche o modal quando clicque somente no containerModal e não nos filhos.

  if (botaoAbrir && botaoFechar && containerModal) {
    //se essas const existirem, faça isso, senão pula. isso serve pra se algum dia não for detectado essas const por algum motivo, o js não dar erro e travar e assim ele segue o código
  }
}

//obs: poderia usar o toggle que add e remove a class para usar apenas duas funções e deixar o codigo menor. Assim, se otmimiza a função porque é menos linha de codigo pro js ler. (ao inves de usar abrirModal e fecharModal, poderia usar toggleModal e mudar o add do classlist para toggle)
