// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

console.log('Ejercicio 1')

function saludar(name, callback){
    setTimeout(() => {
        callback(name)
    }, 2000)

}

// Defino el callback que va a mostrar el saludo con el nombre
function mostrarSaludo(name){
    console.log(`Hola ${name}`)
}

// Usar la función
saludar('Lorena', mostrarSaludo)