// 1. Crea una función que retorne a otra función

function retornarFuncion(){ // función de orden superior porque retorna otra funcion
    return function saludo(){
        console.log("Hola, soy una función dentro de una función")
    }
}

const funcionSaludo = retornarFuncion()
funcionSaludo()



// 2. Implementa una función currificada que multiplique 3 números

// Recordamos: Currying: transformar una funcion con varios parámetros en una secuencia de funciones que reciben un solo parámetro.
// Primero hago una funcion que se encargue de multiplicar - rest

function multiplicar(...numbers){
    let result = 1
    for(let n of numbers){
        result *=n
    }
    return result
}

function curryMultiplicar(a){
    return function(b){
        return function(c){
            return multiplicar(a,b,c)
        }        
    }
}

const multiCurry = curryMultiplicar(2)
console.log(multiCurry(6)(8))



// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

// Recursividad: una funcion que se llama a si misma.

function potencia(base, exponente){
    if(exponente ===0){
        return 1
    }
    return base * potencia(base, exponente-1)
}

console.log(potencia(2,3))
console.log(potencia(5,0))


// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado


// Clouseres( Clausuras): ocurrre cuando una funcion que es interna a otra funcion va a cceder a variables d ela funicon externa

function createrCounter(valorInicial){
    let counter = valorInicial
    return{
        increment(){
            counter++
        },
        decrement(){
            counter--
        },
        getValue(){
            return counter
        },
        reset(){
            counter = valorInicial
        }
    }
}


const counter = createrCounter(10)
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.getValue())
counter.reset()
console.log(counter.getValue())



// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier


// funcion que sume los numeros
function sum(...numbers){
    let resultado = 0
    for(let n of numbers){
        resultado +=n
    }
    return resultado
}

function sumManyTimes(multiplier, ...numbers){
    const suma = sum(...numbers)
    return suma * multiplier

}

const funcion5 = sumManyTimes(3, 1,2,3,4,5)
console.log(funcion5)

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// callback - una funcion que se pasa como parametro a otra funcion.

function ejercicio6(numbers,callback){
    const resultadoSuma = sum(...numbers)
    callback(resultadoSuma)
}
function procesarResultado(resultado){
    console.log(resultado)
}

const callbackSum = ejercicio6([9,7,8,3], procesarResultado)


// 7. Desarrolla una función parcial
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


// 8. Implementa un ejemplo que haga uso de Spread
const nombres = ["Juan", "Maria", "Pedro", "Ana"]
function saludar(nombre1, nombre2){
    console.log(`Hola, ${nombre1} y ${nombre2}`)
}

console.log(saludar(...nombres))

// 9. Implementa un retorno implícito

const sumar = (a, b) => {
    return a + b;
  }
  
  // función con retorno implícito
  const sumar2 = (a, b) => a + b;
  
  console.log(sumar(3,4));  // 7
  console.log(sumar2(3,4)); // 7



// 10. Haz uso del this léxico
const obj = {
    nombre: "Ana",
    saludar: function() {
      // función tradicional: tiene su propio this
      setTimeout(function() {
        console.log("Hola, " + this.nombre); // aquí this NO es obj, es undefined o window
      }, 1000);
  
      // función flecha: hereda this de saludar, que es obj
      setTimeout(() => {
        console.log("Hola, " + this.nombre); // aquí sí accede a obj.nombre
      }, 1500);
    }
  }
  
  obj.saludar();
  
