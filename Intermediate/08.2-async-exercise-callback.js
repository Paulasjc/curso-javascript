// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
// por ejemplo - proceso de pedido
console.log('Ejercicio 2')

// la task1 simula verificación de inventario
function task1(callback){
    console.log("Verificando inventario...")
    setTimeout(() => {
        console.log("Inventario verificado, producto disponible")
        callback()
    }, 1000)
}
// Task2 se encargará de procesar el pago

function task2(callback){
    console.log("Procesando pago...")
    setTimeout(() => {
        console.log("Pago procesado con éxito")
        callback()
    }, 1000)
}

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
