var car = 'mercedes'

switch (car) {
    case 'mercedes': //leia-se: caso, esse carro seja mercedes, faça isso.
        console.log('mercedes is beautiful!')
        break;
    case 'ferrari':
        console.log('ferrari is very red!')
        break;
    case 'tesla':
        console.log('Tesla is very smart!')

    default:
        console.log('I dont know this car')
        break;
}