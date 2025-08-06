// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Aitor"

if(nombre == "Paula"){
    console.log(`Tu nombre es ${nombre}`)
} else {
    console.log(`No eres Paula, tú eres ${nombre}`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "pau"
let contraseña = "12345"

if(usuario === "pau" && contraseña === "123456"){
    console.log("Sesión iniciada correctamente")
} else {
    console.log("Usuario y contraseña incorrectos")
}



// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -10
if ( numero > 0){
    console.log("número positivo")
} else if (numero == 0){
    console.log("El número es igual a 0")
} else {
    console.log("El número es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edadVotante = 17
let añosRestantes
if(edadVotante < 18){
    console.log("Eres menor de edad. No puedes votar")
    añosRestantes = 18 - edadVotante
    console.log(`Te faltan ${añosRestantes} años para votar.`)
} else{
    console.log("eres mayor de edad, puedes votar.")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edadTernario = 10
const edad = edadTernario >= 18 ? "adulto" : "menor"
console.log(edad)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "febrero"
let primavera = ["marzo", "abril", "mayo"]
let verano = ["junio", "julio", "agosto"]
let otoño = ["septiembre", "octubre", "noviembre"]
let invierno = ["diciembre", "enero", "febrero"]

if(primavera.includes(mes)){
    console.log("Es primavera")
} else if (verano.includes(mes)){
    console.log("Es verano")
} else if (otoño.includes(mes)){
    console.log("Es otoño")
} else if (invierno.includes(mes)){
    console.log("Es invierno")
} else {
    console.log("Error en el mes.")
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let mes30Dias = ["noviembre", "abril", "junio", "septiembre"]
let mes28dias = ["febrero"]
let mes31Dias = ["enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"]

if(mes30Dias.includes(mes)){
    console.log(`El mes ${mes} tiene 30 días.`)
} else if(mes28dias.includes(mes)){
    console.log("Tiene 28 días")
} else if(mes31Dias.includes(mes)){
    console.log(`El mes ${mes} tiene 31 días.`)
} else {
    console.log("Mes erróneo")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Español"
switch(idioma){
    case "Español":
        console.log("Hola")
        break
    case "Inglés":
        console.log("Hello")
        break
    case "Francés":
        console.log("Salut")
        break
    default:
        console.log("Idioma no detectado.")

}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch(true){
    case primavera.includes(mes):
        console.log(`Es primaveraaaa`)
        break
    case verano.includes(mes):
        console.log(`Es  veranooooo`)
        break
    case invierno.includes(mes):
        console.log(`Es inviernoooo`)
        break
    case otoño.includes(mes):
        console.log(`Es otoñoooo`)
        break
    default:
        console.log("Mes erróneo");
}




// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch(true){
    case mes30Dias.includes(mes):
        console.log(`El mes ${mes} tiene 30 días`)
        break
    case mes28dias.includes(mes):
        console.log(`El mes ${mes} tiene 28 días`)
        break
    case mes31Dias.includes(mes):
        console.log(`El mes ${mes} tiene 31 días`)
        break
    default:
        console.log("Mes erróneo");
}