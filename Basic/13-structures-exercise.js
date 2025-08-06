// Ejercicios de estructuras


// 1. Crea un array que almacene cinco animales

let arrayAnimales = ["perro", "gato", "tortuga", "conejo", "cabra"]
console.log(`Los animales del array son: ${arrayAnimales}`)

// 2. Añade dos más. Uno al principio y otro al final

// al inicio:

arrayAnimales.unshift("oveja")
console.log(arrayAnimales)


// al final - push
arrayAnimales.push("aveztruz")
console.log(arrayAnimales)

// 3. Elimina el que se encuentra en tercera posición
arrayAnimales.splice(2,1)
console.log(arrayAnimales)

// 4. Crea un set que almacene cinco libros
let setLibros = new Set(["Cumbres borrascosas", "Corte de niebla y furia", "Corte de espinas y rosas", "El principito", "La casa de los espíritus"])
console.log(setLibros)

// 5. Añade dos más. Uno de ellos repetido
console.log(setLibros.add("El mago de Oz"))
console.log(setLibros.add("Orgullo y prejuicio"))
// No se puede añadir mismo valor.


// 6. Elimina uno concreto a tu elección
setLibros.delete("El principito")
console.log(setLibros)

// 7. Crea un mapa que asocie el número del mes a su nombre
let mapMeses = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"],
])
console.log(mapMeses)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mapMeses.has(5))
console.log(mapMeses.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano


mapMeses.set("arrayMesesVerano", ["junio", "julio", "agosto"])

console.log(mapMeses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let arrayFrutas = ["sandía", "kiwi", "papaya", "kiwi"]

let setFrutas = new Set(arrayFrutas)

let mapFrutas = new Map([
    ["frutas", setFrutas]
])

console.log(mapFrutas)
