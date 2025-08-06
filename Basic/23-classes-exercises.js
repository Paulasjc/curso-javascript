// 1. Crea una clase que reciba dos propiedades


class Vehiculo {

    #matricula

    constructor(matricula, modelo){
        this.#matricula = matricula,
        this.modelo = modelo
    }
    // 2. Añade un método a la clase que utilice las propiedades
    drive(){
        console.log(`El Vehiculo con matrícula: ${this.#matricula} está conduciendo`)
    }
    // 4. Añade un método estático a la primera clase
    static repostar(){
        return "El Vehiculo ha repostado."
    }

    // 7. Crea una clase que haga uso de getters y setters
    // 8. Modifica la clase con getters y setters para que use propiedades privadas
    get matricula(){
        return this.#matricula
    }

    

    set matricula (newMatricula){
        this.#matricula = newMatricula
    }
    
}



// 3. Muestra los valores de las propiedades e invoca a la función

let vehiculo = new Vehiculo("2341-BTK", "Citroen")
console.log(vehiculo.matricula)
console.log(vehiculo.modelo)
vehiculo.drive()

// 9. Utiliza los get y set y muestra sus valores
console.log(vehiculo.matricula)


// 5. Haz uso del método estático
console.log(Vehiculo.repostar())

// 6. Crea una clase que haga uso de herencia - mantengo ejemplo

class Coche extends Vehiculo{
    // esta clase  ya tiene matricula y modelo
    constructor(matricula, modelo, puertas, color, tamaño){
        super(matricula, modelo),
        
        this.puertas = puertas,
        this.color = color,
        this.tamaño = tamaño
    }

    // 10. Sobrescribe un método de una clase que utilice herencia 
    drive(){
        console.log(`El coche de color ${this.color} con matrícula: ${this.matricula} está conduciendo`)
    }

}

let coche1 = new Coche("2345-BTL", "Mazda", 5, "azul", "grande")
coche1.drive()







