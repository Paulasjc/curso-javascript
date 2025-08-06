// Exportación de módulos. permite que podamos exportar funicones, etc para poder utilizarlo en otros ficheros. Encapsulamiento

// es un fichero

// SIEMPRE QUE ESTEMOS EJECUTANDO CON NODE.JS TENEMOS QUE CAMBIAR LA EXTENSION DEL FICHERO: MJS
// OTRA SOLUCIÓN: HACER UN PACKAGE.JSON - INDICANDOLE QUE SON DE TIPO MODULO, CON ESTO SI LOS FICHEROS SON JS FUNCIONA

// Exportar funciones - añadir export
export function add(a,b){
    return a+b
}

console.log(add(5,10))


// Propiedades

// Exportar constante

export const PI = 3.1416

// Exportar variable
export let name = "paula"

// Exportación por defecto. quizas queremos exportar una osla funcion - TIENE QUE SER ÚNICA, no puede haber más de una. - solo funciones. no una varible.
export default function substract(a, b){
    return a - b
}

// Exportacion de clases

export class Circle {
    constructor(radius){
        this.radius = radius
    }
    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }
}

// Clase por defecto

export default MyClass {
    funcA(){
        console.log("Mi clase")
    }
}