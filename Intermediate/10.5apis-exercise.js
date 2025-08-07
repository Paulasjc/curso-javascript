// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

async function actualizarPost() {

    try {

        const newPost = {
            userId: 1,
            id: 1,
            title: "Nuevo título",
            body: "Nuevo contenido del post"
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })

        if(!response.ok){
            throw new Error("Error al modificar la publicación");
            
        }
        const data = await response.json()
        console.log("Modificación de la publicación: ", data)

    } catch (error) {
        console.log(error)
    }
    
}

actualizarPost()