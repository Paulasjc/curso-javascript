// 1. Crea una variable para cada operación aritmética
// Operadores aritméticos: +, -, *, /, %, **
let a = 10
let b = 6

let suma = a+b
let resta = a - b
let multiplicacion = a * b
let division = a / b
let modulo = a % b
let exponencial = a ** b


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// operadores de asignación: +=, -=, *=, **=, /=
let incremento = a + 2
let decremento = b - 2
let multi = a*5
let expo = b**4
let div = a/3

console.log(incremento)
console.log(decremento)
console.log(multi)
console.log(expo)
console.log(div)


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(1 < 3)
console.log(1 == 1)
console.log(1 != 3)
console.log(3 > 1)
console.log(3 === 3)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(1 > 3)
console.log(1 == 3)
console.log(1 != 1)
console.log(3 < 1)
console.log(3 === 1)


// 5. Utiliza el operador lógico and

console.log(5 > 3 && 8 > 5) // true

// 6. Utiliza el operador lógico or
console.log(5 < 3 || 8 > 5) // true

// 7. Combina ambos operadores lógicos

console.log(5 > 3 && 8 > 5 || 2 < 1)

// 8. Añade alguna negación
console.log(!(5 > 3 && 8 > 5) || 2 < 1)

// 9. Utiliza el operador ternario

const esDeDia = true
esDeDia ? console.log("Apaga la luz") : console.log("Enciende la luz")

// 10. Combina operadores aritméticos, de comparáción y lógicas