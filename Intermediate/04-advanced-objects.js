// Objetos avanzados:

// - Prototipos

// Actualmente no se usan mucho, pero es importante conocerlos. Mecanismo por el cual los objetos pueden heredar propiedades de otros.

// Objetos avanzados

// - Prototipos y Herencia

// Prototipos

let person = {
    name: "Brais",
    age: 37,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()



// Herencia

let programmer = Object.create(person)
programmer.language = "JavaScript"

programmer.name = "MoureDev"
console.log(person.name)
console.log(person.language)

console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language)
programmer.greet()
programmer.sayAge()

// - Métodos estáticos y de instancia

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

let newPerson = new Person("Brais", 37)
newPerson.greet()

// Métodos avanzados

// Assign - copia las propiedades de un objeto a otro.

let person_core = {name: "Paula"}
let person_details = {age: 31, city: "Madrid"} 

let fullPerson = Object.assign(person_core, person_details) // el primero es el obejto base y el segundo el destino.
console.log(fullPerson)

// keys, values, entries - devuelven un array con las claves, valores o pares clave-valor de un objeto.

console.log(Object.keys(fullPerson)) // me devuelve un array con las claves del objeto - [ 'name', 'age', 'city' ]
console.log(Object.values(fullPerson)) // me devuelve un array con los valores del objeto - [ 'Paula', 31, 'Madrid' ]
console.log(Object.entries(fullPerson)) // me devuelve un array con los pares clave-valor del objeto - [ [ 'name', 'Paula' ], [ 'age', 31 ], [ 'city', 'Madrid' ] ]

