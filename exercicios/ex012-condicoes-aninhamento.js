var idade = 66
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}



//o jeito acima não é a única opção de fazer isso, faça do seu jeito!
//se usar o console.log('vota') no else, o aninhamento nesse caso seria ùtil pois uma pessoa de 16 anos no Brasil pode votar, portanto ou teria que mudar a condição do if para 16 ou fazer um aninhamento.
