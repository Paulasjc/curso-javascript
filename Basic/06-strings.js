// Strings

let myname = "Paula"
let greeting = "hola " + myname + "!"
console.log(greeting)

console.log(typeof greeting)

// Longitud de la cadena de texto
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[9])

console.log(greeting.toUpperCase())
console.log(greeting.toLocaleLowerCase())
console.log(greeting.indexOf("Paula")) // Indice donde encuentra la palabra Paula  - 6. si pone -1 no encuenta el indice.
console.log(greeting.includes("Paula")) // Comprueba si existe 
console.log(greeting.slice(0,6)) // Imprime lo que incluye entr esos índices. - hola P
console.log(greeting.replace("hola", "Holita")) // reemplaza la primera por la segunda si la encuentra.

// Template literals (plantillas literales) - sirven para interporar variables o para crear strings de varias lineas
// usar ``

let mensaje = `Hola, este es mi
curso de JavaScript`
console.log(mensaje)
let email = "paausj@gmail.com"

// interpolacion de variables- USAR ``

console.log(`Hola, ${myname}. Tu email es: ${email}`)