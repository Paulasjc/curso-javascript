// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

async function getDatosPokemon(pokemonName) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Error al obtener Pokémon: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Datos del Pokémon:", data);
  
      // Para obtener los datos de la especie (estaría en data.)
      const speciesResponse = await fetch(data.species.url);
      if (!speciesResponse.ok) {
        throw new Error(`Error al obtener especie: ${speciesResponse.status}`);
      }
      const speciesData = await speciesResponse.json();
      console.log("Datos de la especie:", speciesData);
  
      //la cadena evolutiva (viene en speciesData.evolution_chain.url)
      const evolutionResponse = await fetch(speciesData.evolution_chain.url);
      if (!evolutionResponse.ok) {
        throw new Error(`Error al obtener cadena evolutiva: ${evolutionResponse.status}`);
      }
      const evolutionData = await evolutionResponse.json();
      console.log("Cadena evolutiva:", evolutionData);
  
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
  
  getDatosPokemon("Jigglypuff");
  