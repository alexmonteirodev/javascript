var valores = [8,1,7,4,2,9]

// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    
// }

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// for in, é otimizado pelo ECMA para variaveis compostas e objetos (só funciona com eles)
/*
as duas maneiras são corretas.
*/