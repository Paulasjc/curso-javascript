// Estructuras de datos avanzadas

// Arrays avanzados : 

// Métodos de los arrays: (funcionales)

// forEach: ejecuta una funcion para cada elemento del array

let numbers = [1,2,3,4,5, 6]

numbers.forEach(element => console.log(element))

// map - crea un nuevo array pero aplicando una funcion a cada uno de los elementos del array.

let doubleArray = numbers.map(element => element * 2) // lo guardo en una variable porque se crea un nuevo array
console.log(doubleArray)

// filter - crea un nuevo array con los elementos que pasan una condicion - un filtro.

let numFilter = numbers.filter(element => element % 2 === 0)
console.log(numFilter)

// reduce - funcion reductora sobre cada elemento de un array - lo retorna todo a un unico valor.
let sumReduce = numbers.reduce((previous, current) => previous + current, 0) // en el previos tendré 1+2, ..
console.log(sumReduce)


// Manipulación de arrays:
// flat - aplana un array.
let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)


// flatMap - aplana un array y aplica una funcion a cada elemento.

let phrases = ["Hola mundo", "Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(" ")) // corta la cadena de texto en cada espacio y lo mete en un array.
console.log(words) // (4) ['Hola', 'mundo', 'Adiós', 'mundo']

// - Ordenación

// sort - orden alfabetico.

let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b)

console.log(sorted)


// reverse - invierte el orden de los elementos de un array.

sorted.reverse() // modifica el array original.
console.log(sorted)


// - Búsqueda

// includes - busca un elemento en un array.

console.log(sorted.includes(4))

// find - busca un elemento en un array y retorna el primer elemento que cumple la condicion.

console.log(sorted.find(element => element%2 === 0)) // sale 10 porque hicimos un reverse.
// si no encuentra ningun elemento - undefined

//  findInde - busca un elemento en un array y retorna el indice del primer elemento que cumple la condicion.

let firstEvenIndex =sorted.findIndex(element => element%2 === 0)
console.log(firstEvenIndex)
// si da -1 significa que no encontro ningun elemento que cumpla la condicion.

// Sets avanzados:

// Sets - son colecciones de valores unicos - NO admiten repetidos.

// sirven para realizar operaciones de conjuntos

// Crear un set:

let  numbersArray = [1,2,2,3,4,5,6,6]
// voy a crea runset que no tenga repetidos
//const numbersSet = new Set(numbersArray) - lo cambiopara que sea un arry:
numbersSet = [...new Set(numbersArray)]
console.log(numbersSet) // (6) [1, 2, 3, 4, 5, 6] creo un set
// si quiero utilizar los set para eleiminar los reptidos rapido pero no quiero un set, quiero seguir teniendo un array
// eliminacion de duplicados
// operador spread - agarra cada elemento del set y lo pasa al aarray - eso lo hago añadiendo los ... al Set

// Operaciones de conjuntos: union, interseccion y diferencia
// Unión de dos conjuntos
// creo dos conjuntos:
const setA = new Set([1,2,3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union) // (5) [1, 2, 3, 4, 5] Lo combino en un set y elimina los duplicados.

// Interseccion de dos conjuntos - donde se cruzan dos conjuntos, tiene que representar los elementos comunes de dos conjuntos. En este caso seria el 2 y el 3
// tendriamos un set con los valores 2 y 3 que son los comunes
// 1º tendria que acceder a un set, recorrer los elementos del set y buscar si cada uno de los elementos existe en otros.
// conviero el aet en un array para hacer un filter (aplico una condicion) que cada uno de los elemtnos de A sera une lemento del array si se encuenta en el setB

const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection) // (2) [2, 3]

// Diferencia de dos conjuntos - los elementos que estan en un conjunto pero no en el otro.

const difference = new Set([...setA].filter(element => !setB.has(element))) // aqui digo 'que NO está'

console.log(difference) // 1
// los elementos que están en uno pero no en el otro. No añade los que están en el setB.

// Conversión de Sets a Arrays:
// yo accedo al setA y si lo quiero convertir utilizo Spread, y lo convierto en un array.

//const setToArr = [...setA]
console.log([...setA]) // (3) [1, 2, 3]


// Iteración de Sets:

// forEach

setA.forEach(element => console.log(element))

// Maps avanzados: colecciones de tipo clave-valor

let myMap = new Map([
    ["name", "Juan"],
    ["age", 25],
    ["city", "Madrid"]
])

console.log(myMap)

myMap.forEach((value, key) => console.log(`${key} : ${value}`))

// - Conversión 
// De map a array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)


// Map a diccionario - objeto
const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap) // {name: 'Juan', age: 25, city: 'Madrid'}

// Objeto a mapa

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject) // Map(3) {size: 3, name => Juan, age => 25, city => Madrid}

// 


