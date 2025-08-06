// Clases avanzadas

// si quiero crar la clase persona con un constructor y un metodo

class Person{
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    // función
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

// si quiero acceder a una isntancia de Person

const persona1 = new Person("Pauli", 31)
console.log(persona1)
persona1.greet()

// si quiero añadir una nueva funcion a Persona

persona1.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}

// Clases abstractas: que no se puede isntanciar. solo de cara a utilizar esas funciones que utilice otra clase.

class Animal {
    constructor(name){
        // Para hacerlo abstractor
        if(new.target === Animal){
            throw new Error("No se puede crear una instancia de Animal. es una clase abstracta")
        }
        this.name = name
    }
    makeSound(){
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}

// Error: No se puede crear una instancia de Animal. es una clase abstracta 
// const animal1 = new Animal("Perro")
// console.log(animal1)


// Polimorfismo - caracteristicas de las clases abstractas

class Cat extends Animal {
    // aqui sobreescribo el metodo de la clase abstracta si no da error
    makeSound(){
        console.log(`El ${this.name} hace miau`)
    }

}

class Dog extends Animal {
    makeSound(){
        console.log(`El ${this.name} hace guau`)
    }
    
}

const cat1 = new Cat("Gato")
cat1.makeSound() // Esto si no se override el metodo de la clase abstracta, me da un error.
const dog1 = new Dog("Perritooooo")
dog1.makeSound()


// Mixins - son funciones que se pueden utilizar para añadir funcionalidad a una clase. sin utilizar la herencia.

// quiero crear la funcionalidad 

const FlyMixin = {
    fly(){
        console.log(`El ${this.name} vuela`)
    }
}

class Bird extends Animal {}
class Dragon extends Animal {}

// hacemos un assing

Object.assign(Bird.prototype, FlyMixin) // le digo al pajaro que tiene la capacidad de volar con .prototype
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("Pajaritootototo")

console.log(bird.name)
bird.fly()

const dragon1 = new Dragon("Desdentado")
dragon1.fly()

// Patrón Singleton
// patron de diseño convenciones que seguimos para evitar errores comunes. Asegura que una clase solo se peude instanciar una vez.
// Solo existe una instancia de la clase.
// por ejemplo: inicio de sesión, conexión a base de datos, etc.

class Session{
    constructor(name){
        // Session.instance es una variable estática que almacena la única instancia de la clase.
        if(Session.instance){
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }

    
}

const sesion1 = new Session("PaulaSesion")
// si por ejemplo yo quiero acceder a la sesion desde otro sitio
const session2 = new Session()
console.log(sesion1.name)
console.log(session2.name) // Undefined


// Symbol - tipo de datos primitivo. Se introdujo en ES6. Identificador unico e inmutable

const ID = Symbol("ID") // Esto no se puede modificar, es unico el ID - evita colisiones. Es una propiedad semiprivada
// uso de symbol en clases: 

class User{
    constructor(name){
        this.name = name,
        this[ID] = Math.random()
    }

    getID(){
        return this[ID]
    }
}

const user1 = new User("PaulaID")
console.log(user1)
console.log(user1.name)
console.log(user1[ID])
console.log(user1.getID())


// comprobaciones de instancia

class Car{}
const car = new Car()

console.log(car instanceof Car) // true


// create - por ejemplo crear un coche en base al prototipo
const anotherCar = Object.create(Car.prototype)
console.log(anotherCar instanceof Car) // true


// Proxy
// mecanísmo dentro de las clases. 
// sirve interceptar y personalizar el comportamiento de las clases, por ejemplo seguridad, validacion...

// creacion de proxy

const proxy = {
    get(target, property) {
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if (property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance)

account.balance = 50
console.log(account.balance)

// Error
// account.balance = -10

// con eso hemos perdido los valores de balance, por lo que no se puede modificar.. Siempre tienen una forma de crearse (target, propiedad, valor)

