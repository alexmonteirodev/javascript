export default class ValidarCpf{
    //formatar cpf:
    constructor(element){
        this.element = element
    }
    limpar(cpf){ //limpa cpf
        return cpf.replace(/\D/g ,'')
    }
    construir(cpf){ //formata o cpf para o padrão xxx.xxx.xxx-xx
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    }
    formatar(cpf){ // junta limpar com construir
        const cpfLimpo = this.limpar(cpf)
        return this.construir(cpfLimpo)
    }
    validar(cpf){ //valida se é um cpf válido ou não. por ex: confere se tem 11 digitos
        const matchCpf = cpf.match(/(?:\d{3}[ .-]?){3}\d{2}/g)
        return (matchCpf && matchCpf[0]===cpf) //retorna true se a quantidade de numeros do input value for o mesmo do cpf capturado. Isso serve para caso a pessoa introduza 2 cpfs de uma vez no input, porque se não tivesse isso, o regex iria validar porque estaria conferindo o primeiro e depois o segundo. o matchCpf && serve para nao dar null caso coloque 3 digitos '111'.
    }

    //parte do formulário:
    adicionarEvento(){
        this.element.addEventListener('change', () => { //arrow para furar o escopo e alcançar o this do constructor
            this.validarNaMudanca(this.element)
        })
    }
    validarNaMudanca(cpfElement){
        if (this.validar(cpfElement.value)) {
            cpfElement.value = this.formatar(cpfElement.value)
        } else {
            
        }
        console.log(this.validar(cpfElement.value))
    }
    iniciar(){
        this.adicionarEvento()
        return this //tem que retornar algo para não dar undefined
    }

}