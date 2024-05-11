var agora = new Date()
var hora = agora.getHours() //como pegar as horas em tempo real do script que está rodando no momento, se tiver rodando no cliente, é a hora do cliente, se for no servidor é a hora do servidor.
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18){ //ler - if= "se...""; else if = "e se"; else = "se não"
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
}