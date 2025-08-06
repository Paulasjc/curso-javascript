// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

function waitSeconds(segundos){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Se imprime después de tres segundos con éxito')
            resolve()


        }, segundos*1000)
    })
}

async function ejecutarEspera() {
     await waitSeconds(3);
     console.log('Tiempo finalizado')
}

ejecutarEspera()

/*
Se llama a la función ejecutarEspera.

Dentro de ejecutarEspera, está el await waitSeconds(3):

Esto pausa la ejecución de ejecutarEspera hasta que la promesa que devuelve waitSeconds(3) se resuelva.

waitSeconds(3) se ejecuta:

Crea una nueva promesa.

En esa promesa se ejecuta setTimeout, que espera 3 * 1000 milisegundos (3 segundos).

Cuando pasan esos 3 segundos, se ejecuta la función dentro del setTimeout:

Primero imprime en consola: 'Se imprime después de tres segundos con éxito'.

Luego se llama a resolve(), que indica que la promesa terminó correctamente.

Como la promesa se resolvió, el await en ejecutarEspera termina su pausa y continúa con la siguiente línea.

Imprime 'Tiempo finalizado' en consola. */