// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
console.log("****bucle for ***")
for (let i = 0; i < 21; i++){
    console.log(i)

}

console.log("****bucle while ***")

let num = 1
while(num < 21){
    console.log(num)
    num++
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("**** EJERCICIO 2 ***")
let suma = 0
for(let i=0; i <=100; i++){
    suma += i
    
}
console.log(suma) // fuera del bucle porque imprimira cada resultado de suma.

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("**** EJERCICIO 3 - NUMEROS PARES  - FOR ***")
for(let i=1; i <=50; i++){
    if(i%2==0){
        console.log(i)
    }
}



// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

console.log("**** EJERCICIO 4  ***")

let arrayNombres = ["Aitor", "Paula", "macarena", "Luisa"]
for(let nombre of arrayNombres){
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

console.log("**** EJERCICIO 5  ***")


let cadena = "Hola, ¿como estamos?"
let vocales = ["a", "e", "i", "o", "u"]
let numeroVocales = 0

for(let caracter of cadena){
    if(vocales.includes(caracter.toLowerCase())){
        numeroVocales ++
    }
}
console.log(numeroVocales)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

console.log("**** EJERCICIO 6  ***")

let arrayNumeros = [2, 45, 7, 9, 34]
let producto = 1

for(let valor of arrayNumeros){
    producto *= valor
}
console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("**** EJERCICIO 7 ***")


for(let i = 0; i <=10; i++){
    console.log(`5 x ${i} = ${i*5}`)
}

// 8. Usa un bucle para invertir una cadena de texto

console.log("**** EJERCICIO 8 ***")

let cadenaOriginal = "Hola mundo"
let cadenaInvertida = ""

for(let i = cadenaOriginal.length - 1; i >= 0; i--){
    cadenaInvertida += cadenaOriginal[i];
    
}
console.log(cadenaInvertida)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("**** EJERCICIO 9 ***")

let arrayFibo = [0, 1]

while(arrayFibo.length < 10){
    let ultimo = arrayFibo[arrayFibo.length - 1];
    let penultimo = arrayFibo[arrayFibo.length - 2];
    arrayFibo.push(ultimo + penultimo);

}
console.log(arrayFibo)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

console.log("**** EJERCICIO 10 ***")

let arrayNumber = [11, 45, 6, 90, 3]
let arrayMaroy10 = []
for(let valor of arrayNumber){
    if(valor > 10){
        arrayMaroy10.push(valor)
    }
}
console.log(arrayMaroy10)