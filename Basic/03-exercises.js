// 1. Escribe un comentario en una línea

// Esto es un comenrario de una linea

// 2. Escribe un comentario en varias líneas

/*
Esto es un 
comentario
de 
varias
lineas
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
// 7 tipos de datos:
// string
let name = 'Paula'
// int
let edad = 31
// boolean
let soyEstudiante = true
let tengoTresTrabajos = false
// Undefined
let email 

// null
let domicilioFiscal = null

// Symbol 
let dni = Symbol('71171386W')

// BigInt
let numeroEnorme = BigInt(3456789765435678976543567876543567)

// 4. Imprime por consola el valor de todas las variables
console.log(name)
console.log(edad)
console.log(soyEstudiante)
console.log(email)
console.log(domicilioFiscal)
console.log(dni)
console.log(numeroEnorme)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof(name))
console.log(typeof(edad))
console.log(typeof(soyEstudiante))
console.log(typeof(email))
console.log(typeof(domicilioFiscal))
console.log(typeof(dni))
console.log(typeof(numeroEnorme))


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
name = 'Pau'
edad = 30
soyEstudiante = false
email 
domicilioFiscal = Symbol("CALLE FALSA")


console.log(typeof(name))
console.log(typeof(edad))
console.log(typeof(soyEstudiante))
console.log(typeof(email))
console.log(typeof(domicilioFiscal))



// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

name = 31
edad = 'Tengo 30 años'
soyEstudiante = undefined
email = null
domicilioFiscal = Symbol("CALLE FALSA")


console.log(typeof(name))
console.log(typeof(edad))
console.log(typeof(soyEstudiante))
console.log(typeof(email))
console.log(typeof(domicilioFiscal))

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const string = ' constante'
const int = 0
const booleano = false
const booleano2 = true
//const valorInfenidido // Error, debe inicializarse el valor.
const valorNulo = null
const tiposymbol = Symbol("Constante tipo Symbol")
const bigInt = BigInt(34567898765435678987654)


// 9. A continuación, modifica los valores de las constantes - ESTO DA ERROR
//const string = ' constante2'
//const int = 01
//const booleano = true
//const booleano2 = false
//const valorInfenidido // Error, debe inicializarse el valor.
//const valorNulo = null
//const tiposymbol = Symbol("Constante tipo Symbol 2")
//const bigInt = BigInt(3456789876543567898765465746799)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse