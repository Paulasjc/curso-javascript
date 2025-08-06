// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

console.log('Ejercicio 3')

function verificarNumeroSimple(num){
    return new Promise((resolve, reject) => {
        // Verificar que sea un número:
        if(typeof num != 'number' || isNaN(num)){
            reject('Error: el valor proporcionado no es un número válido.')
            return;
        }

        // Verificar si el número es entero
        if(!Number.isInteger(num)){
            reject("Error: el número debe ser un número entero")
            return;
        }

        if(num%2===0){
            resolve('El número es par')
        } else{
            reject(' El número es impar')
        }
    })
}

verificarNumeroSimple(3).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})

//  alternativa ejercicio 3 - considerando que par o impar no es error.

function verificarNumero(numero){
    return new Promise((resolve, reject) => {
        // Verificar que sea un número:
        if(typeof numero != 'number' || isNaN(numero)){
            reject('Error: el valor proporcionado no es un número válido.')
            return;
        }

        // Verificar si el número es entero
        if(!Number.isInteger(numero)){
            reject("Error: el número debe ser un número entero")
            return;
        }

        // Si entonces es un número válido comprobamos si es par o impar
        const esPar = numero%2 ===0
        // objeto con toda la información del número:
        const resultado = {
            numero: numero,
            esPar: esPar,
            tipo: esPar ? 'par' : 'impar',
            mensaje: `El número ${numero} es ${esPar ? 'par' : 'impar'}`
        }

        // resultado
        resolve(resultado) // tanto par como impar son válidos.
    })
}

// probar usando then().catch()
verificarNumero(3.14)
    .then(msg => {
        console.log("Éxito:", msg);
    })
    .catch(err => {
        console.log("Error:", err);
    });

verificarNumero(4)
    .then(resultado => {
        console.log('Exito', resultado.mensaje)
        console.log('Detalles', resultado)
    })
    .catch(error => ('Error', error))




// Task3 Genera envío
function task3(callback){
    console.log("Generando orden de envío ...")
    setTimeout(() => {
        console.log("Orden de envío generada - Pedido completado")
        callback()
    }, 1000)
}

// Ejecutar las tareas en secuencia: callabck 'cuando termines haz..' - Esto sería callback hell**
task1(() => {
    task2(() => {
        task3(() => {
            console.log("Todas las tareas han sido completadas.")
        })
    })
})
