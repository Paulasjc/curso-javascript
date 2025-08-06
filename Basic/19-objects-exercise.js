// Ejercicios objetos

// 1. Crea un objeto con 3 propiedades

let coche = {
    marca: "Renault",
    modelo: "Clio",
    año: 1999,
    acelerar: function(){
        console.log(`El coche modelo ${this.modelo} está acelerando`)
    }
}



// 2. Accede y muestra su valor

console.log(coche)

// 3. Agrega una nueva propiedad

coche.color = "rojo"
console.log(coche)

// 4. Elimina una de las 3 primeras propiedades

delete coche.marca
console.log(coche)

// 5. Agrega una función e invócala

coche.acelerar()

// 6. Itera las propiedades del objeto

for(let key in coche){
    console.log(key + ": " + coche[key])
}

// 7. Crea un objeto anidado

let casa = {
    piso: 4,
    exterior: true,
    habitacion : {
        numero: 5,
        cama: "simple",
        ventana: true
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(casa.habitacion.numero)
console.log(casa.habitacion.cama)
console.log(casa.habitacion.ventana)

// 9. Comprueba si los dos objetos creados son iguales
console.log(coche === casa)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(casa.piso === casa.exterior)
console.log(casa.piso === coche.año)