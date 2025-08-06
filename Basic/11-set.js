// Set

// declaración
let mySet = new Set()

// Inicializacion
mySet = new Set(["Paula", "San José", 31, "paausj@gmail.com", "Madrid", "Valladolid"])
console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("holiwiiiiiiiiiiiiiii") // Se añade al final
console.log(mySet) // se mantiene la ordenacion de los elementos, por eso lo añade la final.

mySet.delete("holiwiiiiiiiiiiiiiii") // HAY QUE INDICAR EL VALOR DEL ELEMENTO QUE QUIERO BORRAR.
console.log(mySet)
// NO TENEMOS EL ACCESO AL INDICE.

// has
mySet.has("Paula")
console.log(mySet)