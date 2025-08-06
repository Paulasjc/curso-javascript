// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.


// ejemplo función cargar imagen del perfil - simula carga d e una imagen que tarda 2 segundos.

function cargarImagen(){
    console.log('Cargando imagen...')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulo que salió bien:
            console.log('Imagen cargada con éxito')
            resolve('Imagen cargada')

        },2000)
    })
}

// ejemplo función obtener datos del usuario desde una API - simulación llamada API que tarda 1 segundo.

function obtenerDatos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Obtención de datos correcta')
            resolve('Datos obtenidos')
        }, 1000)
    })
}

// ejemplo funcion3 - cargar notificaciones del usuario -  tarda 1.5 segundos.

function cargarNotificacion(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Notificaciones cargadas')
            resolve('Notificaciones cargadas')
        }, 1500)
    })
}

Promise.all([cargarImagen(), obtenerDatos(), cargarNotificacion()])
    .then(resultados => {
        console.log('Todas las promesas resueltas: ')
        console.log(resultados) // Mostrará mensajes devueltos de las funciones.
    })
    .catch(error => {
        console.log('Alguna promesa falló: ', error)
    })