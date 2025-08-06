// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b){
    return a+b
}

console.log(suma(123, 678))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function funcArray (arrayNum){
    let numMayor = arrayNum[0]
    for(let i=1; i < arrayNum.length; i++){
        if(arrayNum[i] > numMayor){
            numMayor = arrayNum[i]
        }
    }
    return numMayor
}


let arrayNum = [3, 67, 89, 45]
console.log(funcArray(arrayNum))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function stringVocales(str){
    let numVocales = 0
    let vocales = ["a", "e", "i", "o", "u"]
    str = str.toLowerCase();
    for(let valor of str){
        if(vocales.includes(valor)){
            numVocales +=1
        }

    }
    return numVocales
}

let string = "Holita vecinitOOOs"
console.log(stringVocales(string))


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function arrayString (arrayStr){
    let strMayusculas = []

    for(let str of arrayStr){
        strMayusculas.push(str.toUpperCase());
    }

    return strMayusculas
}

let str = ["Hola", "hhh", "fkdsagfiuew"]

console.log(arrayString(str))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function numPrim(num) {
    if (num <= 1) return false;  // 0 y 1 no son primos
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;  // encontró un divisor, no es primo
        }
    }
    return true; // no encontró divisores, es primo
}

console.log(numPrim(5))
console.log(numPrim(4))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function arrComun ( array1, array2){
    let arrayCom = [];
    for(let value of array1){
        for(let value2 of array2){
            if(value === value2){
                arrayCom.push(value);
            }
        }
    }
    return arrayCom;
}

console.log(arrComun(["HOLA", 1, 2], ["jeje", 1, 2]));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumNumPares(arrayNums){
    let sum = 0
    for(let value of arrayNums){
        if(value%2==0){
            sum += value
        }

    }
    return sum;
}

console.log(sumNumPares([2,3,5,6,8]))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function arrayCuadrado(array){
    let arrayElevado = []
    for(let value of array){
        arrayElevado.push(value**2)
    }
    return arrayElevado;
}

console.log(arrayCuadrado([2, 4, 5]))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function strInvertida (str){
    let strInv = ""

    for(let i = str.length -1; i >=0; i--){
        strInv += str[i]
    }

    return strInv;
}

console.log(strInvertida("Paula"))

// 10. Crea una función que calcule el factorial de un número dado

function calcFactorial(num){
    if(num === 0) return 1;
    let factorial = 1

    for(let i = 1; i <=num; i++){
        factorial *= i
    }

    return factorial

}

console.log(calcFactorial(3))