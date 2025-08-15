// Importación de módulos
// hay que hacer referencia al nombre

import { add, PI, name, Circle } from "./28-export-modules.js";

// importacion - po defecto
import defaultImport from "./28-export-modules.js";

// importar función add fichero 28: import + nombre de lo que queremos importar + de donde

console.log(add(4,7))

console.log(PI)
console.log(name)

// Importacion por defecto
console.log(defaultImport(5,10))


// Importar clase
let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area())

// importar clase por defecto
// let myClass = new defaultImport()
// myClass.func()

// import proyecot modular en otra carpeta o lo que sea - path donde est el fichero.

// import {MyClass} from "./classes/MyClass.js"

