// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let array1 = [1, 2, 3, 4, 5]

let [num1, num2 ] = array1


// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [variable1 = 0, variable2, variable3 ] = array1

// 3. Usa desestructuración para extraer dos propiedades de un objeto
// Crear objeto

let person = {
    name: "AAA",
    age: 40,
    email: "a@email.com"
}

let {name, age} = person

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes


let { name: name1, age:age1} = person
console.log(name1)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let casa = {
    piso: 4,
    exterior: true,
    habitacion : {
        numero: 5,
        cama: "simple",
        ventana: true
    }
}

let { habitacion: {numero, cama}} = casa

// 6. Usa propagación para combinar dos arrays en uno nuevo

array1 = [1, 2, 3, 4, 5]
let array2 = [4, 6, 9,30]

let array3 = [...array1,...array2]
console.log(array3)


// 7. Usa propagación para crear una copia de un array

let array4 = [...array3]
console.log(array4)

// 8. Usa propagación para combinar dos objetos en uno nuevo


let objeto2 = {...person, ...casa}

console.log(objeto2)
// 9. Usa propagación para crear una copia de un objeto

let objeto3 = {...person}

// 10. Combina desestructuración y propagación

let personaCompleta = {
  nombre: "Lucía",
  edad: 28,
  ciudad: "Sevilla",
  profesion: "Ingeniera"
}

// Extraemos `nombre` y usamos spread para guardar el resto:
let { nombre, ...restoDatos } = personaCompleta

console.log(nombre)         // Lucía
console.log(restoDatos)     // { edad: 28, ciudad: "Sevilla", profesion: "Ingeniera" }
