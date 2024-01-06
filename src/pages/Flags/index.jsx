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
  const [region, setRegion] = useState("");
  const FetchCountries = async () => {
    const response = await getDataPokemon("https://restcountries.com/v3.1/all");

    setCountries(response);
  };

  const handleRegion = async (e) => {
    setRegion(e.target.value);

    if (e.target.value === "all") {
      FetchCountries();
      return;
    }
    //primero debemos limpiar la data que se ha llamada
    setCountries([]);
    const response = await getDataPokemon(
      `https://restcountries.com/v3.1/region/${e.target.value}`
    );
    setCountries(response);
  };

  const handleSearchCountry =(e)=> {
    const countryName = e.target.value;
    if (countryName.length === 0) {
      FetchCountries();
    }
    if (countryName.length > 3) {
      const filterCountries = countries.filter((country) =>
        country.name.official.toUpperCase().includes(countryName.toUpperCase())
      );
      setCountries(filterCountries);
    }
  };

  useEffect(() => {
    FetchCountries();
  }, []);

  return (
    <Container>
      <Grid container spacing={3} mt={5}>
        <Grid item md={6} sm={12}>
          <TextField
            fullWidth
            label="Busca tu pais"
            onChange={handleSearchCountry}
          />
        </Grid>
        <Grid item md={6} sm={12}>
          <FormControl fullWidth>
            <InputLabel>Filtra tu Region</InputLabel>
            <Select label="Filtra tu Region" value={region} onChange={handleRegion}>
              <MenuItem value="all">Todas Las Regiones</MenuItem>
              <MenuItem value="Africa">Africa</MenuItem>
              <MenuItem value="America">America</MenuItem>
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Europe">Europe</MenuItem>
              <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {countries.length > 0 &&
          countries.map((country) => (
            <Grid item md={3} sm={12}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={country.flags.svg}
                />
                <CardContent>
                  <h4>{country.name.common}</h4>
                  <p>Capital :{country.capital}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Flags;
