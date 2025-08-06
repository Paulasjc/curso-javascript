// Clases - objetos complejos. sirven para crear objetos - plantillas de objetos
// definimos propiedades y métodos generales y en las instancias damos el valor

class Person{
    constructor(name, age, alias){
        this.name = name,
        this.age = age,
        this.alias = alias
    }
}

let person1 = new Person("Paula", 31, "Pau")
console.log(person1)


// Clase por defecto
class DefaultPerson{
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias"){
        this.name = name,
        this.age = age,
        this.alias = alias
    }
}

let person2 = new DefaultPerson("Paula", 31)
console.log(person2)

// Acceso a propiedades

console.log(person1.name)
console.log(person1["alias"])

// añadir
person2.alias = "Pausjc"
console.log(person2.alias)

// Clase con funciones:
class PersonWithMethod{
    constructor(name, age, alias){
        this.name = name,
        this.age = age,
        this.alias  = alias
    }

    // funcion/ método
    walk(){
        console.log("La persona camina")
    }
}

let personWalk = new PersonWithMethod("AAAA", 31, "AA")
console.log(personWalk)
personWalk.walk()

// Propiedades privadas
class PrivatePerson{
    // ponemos aqui las propiedades privadas que solo se accede a ella DENTRO de la clase.
    #bank

    constructor(name, age, alias, bank){
        this.name = name,
        this.age = age,
        this.alias = alias,
        this.#bank = bank
    }
    pay(){
        this.#bank
    }

    
}

let personaPrivate = new PrivatePerson("Paula", 31, "pausj", "IBAN123445678")
console.log(personaPrivate) // no se ve el IBAN
console.log(personaPrivate.bank) // muestra undefined

// Si yo "le doy valor" a bank, realmente NO accede a bank privado, sino que crea una nueva propiedad pública y le da el valor.
personaPrivate.newBank = "akufdqiwlgriwgroñwhrowehroñ"
console.log(personaPrivate)

// No podemos acceder a la propiedad bank ni para imprimirla ni para modificarla.

// GETTER Y SETTER

class GetPerson{
    #name
    #age
    #alias
    #bank
    constructor(name, age, alias, bank){
        this.#name = name,
        this.#age = age,
        this.#alias = alias,
        this.#bank = bank
    }
    // Creamos método get para mostrar el valor. - es una funcion que te retorna el valor.
    get name(){
        return this.#name
    }

    set bank(newBank){
        this.#bank = newBank
    }

     get bank(){
        return this.#bank
    }
}

let persona6 = new GetPerson("Brais", 37, "MoureDev")
console.log(persona6) // No muestra nada porque todo es privado. - vuelvo a la clase
console.log(persona6.name) // se imprime, se puede leer.

//** Ejemplo en GetPerson - que no pueda leer datos bancarios pero que sí pueda modificarlos. */
persona6.bank = "IBAN98643467542" // actualiza el valor del IBAN
console.log(persona6.bank)

// **************************** HERENCIA *************************
class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal {

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("MoureDog")
myDog.run()
myDog.sound()

let myFish = new Fish("MoureFish", 10)
myFish.swim()
myFish.sound()

// Métodos estáticos - static no neesitamos instanciar la clas epara acceder al método static
// util si no necesito crear una nueva isntancia, porque hacemos referncia a un empaquetamiento para ciertas utilidades.

class MathOperations {

    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))