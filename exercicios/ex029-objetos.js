var amigo = {
    nome: 'josé',
    sexo:'M',
    peso: '85.4',
    engordar(p=0){ //TypeOff Function
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2) //funçoes dentro de variaveis
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)






// console.log(typeof amigo): array também é classificado como objeto.