// Estructura de datos - array

// declaracion
let myArray = []

let myArray2 = new Array() // no recomendado.

myArray = ["Paula", "San José", 31, true] // Puedo almacenar en el mismo array diferntes tipos, string, numeros, boolean...

console.log(myArray)
myArray2 = new Array(3)
myArray2 = ["Paula", "San José", 31, "holiwii", "jejejejeje"]

console.log(myArray2)

// cambiar valor
myArray[0] = "Pau"
console.log(myArray)

// Métodos comunes aplicados al array
myArray.push("Cascón") // Sigue un orden creciente.
console.log(myArray)

// pop
myArray.pop() // elimina el ÚLTIMO elemento del array y lo devuelve.
console.log(myArray.pop())

// shift y unsift 
// unsif hay que pasarle elementos, agregar uno o mas elementos al array
myArray.unshift("Hola")
console.log(myArray)
myArray.shift() // Elimina el primer elemento
console.log(myArray)

// length . propiedad, no función. - longitud
console.log(myArray.length)

// Eliminar un array. HAY QUE INICIARLIZARLO A VACIO OTRA VEZ.
///myArray = []
//console.log(myArray)

// slice - yo acabo generand un nuevo array con el pedazo que yo quiero, por ejemplo solo quiero los ultimos elementos.
let newArray = myArray.slice(1,3) // el último inidcie no se iten en cuenta.

console.log(newArray)

// splice elimina los que estan entre los valores que pasamos. desde que indice quieres empezar 1, cuantos quieres eliminar, 3


let myArray3 = ["Paula", "San José", 31, "holiwii", "jejejejeje"]
let parteSlice = myArray3.splice(1, 3)
console.log(parteSlice)