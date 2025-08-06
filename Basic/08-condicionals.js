// Condicionales
// if, else if, else

// if (si)

let age = 31

if(age == 31){
    console.log("La edad es 31")
} else {
    console.log("No tienes 31 años.")
}

// else if
if(age == 31){
    console.log("La edad es 31")
} else if (age < 18){
    console.log("Es menor de edad.")
} else {
    console.log("No tienes 31 años.") // Se imprime cuando no se cumple ninguna condición.
}
console.log("************")
// Operador ternario - realiza una comprobacion pero hace una operación.
// Es una forma rapida de escribir un conidcional simple. - siempre se utiliza en condionales SIMPLES
const menasaje = age == 31 ? "La edad es 31" : "La edad no es 31"
console.log(menasaje) // evito mejor conosle.log en la oepracion ternaria.

// switch - alternativa a anidar if-else
// se usa cuando tenemos muchas condiciones que verificar pero solo en una variable
// por ejemplo tengo que obtener el dia de la semana pero para representarlos tengo numeros...

let day = 3

let dayName

switch(day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Miércoles"
        break
    case 4:
        dayName = "Jueves"
        break

    case 5:
        dayName = "Viernes"
        break

    case 6:
        dayName = "Sábado"
        break

    case 7:
        dayName = "Domingo"
        break
    default:
        dayName = "Día de la semana incorrecto"
        // No pongo break porque ya se sale, no tiene snetido.
}

console.log(`hoy es ${dayName}`)

// Ventajas de switch
/*
Es legible
Puede ser eficiente, se ejecuta más rápido

Desventajas
Es menos flexible, si queremos trabajr con condiciones complejas
Es necesario meter el break, si se nos olvida se ejecuta de forma anómala.
*/
