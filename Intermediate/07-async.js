// Asincronía

// Mecanismos para hacer que el código se ejecute de forma asíncrona
// utiliza las web APIs de los navegadores para dotarse de esa capacidad asincrona.
// Si es fuera del navegador web, se puede usar un entorno de ejecución como Node.js

// Event Loop (Bucle de eventos)
// Es el mecanismo que permite que el código se ejecute de forma asíncrona. Componentes:

// 1. Call Stack (Pila de ejecución): donde se ejecutan las tareas de forma secuencial.
// 2. Web API o Node.js: donde se ejecutan las tareas de forma asíncrona.
// 3. Task Queue: donde se almacenan las tareas de forma asíncrona. y Microtask Queue: donde se almacenan las tareas de forma asíncrona.
// Cuando el call stack está vacío, el event loop pasa a la task queue y ejecuta las tareas de forma secuencial.


// Flujo del event loop:
// 1. Ejecutar lo que hay en Call Stack. 
// 2. Operaciones asíncronas - Si hay una tarea asíncrona, se pasa a la Web API o Node.js.
// 3. Cuando la operación termina lo coloca en Task Queue o MicroTask Queue.
// 4. El event Loop va a revisar si el call stack está vacío, si está vacío mueve las tareas del MicroTask Queue o Task Queue al call stack (para poder ejecutarlas)
// 5. El proceso se repite.


// Código asíncrono: mecanismos para ejecutar código de forma asíncrona

// 1. Callbacks: funcion que recibe otra función como argumento y se ejecuta cuando la tarea asíncrona termina.

console.log('Inicio')

setTimeout(() => {
    console.log('Esto se ejecuta');
}, 2000) // se ejecuta después de 2 segundos

console.log('Fin')

// Al ejecutar el código, el 'Inicio' se ejecuta, luego el 'Fin' y por último el 'Esto se ejecuta'
//  Problema del callback: Callback Hell - si tenemos que ejecutar varias tareas asínconas anidadas, el código se vuelve ilegible.

// Ejemplo de callback hell:

function step1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado")
        callback()
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado")
        callback()
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado")
        callback()
    }, 1000)
}
// anidando las funciones de forma secuencial - no es recomendable, no legible
step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados")
        })
    })
})

// 2. Promesas: representa el resultado de una operación que aún no ha terminado, pero que terminará en el futuro

// para crearla 'Promise' se necesita una función que recibe dos argumentos: resolve y reject.
// simular un funcion que puede o no funcionar .
const promise = new Promise((resolve, reject) => {
    setInterval(() => {
        const ok = true
        // si ok es true, se resuelve la promesa, si es false, se rechaza la promesa
        if(ok){
            resolve("Operación completada")
        } else {
            reject("Operación fallida")
        }

    }, 4000)
})
// notificar que la operacion de la promesa se completó con éxito
promise
    .then(result =>{
        console.log(result)
    }).catch(error => {
        console.log(error)

    })

// si da error, el bloque que se invoca es catch

// - encademamiento de promesas:

function step1Promise(){
    return new Promise((resolve) => {
        // simulamos
        setTimeout(() => {
            console.log("Paso 1 con promise completado")
            // tenemos acceso a resolve. Quitamos reject porq se va a ejecutar.
            resolve()
        }, 1000)
    })
}

function step2Promise(){
    return new Promise((resolve, reject) => {
        // simulamos
        setTimeout(() => {
            console.log("Paso 2 con promise completado")
            resolve()
        }, 1000)
    })
}

function step3Promise(){
    return new Promise((resolve, reject) => {
        // simulamos
        setTimeout(() => {
            console.log("Paso 3 con promise completado")
            resolve()
        }, 1000)
    })
}

// llamo a step1, este llamará a then cuando se ejecute 'resolve' y llamo a step2, y cuando este se cumpla puedo llamar al resultado y podre llamar al step 3.
step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(()=> {
    console.log("Todos los pasos con promise completados.")
})

// Async/Await - codigo asíncrono de una forma mucho más clara
// Por ejemplo, tenog una funcion que imprime inicio del proceso y fin del proceso, 
// palabra reservada 'async'
// función que simula la espera

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function process() {

    console.log("Inicio del proceso async")

    await wait(5000)
    console.log("Proceso después de 5 segundos.")

    await wait(1000)
    console.log("Proceso después de 1 segundos.")

    await wait(2000)
    console.log("Proceso después de 2 segundos.")

    console.log("fin del proceso async")
    
}

process()

// ** la palabra 'async' convierte una función en asíncrona, y la palabra 'await' pausa la ejecución hasta que en este caso la promise se resuelva.