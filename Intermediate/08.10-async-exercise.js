// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

let saldoActual = 500


function checkBalance(){
    // Como tiene que esperar 1s, - promise
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(saldoActual)
        }, 1000)
    })
}

// La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
function withdrawMoney(amount){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(amount <= saldoActual){
                saldoActual -=amount
                resolve(saldoActual)
            } else {
                reject('Error fondos insuficientes')
            }

        },2000)
    })
}

// Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.

async function operarCajero() {
    try{
        const saldo = await checkBalance();
        console.log(`Saldo disponible: ${saldo}€`)

        console.log("Retirando 300€ ...")
        const mensaje1 = await withdrawMoney(300)
        console.log(`Operación exitosa, saldo restante: ${mensaje1}`)

        console.log("Retirando 300€ ...")
        const mensaje2 = await withdrawMoney(300)
        console.log(mensaje2)
    } catch(error){
        console.log(error)
    }
}

operarCajero()