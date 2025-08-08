// Pedir lista de posts a la API, procesar la respuesta, crear elementos HTML, cada post en un contenedor y manejo de errores

async function cargarPosts() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!respuesta.ok) {
            throw new Error("Error al obtener los posts");
        }
        const posts = await respuesta.json();

        const contenedor = document.getElementById('posts');
        contenedor.innerHTML = ''; // Limpiar contenido

        // Crear botón ordenar UNA sola vez, antes de los posts
        const ordenarButton = document.createElement('button');
        ordenarButton.textContent = 'A → Z';
        ordenarButton.addEventListener('click', () => {
            posts.sort((a, b) => a.title.localeCompare(b.title));
            renderPosts(posts, contenedor);  // Volver a mostrar los posts ordenados
        });

        contenedor.appendChild(ordenarButton);

        // Renderizar posts (función aparte)
        renderPosts(posts, contenedor);

    } catch (error) {
        const errorDiv = document.getElementById('error');
        errorDiv.textContent = error.message;
    }
}

// Función para renderizar los posts en el contenedor
function renderPosts(posts, contenedor) {
    // Antes de renderizar limpiar solo los posts (no el botón)
    // Por eso se limpia todo excepto el primer hijo (el botón)
    while (contenedor.children.length > 1) {
        contenedor.removeChild(contenedor.lastChild);
    }

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.style.border = '1px solid #cc';
        postDiv.style.margin = '10px 0';
        postDiv.style.padding = '10px';

        const titulo = document.createElement('h2');
        titulo.textContent = post.title;
        titulo.addEventListener("click", () => {
            alert(`ID del post: ${post.id}`);
        });

        const cuerpo = document.createElement('p');
        cuerpo.textContent = post.body;

        const bodyButton = document.createElement('button');
        bodyButton.textContent = "Mostrar/ocultar";
        bodyButton.addEventListener("click", () => {
            if (cuerpo.style.display === 'none' || cuerpo.style.display === '') {
                cuerpo.style.display = 'block';
            } else {
                cuerpo.style.display = 'none';
            }
        });

        const user = document.createElement('p');
        user.textContent = `Usuario: ${post.userId}`;

        const userButton = document.createElement('button');
        userButton.textContent = 'Mostrar usuario';
        userButton.addEventListener('click', () => {
            alert(`Usuario: ${post.userId}`);
        });

        postDiv.appendChild(titulo);
        postDiv.appendChild(cuerpo);
        postDiv.appendChild(user);
        postDiv.appendChild(userButton);
        postDiv.appendChild(bodyButton);

        contenedor.appendChild(postDiv);
    });
}

// Ejecutar la función al cargar el script
cargarPosts();
