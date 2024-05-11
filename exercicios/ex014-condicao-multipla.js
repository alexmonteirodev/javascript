var agora = new Date()
var diasem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

console.log(diasem) //se fose usar o if ia ter mto aninhamento e como os dias da semana são elementos fixos (o js entende como numeros/elementos) que nunca se alteram é melhor usar um switch;

switch (diasem) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça')
        break;
    case 3:
        console.log('Quarta')
        break; 
    case 4:
        console.log('Quinta')
        break;
    case 5:
        console.log('Sexta')
        break;
    case 6:
        console.log('Sábado')
        break;
    default:
        console.log('[Erro] Dia invalido')
        break;
}
// switch é bom para valores pontuais, ou seja, 0, 1, se fosse o caso de usar por exemplo: se o dia for entre 0 e 8, seria melhor usar um if;
//ao lado do case, só se aceita numeros inteiros e strings;