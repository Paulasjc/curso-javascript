// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body


async function crearPublicacion() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Mi nuevo título para el post",
                body: "Este es el contenido de la publicación",
                userId: 1
            })
        })

        if(!response.ok){
            throw new Error("Error al crear la publicación");
            
        }

        const data = await response.json()
        console.log("Publicación creada: ", data)
    } catch (error) {
        console.log("Error: ", error.message)
    }
    
}

crearPublicacion()