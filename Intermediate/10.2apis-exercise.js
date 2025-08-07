// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
async function getPhotos() {

    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/photos")

        // comprobar si es correcta, antes de json porque si no es correcta no la convierto en json.

        if(!respuesta.ok){
            throw new Error(`Error HTTP: ${respuesta.status}`);
            
        }

        const data = await respuesta.json()
       
        console.log(data)

    } catch (error) {
        console.log(error)
        
    }
    
}

getPhotos()

// Error: Error HTTP: 404 -  https://jsonplaceholder.typicode.com/photosss


