// RECURSIVIDADE: Recursão acontece quando uma função chama ela mesma:

function fatorial(n) {
    if (n!==0) {
        return n * fatorial(n-1)
    } else {
        return 1
    }
}
console.log(fatorial(5))


/*
5! = 5 x 4 x 3 x 2 x 1 
5! = 5 x 4!
n! = n x (n-1)!

obs: a não ser que seja o fatorial de 1 porque o fatorial de 1! = 1
*/