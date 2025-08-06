// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
// 1º creo un array

let numbers = [1, 5, 78, 4, 9, 10]


// Repaso:
    //  map - crea un nuevo array pero aplicando una funcion a cada uno de los elementos del array.
    // La funcion que pongo es elevarlo al cubo.

    let numCubo = numbers.map(element => element**3)
    console.log(numCubo)

    // filter - crea un nuevo array con los elementos que pasan una condicion - un filtro.
    // La condición es que el numero sea impar.
    let numImpar = numbers.filter(elemento => elemento %2 !== 0)
    console.log(numImpar)

    // reduce - funcion reductora sobre cada elemento de un array - lo retorna todo a un unico valor.
    // vamos a hacer que se multipliquen todos los elementos del array.
    let reduceNumbers = numbers.reduce((previous, current) => previous * current, 1)
    console.log(reduceNumbers)


// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
let numCuboPares = numbers.map(element => element ** 3).filter(element => element %2 === 0)
console.log(numCuboPares)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
// Crear array anidado
const arrayanidado = [1, [1,2,[4,5,6,[7,8,9]]]]

// flat - aplana un array.
console.log(arrayanidado.flat()) // [1, 1, 2, Array(4)]
console.log(arrayanidado.flat(1))
console.log(arrayanidado.flat(2)) // [1, 1, 2, 4, 5, 6, Array(3)]

// flatMap - aplana un array y aplica una funcion a cada elemento. - no es para arrays anindados
const palabras = ["hola", "qué", "tal"];

const letras = palabras.flatMap(p => p.split(""));
console.log(letras)// ["h", "o", "l", "a", "q", "u", "é", "t", "a", "l"]



// 4. Ordena un array de números de mayor a menor
// por defecto se ordenan de menor a mayor, luego habria que hacer un reverse

let arrayOrdenado = numbers.sort((a, b) => b - a)
console.log(arrayOrdenado)



// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

// creo dos sets

let primerSet = new Set([1,2,3,4,4])
let segundoSet = new Set([4,5,6,7,7])

// unión : junta los dos sets y elimina los duplicados
let unionset = new Set([...primerSet, ...segundoSet])
console.log(unionset)

// Intersección -donde se cruzan dos conjuntos, tiene que representar los elementos comunes de dos conjuntos.
const interseccionSet =new Set([...primerSet].filter(element => segundoSet.has(element)))
console.log(interseccionSet)

// Diferencia - los elementos que están en un conjunto pero no en el otro.
const diferenciaSet = new Set([...primerSet].filter(element => !segundoSet.has(element)))
console.log(diferenciaSet)

// 6. Itera los resultados del ejercicio anterior

unionset.forEach(element => console.log(element)) // 1 2 3 4 5 6 7
interseccionSet.forEach(element => console.log(element)) // 4
diferenciaSet.forEach(element => console.log(element)) // 1 2 3



// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos

let mapUsuario = new Map([
    ["usuario1", {nombre: "Paula", edad: 31, email: "paausj@gmail.com"}],
    ["usuario2", {nombre: "Aitor", edad: 33, email: "aitor@gmail.com"}],
    ["usuario3", {nombre: "Ana", edad: 15, email: "ana@gmail.com"}]
])

mapUsuario.forEach((value, key) => {
    console.log(`Usuario ${key}:`)
    console.log(`  Nombre: ${value.nombre}`)
    console.log(`  Edad: ${value.edad}`)
    console.log(`  Email: ${value.email}`)
  })



// 8. Dado el mapa anterior, crea un array con los nombres

const arrayNombres = Array.from(mapUsuario.values()).map(value => value.nombre)
console.log(arrayNombres)

const arrayEmail = Array.from(mapUsuario.values()).map(value => value.email)
console.log(arrayEmail)


// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const arrayEmailMayores = Array.from(mapUsuario.values()).filter(value => value.edad >= 18).map(value => value.email)
console.log(arrayEmailMayores)


const setEmailMayores = new Set(arrayEmailMayores)
console.log(setEmailMayores)
console.log(typeof setEmailMayores)


// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

const objectMapUsuario = Object.fromEntries(mapUsuario) // Lo he convertido en un objeto.

// convertir el objeto en un mapa
// Creo un nuevo mapa
const newMapUsuario = new Map(Object.entries(objectMapUsuario)) // Devuelve un array con pares clave-valor

const nuevoMapaEmail = new Map(
    [...newMapUsuario].map(([key, usuario]) => [usuario.email, usuario])
  );
  console.log(nuevoMapaEmail);


  // aqui convierto el map en un array [...newMapUsuario] de pares clave-valor:
  /*
  [
  ['usuario1', { nombre: 'Paula', edad: 31, email: 'paausj@gmail.com' }],
  ['usuario2', { nombre: 'Aitor', edad: 33, email: 'aitor@gmail.com' }],
  ['usuario3', { nombre: 'Ana', edad: 15, email: 'ana@gmail.com' }]
]
 */

/* .map(([key, usuario]) => [usuario.email, usuario])
Por cada par [key, usuario] del array anterior, devuélveme un nuevo par donde:

la nueva clave es usuario.email

el nuevo valor es todo el objeto usuario */

