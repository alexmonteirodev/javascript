var x = '' //string vazia sempre é false

console.log(!!x) //maneira de verificar se é true or false

var y = 0

console.log(!!0) //0 sempre é false

//null e undefined sempre são false
var z = null
var w = undefined
console.log(!!z)
console.log(!!w)

// listas e objetos (vazios) são true (para checar se a lista vazia usar o .length > 0)
var array = []
var object = {}
console.log(!!array)
console.log(!!object)