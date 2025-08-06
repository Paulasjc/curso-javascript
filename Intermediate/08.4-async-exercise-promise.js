// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".


console.log("Ejercicio 4");

// Primera tarea (1 segundo)
function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Primera tarea completada");
            resolve("Resultado de primera tarea");
        }, 1000);
    });
}

// Segunda tarea (2 segundos)
function secondTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Segunda tarea completada");
            resolve("Resultado de segunda tarea");
        }, 2000);
    });
}

// Tercera tarea (1.5 segundos)
function thirdTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tercera tarea completada");
            resolve("Resultado de tercera tarea");
        }, 1500);
    });
}

firstTask()
    .then(result1 => {
        console.log("→", result1);
        return secondTask();
    })
    .then(result2 => {
        console.log("→", result2);
        return thirdTask();
    })
    .then(result3 => {
        console.log("→", result3);
        console.log("Todas las tareas se completaron correctamente.");
    })
    .catch(error => {
        console.log("Error en alguna tarea:", error);
    });



// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
async function executeTasks() {
    try {
        const result1 = await firstTask();
        console.log("→", result1);

        const result2 = await secondTask();
        console.log("→", result2);

        const result3 = await thirdTask();
        console.log("→", result3);

        console.log("Todas las tareas se completaron correctamente.");
    } catch (error) {
        console.log("Error durante la ejecución de tareas:", error);
    }
}

// Ejecuto la función
executeTasks();
