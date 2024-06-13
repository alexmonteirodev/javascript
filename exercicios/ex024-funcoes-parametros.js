/*
O correto é fazer assim:
function soma(n1,n2) {
    return n1 + n2
    
}

console.log(soma(2,5))
*/

//porém, caso seja passado só um valor o JS somaria o valor passado + undefined porque a outra var não foi definida e isso = NaN:
/*
O correto é fazer assim:
function soma(n1,n2) {
    return n1 + n2
    
}

console.log(soma(2))
*/

//para resolver isso, pode-se fazer parametros pré-definidos, por exemplo, para contronar isso, posso dizer que caso o parametro não seja passado o valor da var vai ser 0:

function soma(n1=0,n2=0) {
    return n1 + n2 
}

console.log(soma(2))