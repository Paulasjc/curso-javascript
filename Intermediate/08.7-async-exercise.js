// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
// console.log("Inicio")
// setTimeout(() => console.log("setTimeout ejecutado"), 0)
// Promise.resolve().then(() => console.log("Promesa resuelta"))
// console.log("Fin")


/*
Primero se imprimiría 'Inicio', luego 'Fin', porque son códigos síncronos
Después aparecería 'Promesa resulta' porque es asíncrona, se ejecuta como microtarea, por eso 
va despues de la tarea princiapl (inicio y fin)
Por último, 'setTimeout ejecutado' porque estaría en la cola de tareas (macrotask), esto se ejecuta 
depués del código principal y de las microtask */