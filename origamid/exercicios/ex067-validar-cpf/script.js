import ValidarCpf from './validar-cpf.js'

const cpf = document.querySelector('#cpf')
const validarCpf = new ValidarCpf(cpf).iniciar()

console.log(validarCpf)
//obs: foi criada a class e o constructor para poder usar as diferentes funções do validarCpf, além de iniciar e ele validar no input, da pra pegar a class e usar em outras coisas como caso queira pegar uma lista de cpfs e formatar pode usar o validarCpf.formatar(x).