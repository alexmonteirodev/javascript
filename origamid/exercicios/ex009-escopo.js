// ESCOPO serve para evitar conflitos entre nomes de variáveis. (imagina pegar um código de alguem que usou nomes iguais aos seus e juntar os dois códigos, ia quebrar tudo)

//escopo em funções:
function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
  }
  
  mostrarCarro(); // Fusca no console
  console.log(carro); // Erro, carro is not defined

//exemplo 2:
var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca
// console.log(frase) //Erro porque está dentro da função

//exepmlo 3:
//escopo de função: (obs: comportamento de bloco na função é diferente)
function testandoEscopo(params) {
    var teste = 'var' //var confinada dentro do escopo da função
    let test = 'let'
    console.log(teste)
}
testandoEscopo() // 'var'
var test = 'var' // 'var'
// console.log(teste) //erro porque a var está dentro da função

//-------------------------------------------------------------------------------------------------------
// escopo de bloco: (variáveis criadas com 'var', vazam para fora do bloco. Por isso com o ES6 a melhor forma de declarar uma variável é utilizando 'const' e 'let', pois estas respeitam o escopo de bloco.)

if(true) { //abertura do bloco
    var carro = 'gol';
    console.log(carro);
    let car = 'marea'
    console.log(car)
  }//fechamento do bloco
  console.log(carro); // gol
//   console.log(car) //Erro - is not defined porque a let não vaza para fora do bloco e a var, sim.
//você não quer que a var vaze do bloco.

//exemplo 2:
//var moto; //pelo hoisting se a condicional for false a var continua vazando mas 
if(false) {
    var moto = 'z400';
    console.log(moto);
  }
  console.log(moto); // undefined
//-------------------------------------------------------------------------------------------------------

//escopo de loop:
var i = 50

for (let i = 0; i < 10; i++) { // se colocar var no lugar de let, vai vazar e ressecrever por cima e o resultado no console vai ser igual a 100
    console.log(`Número ${i}`)
}
  console.log(i*10) // 500
//-------------------------------------------------------------------------------------------------------

// const X let X var:

//VAR: vaza do bloco e pode ser mudada

//LET: não vaza do escopo e pode ser mudada (Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.)
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

//let ano = 2020; // erro, redeclarou a variável (não pode let com mesmo nome)

//CONST: não vaza do escopo e não pode ser mudada (Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.)
const mes = 'Dezembro';
//mes = 'Janeiro'; // erro, tentou modificar o valor
//const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
//data = 'Janeiro'; // erro

//-------------------------------------------------------------------------------------------------------

//EXERCÍCIOS:
// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4; 
    // vscode pinta de cinza escuro const e let para indicar que não está sendo utilizado caso o console log esteja fora do bloco.
  console.log(cor, marca, portas);
}
  // Como corrigir o erro abaixo?
  const dois = 2;
  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
      return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

  // O que fazer para total retornar 500?
  const numero = 50;
  
  for(let numero = 0; numero < 10; numero++) { //repare que const e let tem o mesmo nome mas escopos diferentes e o js entende isso, portanto o que acontecer dentro do bloco ele lê a let e fora se vai ler a constante
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  
