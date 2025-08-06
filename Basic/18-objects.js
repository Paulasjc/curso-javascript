// Objects (no primitivos)

// Coleccion de datos relacionados. Son clave-valor + funcionalidades

// clave: objetos, datos primitivos..

/*
Características
 */

// Sintaxis
// Crear variable. se define { clave: valor}
// la instancia es única creo una persona con esos datos

let person = {
    name: "Paula",
    age: 31,
    alias: "paau"
}


console.log(typeof person.age)

// Acceso a propiedades
// notación punto
console.log(person.name)

// Notación de corchetes - accediendo a la clave.
console.log(person["name"])

/*
Los objetos se pueden modificar */

person.name = "pau"
console.log(person.name)

// Cambio de tipo de dato

person.age = "31"
console.log(person.age)

console.log(typeof person.age)

// Modificación de propiedades

// Eliminar propiedad

delete person.age
console.log(person)

// añadir una propiedad
person.email = "paausj@gmail.com"

console.log(person)

// Acceso por corchetes
person["age"] = 30

console.log(person)


// Métodos - funciones.

let person2 = {
    name: "AA",
    age:50,
    alias: "AAAAA",
    walk: function(){
        console.log("La persona camina")
    }
}

person2.walk()

// Anidación de objetos
// añadir objeto dentro del objeto person3
let persona3 = {
    name: "BBBB",
    age: 78,
    alias: "EEEEEEEEEEEEEEE",
    walk: function(){
        console.log("La persona 3 camina")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function(){
            console.log(`La persona con ${this.exp} años de experiencia trabaja`)
    }
    }
}
/*
this
buena practica - hacer referncia a this en los objetos.
this hace referencia a l objeto del cual se encuentra, en este caso se encuenta en job, no accede fuera. solo podria conocer name, exp que es donde se encuentra. */

console.log(persona3)
console.log(persona3.name)
console.log(persona3.job)
console.log(persona3.job.name)
persona3.job.work()


// Igualdad de objetos
// Voy a crear un objeto con los mismos datos que la persona1

let person4 = {
    name: "pau",
    alias: "paau",
    email: "paausj@gmail.com",
    age: 30
    
}
// Referencia en memoria diferente, nunca van a ser 'iguales'. Se pueden comparar propiedades:
console.log(person.name == person4.name) // true
console.log(person)
console.log(person4)

// Se pueden recorrer propiedades - ITERACIÓN
// Cuando iteramos accedemos a las claves 
for(let key in person4){
    console.log(key + ":" + person4[key])
}
// para acceder al valor tendria que acceder al objeto[key]



// podemos utilizar objetos como funciones - constructor, objeto que puede ser util si quiero crear multiples instancias.
// Esto se debe hacer en clases.
function Person(name, age){
    this.name = name,
    this.age = age
}

let persona5 = new Person("Paula", 31)
console.log(persona5)