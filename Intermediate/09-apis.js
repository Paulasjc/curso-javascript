// Manejo de APIs

// APIs REST (HTTP + URLs + JSON)

// Métodos HTTP 
// - GET → solicitar datos, obtención
// - POST → enviar datos que crearán un nuevo recurso, por ejemplo crear un usuario
// - PUT → sirve para enviar datos al servidor pero para actualizar un recurso
// - DELETE → solicitar al servidor eliminar un recurso.

// Códigos de respuesta HTTP:
// 200 ok, éxito
// 201 ok ademas infroma de que por ejemplo si se usa un post informa de que se ha creado el recurso.
// 400, error por parte del cliente
// 404 , no encontrado lo que solicita
// 500, error de lado servidor


// → GET

// Consumir una API. - funcion nativa
// fetch pasarle la url asociada a la API
// consulta url de forma asíncrona
fetch("https://jsonplaceholder.typicode.com/posts")
    // Transforma respuesta a JSON
    .then(response => {
        return response.json() // tiene que retornarlo

    })
    // then data - procesa datos recibidos
    .then(data => {
        console.log(data)
    })
    .catch(error =>{
        // captura errores.
        console.log('Error', error)
    })


// Uso de Async/Await

async function getPost() {
    try{
        const responde = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
        const data = await responde.json()
        console.log(data)
    } catch(error){
        console.log("Error", error)
    }
}

getPost()

// → POST

async function createPost() {
    try{
        // Lo que queremos poner - formato
        const newPost = {
            user: 1,
            title:  "Este es el título de mi post",
            body: "Este es el cuerpo de mi post"

        }

        const responde = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })

        const data = await responde.json()
        console.log(data)

    } catch(error){
        console.log("Error", error)
    }
    
}
createPost()

// Herramientas para realizar peticiones HTTP
// - https://postman.com
// - https://apidog.com
// - https://thunderclient.com

// Manejo de errores

fetch("https://jsonplaceholder.typicode.com/mouredev")
    .then(response => {
        if (!response.ok) {
            throw Error(`Status HTTP: ${response.status}`)
        }
        return response.json()
    })
    .catch(error => {
        console.log("Error", error)
    })

// Métodos HTTP adicionales
// - PATCH
// - OPTIONS
// actualización del título:
async function partialPostUpdate() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", { // url con el post que se quiere modificar
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: "Este es el nuevo título de mi post" }) // objeto que contiene solo el título
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}

partialPostUpdate()

// Autenticación mediante API Key - medida de seguridad. Clave personal para que cuando llamemos a una api le pasemos una clave asociada a nosotros para que el servidor
// sepa quien es la persona que interacciona 
console.log("***************************************WEATHER***********************************")

async function getWeather(city) {
    const apiKey = "149a966a1904a55c8c83f050a334d581";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`${response.status} - ${errorData.message}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error", error);
    }
}

getWeather("Madrid");


// Otros métodos de Autenticación y Autorización
// - Bearer Tokens
// - JWT - modelar un objeto de forma más segura.

// Versionado de APIs - asegura que la especificaicon de la api siempre esta disponibley cumple el estandar, tanto al comunicarnos como lo que recibimos de ella.
// - https://api.example.com/v1/resources
// - https://api.example.com/v2/resources

// 

// Otras APIs

async function getPokemon(pokemon) {

    // https://pokeapi.co
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(`Habilidades de ${data.name}`) // accedo al campo que tiene su nombre
        data.abilities.forEach(ability => {
            console.log(ability.ability.name)
        })
    } catch (error) {
        console.log("Error", error)
    }
}

getPokemon("pikachu")

