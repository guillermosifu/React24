import React from "react";
import { Grid, TextField, Card, CardContent, Button } from "@mui/material";


const Login = () => {

const handleClick=()=>{
    
}


  return (
    <div className="login">
      <Grid container justifyContent="center">
        <Grid item md={6}>
          <img
            src="https://i.postimg.cc/W44QhdV9/logo-tec.jpg"
            alt=""
            width={300}
          />
        </Grid>
        <Grid item md={6}>
          <Card>
            <CardContent>
              <h5>Bienvenido a Codigo</h5>
              <p>Bienvenido al grupo g24</p>
              <Grid container mt={5}>
                <TextField label="Email" fullWidth name="email" />
              </Grid>
              <Grid container mt={5}>
                <TextField label="Password" fullWidth name="password" />
              </Grid>
              <Grid item md={12} mt={3} fullWidth>
                <Button variant="contained">Inicia Sesion</Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
