// sera nuestro alamcen de apis

// una buena practca reutilixar nuestra apis es guardarlo en una variable

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

// ESTA FUNCION SERA UNA FUNCION GENERICA

export const getDataPokemon = async (url = BASE_URL) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};


