import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Grid, Button, Chip } from "@mui/material";
import { getDataPokemon } from "../../helpers";

const Detail = () => {
  const { name } = useParams();
  const history = useNavigate();

  const [country, setCountry] = useState({});

  const FetchCountry = async () => {
    const response = await getDataPokemon(
      `https://restcountries.com/v3.1/name/${name}`
    );
   
  };

  useEffect(() => {
    FetchCountry();
  }, []);

  return (
    <Container>
      <Button variant="outlined" onClick={() => history(-1)}>
        Volver
      </Button>
      {Object.keys(country).length > 0 && (
        <Grid container spacing={3}>
          <Grid item md={6}>
          <img src={country.flags.svg} width={400} alt="" />
          </Grid>
          <Grid item md={6}>
            <h3>{country.name.common}</h3>
            <p>capital:{country.capital}</p>

          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Detail;
