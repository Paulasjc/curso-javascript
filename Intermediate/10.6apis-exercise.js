// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

async function modificarPatch() {

    try {

        const newPatch = {
            userId: 1,
            id: 5,
            body: "Nuevo body modificado"
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/3", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPatch)
        })
        if(!response.ok){
            throw new Error("No se pudo modificar el cuerpo de la publicación");
            
        }

        const data = await response.json()
        console.log("Modificación parcial: ", data)
        
    } catch (error) {
        console.log(error)
        
    }
    
}

modificarPatch()