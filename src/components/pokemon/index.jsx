import { useState, useEffect } from "react";
import { getDataPokemon } from "../../helpers";
import { Grid, Container, CardContent, CardMedia,Card } from "@mui/material";

const Pokemon = () => {
  // vamos crea una variable para guaradr la lista de los pokemones
  const imgUrl=
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
  const [pokemons, setPokemons] = useState([]);

  // debemos crear una funcion que se encargue de ejecutar la peticion de la lista de pokemones

  const fecthPokemonList = async () => {
    const listPokemones = await getDataPokemon();
    console.log("lista", listPokemones.results);
    setPokemons(listPokemones.results)

  };

  useEffect(() => {
    fecthPokemonList();
  }, []);

  return (
    <Container>
      <h1>pokemon</h1>
      <Grid container>
        {pokemons.length > 0 &&
        pokemons.map((pokemon, index) => (
          <Grid item md={4} sm={12}>
            <Card>
              <CardMedia className="img-pokemon" component="img" image={`${imgUrl}${index + 1}.svg`} />
              <CardContent>
                <h3 className="name-pokemon">{pokemon.name}</h3>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Pokemon;
