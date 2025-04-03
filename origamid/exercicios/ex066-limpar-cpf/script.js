

const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map(element => element.innerText);
}

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
}

const substituiCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  })
}

substituiCPFS(cpfsList);


//explicação:

// const cpfsList = document.querySelectorAll('.cpf li')

// // ao invés de usar a function declaration pode usar a function expression. abaixo se usa a declaration
// function elementsInnerText(elements) { //transformando para array
//   //mesma coisa que transformar numa array usando: const arrayCpfs = [...cpfs], da no mesmo se usar o from
//     const arrayElements = Array.from(elements)
//     return arrayElements.map(element => { //retornando array nova e falando com cada elemento
//       return element.innerText
//     })
// }
// console.log(elementsInnerText(cpfs))


// const limparCpf = (cpf) => { //function expression (obedece hierarquia do codigo)
//   return cpf.replace(/[ .-]/g, '') //limpar tudo que for espaço, ponto e traço. da pra usar o /D que é todo caracter não numérico
// } 
// console.log(limparCpf('111.111.111-11')) //11111111111


// const construirCPF = (cpf) =>{
//   return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4') //isolou por grupos e capturou, depois só usou como se fosse uma templatestring
// }
// console.log(construirCPF('11111111111')) //111 111 111 11


// const formatarCPFS = (cpfs) =>{
//   // return cpfs.map(cpf => {
//   //   return limparCpf(cpf)
//   // })
//   //mesma coisa que:
//   return cpfs.map(limparCpf).map(construirCPF) //retorna array entao da pra seguir com outro map
// }
// const resultado = elementsInnerText(cpfs)

// console.log(formatarCPFS(resultado))


// const substituiCPFS = (cpfsElements) =>{
//   const cpfs = elementsInnerText(cpfs)
//   const cpfsFormatados = formatarCPFS(cpfs)
  
//   cpfsElements.forEach((element, index) => {
//     element.innerText = cpfsFormatados[index]
//   });
// }
// substituiCPFS(cpfsList)