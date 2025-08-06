// Aritméticos
console.log(5+2)
console.log(5-3)
console.log(9*5)
console.log(6/2)
console.log(8%6)
console.log(8**5) // Exponente

let a = 5
let b = 8
// Incremento
a++
console.log(a)

// Decremento
b--
console.log(b)

// Operadores de asignación
let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable **= 2

// Operadores de comparación
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 4)
console.log(a == 6) // Igualdad por valor
console.log(a == "6") // Igualdad por valor. Esto aunque sea una cadena de texto JavaScript sabe interpretar el valor y lo da por bueno.
console.log(a == a)
console.log(a === a) // Igualdad por identifaf (por tipo y por valor)
console.log(a === 6) // a a nivel de identidad tiene el valor de 6? sí. a vale 6 y 6 es un numero, coinciden (tipo y valor)
console.log(a === "6") // False porque 6 no es un int es un string.
console.log(a != 6) // falso
console.log(a !== "6")  // a es distinto de 6 a nivel de identidad?? True

// 0 es falso
// 1 es true
// 2 es true
// 0 = "" true

// Truthy values (valores verdaderos)

// Todos os numeros positivos y negativos menos cero.
// Todas las cadenas de texto menos las vacías
//  boolean true

// Falsy values (valores falsos)
// 0
// null
// undefined
// NaN
// el boolean false
// Cadenas de texto vacías

// Operadores lógicos : comparan valores booleano. Identifico si una expresion es verdadera o falsa.
// and (&&) - si las dos son falsas el resultado es false.
// - si las dos son verdaderas es true
// - si una es verdadera y otra false, el restado es false.
console.log(5 > 10 && 15 > 20)

// OR (||)
//  si se cumple minimo una de las comparaciones el computo general será verdadero.
// si todas son falsas será falso.
console.log(5 > 10 || 15 > 20)

console.log(5 > 10 && 15 > 20 || 30 < 40) // True porque. 5 es mayor que 10? NO - false, y 15 es mayor que 20? No, condicion && false pero OR 30 es menor que 40 ? sí pues cmo una es true, el computo es true.

// not (!)
console.log(!(5 > 10 && 15 > 20)) // si niego su valor, lo invierto, de false, pasa a true.
console.log(!(5 > 10 || 15 > 20))


// Operadores ternarios
// permiten escribir una condición

const isRaining = false
// accedo a la constante, se forma de la ? : si la condicion se cumple: se va a ejecutar lo que está por DELANTE de ':', si no se cumple lo que está detrás de ':'
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")