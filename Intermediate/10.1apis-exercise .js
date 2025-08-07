// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

async function getPhotos() {

    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/photos")
        const data = await respuesta.json()

        console.log(data)

    } catch (error) {
        console.log(error)
        
    }
    
}

//getPhotos()


// Variante, al ser muchos datos, filtro por las primeras 10 fotos.


async function getPhoto10() {
    try {
        const respuesta1 = await fetch("https://jsonplaceholder.typicode.com/photos")
        const data1 = await respuesta1.json()

        console.log(data1.slice(0,10))
    } catch (error) {
        console.log(error)
        
    }
}

//getPhoto10()

// Variante: mostrar los títulos y url de las 5 primeras

async function getTitle() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/photos")
    const data = await respuesta.json()

    data.slice(0,5).forEach(photo => {
        console.log(`Título: ${photo.title}`)
        console.log(`URL: ${photo.thumbnailUrl}`)
        
    });
}

getTitle()