// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

// ahora sí funciona.

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