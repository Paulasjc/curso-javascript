// TIPOS DE DATOS
// Primitivos - datos en los que se fundamenta nuestra interacion con el lenguaje. son básicos e inmutables. representan un solo valor.
// son 7 tipos

// String
let name = "Paula"
let arias = 'Pau'
let email = `paau@gmail.com`

// Números - enteros y decimales
let age = 31
let altura = 1.52

// Booleano (boolean)
let haceCalor = true
let haceFrio = false

// Undefined: hemos creado la variable pero no le hemos asociado el valor. 'no definido'. se usa cuando declaramos pero no hemos inicializado la variable.
let underfinedValue
console.log(underfinedValue) 

// Null - represneta que intencionadamente estoy indicando que hay ausencia de valor, despues ya se verá.
let nullValue = null

// Symbol - valores únicos inmutables que pueden ser utilizados como indicadores únicos evitando colisiones.

let mySymbol = Symbol("mysymbol")

// BigInt - representar un numero extremadamente grande (solo números enteros)
let myBigInt = BigInt(8523462983648235482548325823587487)
let myBigInt2 = 8523462983648235482548325823587487986584935n

// Mostramos tipos de datos
console.log(typeof name)
console.log(typeof email)
console.log(typeof haceCalor)
console.log(typeof underfinedValue)
console.log(typeof nullValue) // objeto de tipo null.
console.log(typeof mySymbol)
console.log(typeof BigInt)