// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function detelePost() {

    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts/3", {
            method: "DELETE"
        })

        if (response.ok) {
            console.log(`Eliminado correctamente. Código de estado: ${response.status}`);
        } else {
            throw new Error(`No se pudo eliminar. Código: ${response.status}`);
        }

        console.log("Publicación eliminada correctamente")



    } catch (error) {
        console.log(error)
    }
    
}

detelePost()
