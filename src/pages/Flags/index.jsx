import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Container,
  Select,
  CardMedia,
  Grid,
  TextField,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { getDataPokemon } from "../../helpers";

const Flags = () => {
  const [countries, setCountries] = useState([]);

  const FetchCountries = async () => {
    const response = await getDataPokemon("https://restcountries.com/v3.1/all");
  };

  return (
    <Container>
      <Grid container>
        <Grid item md={6}>
          <TextField label="Busca tu pais" />
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel>Filtra tu Region</InputLabel>
            <Select label="Filtra tu Region">
              <MenuItem value="all">Todas Las Regiones</MenuItem>
              <MenuItem value="Africa">Africa</MenuItem>
              <MenuItem value="America">America</MenuItem>
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Europe">Europe</MenuItem>
              <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Flags;
