// Bucles - loops

// Estructura de control - repetir un bloque de código mientras la condición sea verdadera 
// Tarea repetitivas, automatizar procesos, ...

// for - se ejecuta segun lo lanzamos y tiene una condicion que se evalua cada vez que hay una iteración, si es true, sigue si es false para
// 1º definir una variable, por ejemplo i representando el indice, y definir el valor numerico que toma, en que valor empiezo a contar "0"
// 2º la condicion para que esto se ejecute, por ejemplo, que el indice sea menor que 5.
// 3º indicar la condicion para modificar el valor del índice
for(let i = 0; i < 5; i++){
    // el codigo que se va a repetir
    console.log(`Hola ${i}`)
}


const number = [1, 2, 3, 4, 5, 6, 7]
// Quiero recorrer este listado

for(let i = 0; i <= number.length; i++){
    console.log(i)
}


// while - se evalua antes de cada iteracion, si es verdadero el bucle continua si es falsa no.
let i = 0
while(i < 5){
    console.log(`Hola ${i}`)
    i++
}

// do - while - necesito ejecutar al menos una vez. While a lo mejor no se ejucuta nunca
console.log("Ejemplo Do-While")
i = 6

do{
    console.log(`Hola ${i}`)
    i++


} while (i < 5)

// for of - nos vale para recorrer valores de algo que sea iterable: estructura de datos
// 

myArray = [1, 2, 3, 4]
mySet = new Set(["Paula", "paausj@gmail.com", 31, true])
mymap = new Map([
    ["name", "Paula"],
    ["email", "paausj@gmail.com"],
    ["age", 31]
])

// Creo String
let myString = "Hola, JavaScript"

// Crear una variable con lo que va a ser el valor, le añadimos 'of' junto a lo que queremos iterar.
// se imprime todo. - se revisan todos los valores
console.log("********* For of *********")

for(let valor of myArray){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}

for(let valor of mymap){
    console.log(valor)
}

// For of de la cadena de texto
for(let valor of myString){
    console.log(valor) // Imprime caracter a caracter. String no es una estructura de datos, pero se comporta como listado de caracteres por eso se puede iterar.

}

// Buenas prácticas
// Evitar bucles infinitos - asegurar que la expresión en algún momento es false.
// uso de break y continue
// si de verdad el indice valor 5 no lo quiero tener en cuenta, por ejemplo, es decir me quiero saltar esa iteracion. Hacemos una condición

for(let i = 0; i < 10; i++){
    if(i == 5){
        continue // continua en la siguiente ejecución. Se salta el 5
    }
    console.log(`Hola ${i}`)
}

// si la condición, la i vale 6, quiero parar el bucle. sirve para contorlar el flujo de los bucles.
for(let i = 0; i < 10; i++){
    if(i == 6){
        break // se para el bucle y deja de imprimir.
    }
    console.log(`Hola ${i}`)
}