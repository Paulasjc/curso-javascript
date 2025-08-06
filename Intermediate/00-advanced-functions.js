// funciones avanzadas

// entidades que las podemos tratar como otro valor de un lenguaje, lo podemos almacenar en vriable, cosntante, objeto, lo podemos pasar ocmo paramtero a una funcion, lo podemos retornar en un fncion
// Ciudadanos de 1º clase tiene que cumplir estas condiciones

// Crear una funcion:

// podria guardar esta funcion en una variable o una constante


const greet = function (name) { // No hace falta ponerle el nombre de la funcion, pero si lo ponemos, podemos usarlo dentro de la funcion
    console.log(`Hola ${name}`);
}

greet("Paula")

// Sentido de guardar una funcion en una variable es que podemos pasarla como parametro a otra funcion. Referenciar o invocar a mi funcion con ese nombre

// Una función la podemos pasar como parametro a otra funcion:
// Esto es una funcion que recibe una funcion como parametro y la ejecuta
function processGreeting(greetFunction, name){
    greetFunction(name)
}

// Una funcion puede retornar otra funcion:
function returnGreeting(){
    return greet
}

processGreeting(greet, "Pau")
const greet2 = returnGreeting()
greet2("Aitor")

// Arrow functions avanzadas

// Características: arrow function con retorno implicito cuando el cuerpo de la función solo es una expresion
// por ejemplo tengo una arrow que toma como parametros a y b
const multiply = (a,b) => a*b // no necesito hacer un return, implicito
console.log(multiply(2,3))

// - this léxico

const handler = {
    name: "Paula",
    greeting: function(){
        console.log(`Hola ${this.name}`)
    },
    arrowGreeting: () => {console.log(`Hola ${this.name}`)} // este no hace referencia al name. Las funciones normales sí. las arrow crean su propio contexto de this
}

handler.greeting()
handler.arrowGreeting(); // Undefined. this lexico

// this es un contexto de ejecución, es el objeto que está ejecutando la función


// IIFE: Immediately Invoked Function Expression - Funciones autoejecutables - se ejecutan en el momento en el que se definen
// IIFE clásico - poner () al principio y al final de la funcion
// Las IIFE van por contexto de ejecución global - necesitan un ; al final de la funcion . linea 52

(function() {
    console.log("IIFE clásico")
})();


// IIFE con arrow function
(() => {console.log("IIFE con arrow function")} )();

// El sentid de las IIFE, obligar a ejecutar uncodgio en concreto y no contaminar el ambito global. Buena práctica. 
// Actualmente se usa menos, pero es bueno conocerlas.

// Parámetros Rest (...) - se usan para pasar un número indeterminado de parametros a una funcion- agrup a a los argumentos adicionales al array.

function sum(...numbers){
    let result = 0;
    for(let num of numbers){
        result += num;
    }
    return result;
}
console.log(sum(1,2,3,4,5)) // El parámetro Rest genera automaticamente un array con los argumentos adicionales.
// cuando no sé cuántos parámetros le voy a pasar, puedo usar el parámetro Rest.


// Operador Spread (...) - se usan para expandir un array en un número indeterminado de parametros

const numbers = [1,2,3,4,5]
function sumWithSpread(a,b,c,d,e){
    return a+ b +c +d +e
}

console.log(sumWithSpread(...numbers)) // el operador spread expande el array en un número indeterminado de parametros
// desempaquetar un array: separa los valores por separados y los pasa como parametros a la funcion
// el operador spread se usa para pasar un array como parametros a una funcion
// si por ejmplo la funcion toma solo 3 parámetros (a,b,c) y le paso un array con 5 elementos, solo se tomarán los 3 primeros
// si es menos - NaN
// si es más - se ignoran los valores adicionales
// el operador spread se usa para pasar un array como parametros a una funcion


// Clouseres( Clausuras): ocurrre cuando una funcion que es interna aotra funcion va a cceder a variables d ela funicon externa

function createCounter(){
    let counter=0
    return function executeCounter(){ // cada vez que se ejeuta va a retornar esta función
        counter++ // la funcion interna tiene acceso a la variable counter de la funcion externa
        console.log(`Contador: ${counter}`)
    }
    
}

const counter = createCounter()
counter()
counter()
counter()
counter()
// con esto ejecutamos la funcion 4 veces y el contador va a ir aumentando
// son utiles porque encapsulamos datos y al crear funciones globales somos capaces de recordar el estado (del counter) sin que se pierda el contexto y sin contaminar el scope global.
// Se ejecuta tantas veces como queramos.


// Recursividad: una funcion que se llama a si misma.
// siempre tenemos que limitar el contexto para que en algun momento deje de llamarse a si misma. una condición.
function factorial(n){
    if(n <= 1){
        return 1
    }
    return n * factorial(n-1)
}

console.log(factorial(5))



// Funciones parciales: dividir una funcion con varios parámetros en funciones mas pequñas que reciben parte de los parámetros.
// y retornan una nueva función que espera los siguientes parámetros.

function partialSum(a){
    return function(b,c){
        return sum(a,b,c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(2,3))
console.log(sumWith(1,2))


// Currying: transformar una funcion con varios parámetros en una secuencia de funciones que reciben un solo parámetro.
function currySum(a){
    return function(b){
        return function(c){
            return function(d){
                return sum(a,b,c,d)
            }
        }
    }
}

const sumAB = currySum(1)(2) // parametro a y b
const sumC = sumAB(3)
console.log(sumC(3)) 
console.log(sumC(4))
console.log(sumAB(5)(7))


// callback - una funcion que se pasa como parametro a otra funcion.

function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResult(result){
    console.log(result)
}

function processResult2(result){
    console.log(`Mi resultado es: ${result}`)
}

processData([1,2,3], processResult)
processData([1,2,3], processResult2)
// Explicacion: llamo a una función que recibe un array y una función como parametros. La funcion que le paso como parametro es el callback.
