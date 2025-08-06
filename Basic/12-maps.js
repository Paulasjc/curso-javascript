// Estructura MAP - diccionario - coleccion de elemntos, los elemtntos no son únicos, cada elemento esta formado por un par de clave-valor (key-value)
// Vale para poder relacionar los dos datos, key - buscaremos por ahí y veremos el valor asociado a esa clave.

// Declaracion

let myMap = new Map()

// Inicialización

myMap = new Map([
    ["nombre", "Paula"],
    ["email", "paausj@gmail.com"],
    ["edad", 31]
])

console.log(myMap)


// Métodos

// set - actualizar o agrgar un elemento

myMap.set("alias", "pau")
myMap.set("nombre", "paulasjc")
console.log(myMap)

// get - obtener los valores

console.log(myMap.get("nombre"))

// comprobar is una clave existe o no - has
console.log(myMap.has("surname"))
console.log(myMap.has("edad"))

// Keys, values, entries
// retorna un lista con claves - keys
console.log(myMap.keys())  // [Map Iterator] { 'nombre', 'email', 'edad', 'alias' }
console.log(myMap.values()) // [Map Iterator] { 'paulasjc', 'paausj@gmail.com', 31, 'pau' }
console.log(myMap.entries()) // muestra todas las claves y valores del map. 
/* [Map Entries] {
  [ 'nombre', 'paulasjc' ],
  [ 'email', 'paausj@gmail.com' ],
  [ 'edad', 31 ],
  [ 'alias', 'pau' ]
}*/

// SIZE - tamaño

console.log(myMap.size)


// delete
myMap.delete("alias")
console.log(myMap)

// si quiero eliminar todo el map

myMap.clear()
console.log(myMap)


console.log(myMap.size())