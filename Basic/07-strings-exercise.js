// 1. Concatena dos cadenas de texto
let nombre = "Paula"
let apellido = "San José"
console.log(nombre + " " + apellido)

// 2. Muestra la longitud de una cadena de texto
console.log(apellido.length)

// 3. Muestra el primer y último carácter de un string
console.log(apellido[0])
console.log("El último caracter es: " + apellido[7])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(nombre.toUpperCase())
console.log(apellido.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let cadenaVariasLineas = `Hola, estoy
estudiando un curso de JavaScript
el profesor es MoureDev`
console.log(cadenaVariasLineas)

// 6. Interpola el valor de una variable en un string
console.log(`Hola soy ${nombre} ${apellido} y estoy aprendiendo JavaScript`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadenaConGuiones = cadenaVariasLineas.replace(/\s/g, "-")
console.log(cadenaConGuiones)

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(apellido.includes("San"))

// 9. Comprueba si dos strings son iguales
console.log(nombre === apellido)
console.log(apellido === apellido)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(nombre.length === apellido.length)