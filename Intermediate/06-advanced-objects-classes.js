// 1. Agregega una función al prototipo de un objeto

function Persona(name, age){
    
    this._name = name,
    this.age = age

}

Object.defineProperty(Persona.prototype, "name", {
    get(){
        return this._name
    },
    set(value){
        this._name = value
    }
})

const person1 = new Persona("Paula", 31)
console.log(person1)

Persona.prototype.greet = function(){
    console.log(`Hola, soy ${this.name}`)
}
person1.greet()

// 2. Crea un objeto que herede de otro
let programmer = Object.create(Persona.prototype)
programmer.language = "JavaScript"
console.log(programmer)

programmer.name = "PaulaPrototipo"
console.log(programmer.name)

// 3. Define un método de instancia en un objeto

Persona.prototype.sayAge = function(){
    console.log(`Tengo ${this.age} años`)
}
person1.sayAge()



// 4. Haz uso de get y set en un objeto
programmer.name = "PaulaPrototipoSEEEEEEEEEEEET"
console.log(programmer.name)



// 5. Utiliza la operación assign en un objeto

const user = {name: "Usuario1", email: "usuario@gmail.com"}
const extreUserInfo = { ciudad: "Madrid", pais: "España"}

const fullUser = Object.assign(user, extreUserInfo)
console.log(fullUser)

// 6. Crea una clase abstracta

class Vehiculo{
    constructor(marca, modelo){
        if(new.target === Vehiculo){
            throw new Error("No se puede crear una instancia de Vehiculo. es una clase abstracta")
        }
        this.marca = marca,
        this.modelo = modelo
    }
    arrancar(){
        throw new Error("Tienes que sobreescribir el método arrancar")
    }
    detener(){
        throw new Error("Tienes que sobreescribir el método detener")
    }
    mostrarInfo(){
        throw new Error("Tienes que sobreescribir el método mostrarInfo")
    }
}

class Coche extends Vehiculo{
    mostrarInfo(){
        console.log("El coche es rojo y tiene 4 ruedas")
    }
}

const coche1 = new Coche("Toyota", "Corolla")
coche1.mostrarInfo()



// 7. Utiliza polimorfismo en dos clases diferentes
// hecho arriba

