// funciones - bloque de código crado para realizar una función específica
// Las tenemos que llamar/invocar
// vamos a poder: crear codigo que sea moduble, buenas practicas, legible..


// Ara crearla: function - lowelCamelCase

// Funcion simple (sin parámetros)

function myFunc (){
    // código que quiera ejecutar
    console.log("Hola, soy una función")
}

// puede ser invocada - para poder verlo por consola:

//myFunc()

for(let i =0; i <5; i++){
    myFunc()
}


// Función con parámetros
function myfuncWithParams(name){
    console.log(`¡Hola, ${name}!`)
}

// invoco

myfuncWithParams("Paula")

// funciones anónimas - no tienen un nombre definido, le puedo pasar el paramtero que quiera, las funciones anónimas las tengo que asignar a una variables o a una constante
// porque si no yo no tendría manera de poder invocarla
// se invocan igual que una funcion
console.log("funcion anónima*************")

const myfunc2 = function (name){ /// esta función es genérica, es una funcion almacenada en una variable/constante
    console.log(`Hola ${name}`)
}

myfunc2("Pauli")

// funciones flechas - Arrow functions - es una forma más concisa de escribir funciones 
// si yo lo único que quiero es una función que reciba solo un parámtero como puede ser name:
// tenemos,. al igual que las ufunciones anónimas que asignarlas a una varible o una constante
// USOS: cuando lo quiero hacer en una sola línea

console.log("funcion arrow*************")

const myFunc3 = (name) => {
    // definimos bloque de código
    console.log(`Hola ${name}`)
} 
// se invocan igual

myFunc3("Paulaaaa")

// usos : una sola linea, si por ejemplo el bloque de codigo solo es un console:
const myfunc4 = (name) => console.log(`Hola ${name}`)
myfunc4("arrow function de una sola linea")

// Parámetros
console.log("********************PARÁMETROS*************")
function sum(a, b){
    console.log(a+b)
}

sum(3, 6)

// SI QIUERO ASEGURARME DE QUE QUIEN LLAME A ESTA FUNCION NO HAGA ERRORE, DOTANDOLE DE UN VALOR POR DEFECTO:
// vALORES POR defecto
console.log("********************PARÁMETROS - VALORES POR DEFECTO *************")

function defaultSum(a=0, b=0){
    console.log(a+b)
}

defaultSum()
defaultSum(3)
defaultSum(8, 9)
defaultSum(b=6)
defaultSum(b=6, a = 4)

// Retorno de valores: una función puede desencadenar lógica dentro de una función, pero si quiero realizar una operación y que me retorne 
// el resultado de la lógica para utilizarla?? Es decir, por ejemplo que la funcion default sum no quiero el resultado de la suma sino que te diga
// cuánto suma
// Valores de retorno - voy a retornar el resultado al usuario pero no el resultado de la multiplicacion
// uso palabra return - lo que yo pase a continuacion del return en lo que devuelve a la persona
console.log("********************PARÁMETROS - Retorno de valores *************")
function mult(a,b){
    return a*b
}

mult(4, 7) // Esto no devuelve nada en consola.
console.log(mult(4, 7)) // Esto devuelve 28

//Explicación: mul(4,7) deveulve el resultado-28 pero no lo muestra, si yo luego decido mostrarlo por consola hago el console.log - lo mismo seria si:
let result = mult(5,8)
console.log(result) // se ve por la terminal 40.


// funciones anidadas - una función dentro de otra función
// **Atencion al scope

console.log("******************** FUNCIONES ANIDADAS *************")

function extern(){
    console.log("función externa")
    function intern(){
        console.log("función interna")
    }
    // para que cuando llamae a la funcion externa, se imprima tamb lo de interna tenfo que invocarla dentro
    intern()
}

extern()
// inter(): errore fuera del scope.

// Funciones de orden superior - funciones que reciben otras funciones como argumentos.

console.log("******************** FUNCIONES DE ÓRDEN SUPERIOR *************")
function applyFunc(func, param){
    func(param)

}
applyFunc(myfunc4, "función órden superior")


// Combinamos - forEach - es una funcion quesirve par aejecutar bucels asociados a elemntos iterables.

let myArray = [1, 2, 3, 4]
// tengo que definir la llamada a esa función 
myArray.forEach((value) => console.log(value))

myArray.forEach(function(value){
    console.log(value)
})

// Lo probamos con SET

let mySetForEach = new Set(["Hola", 31, false, "probando set", "con el bucle for each"])

mySetForEach.forEach((value) => console.log(value))

// Lo probamos con MAP

let myMapForEach = new Map([
    ["saludo", "hola"],
    ["edad", 31],
    ["Tengo hambre", true]
])

myMapForEach.forEach((value) => console.log(value))

myMapForEach.forEach((value, key, map) => {
    console.log("Clave:", key);
    console.log("Valor:", value);
});
