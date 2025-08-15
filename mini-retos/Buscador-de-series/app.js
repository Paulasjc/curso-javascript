// Seleccionar los elementos del dom (boton e input)

const boton = document.getElementById('searchButton')
const input = document.getElementById('searchInput')

// Evento para escuchar el clic
boton.addEventListener('click', () => {

    const query = input.value // captura el valor - lo que escribió el usuario.

    // Seleccionar contenedor de resultados
    const resultDiv = document.getElementById('results')
    // Se limpia antes de mostrar nuevos rsultados
    resultDiv.innerHTML = ''

    const apiKey = '72455c8d76430ebdce53078607c2ee48'
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

    // El value - URL fetch
    fetch(url)
        .then(response => response.json()) // se convierte la respuesta a JSON
        .then(data => {
           if (!data.results || data.results.length === 0) {
                resultDiv.textContent = 'No se encontraron series';
                return;
            }
            
            // Recorrer 'data' con un foreach para extraer - titulo, imagen, resumen
            data.results.forEach(result => {

                // Crear div para cada serie
                const serieDiv = document.createElement('div')
                serieDiv.classList.add('serie')

                // Crear h2 para mostrar el titulo
                const titulo = document.createElement('h2')
                titulo.textContent = result.name

                // Crear img para mostrar la imagen de la serie
                const imagen = document.createElement('img');
                imagen.src = result.poster_path 
                    ? `https://image.tmdb.org/t/p/w300${result.poster_path}` 
                    : 'https://via.placeholder.com/210x295?text=Sin+imagen';

                // Resumen de la serie

                const resumen = document.createElement('p');
                resumen.innerHTML = result.overview || 'Sin resumen';


                // Añadir titulo e imagen al div de la serie
                serieDiv.appendChild(titulo)
                serieDiv.appendChild(imagen)
                serieDiv.appendChild(resumen);

                // Añadir el div de la serie al contenedor princiapl
                resultDiv.appendChild(serieDiv)
                
            })
        })
        .catch(error => {
            console.error("Error al buscar la serie", error)
        })



})




