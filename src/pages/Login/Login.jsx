import React from "react";
import { Grid, TextField, Card, CardContent, Button } from "@mui/material";
import { UserContext } from "../../components/Context/UserContext";
import { useContext } from "react";


const Login = () => {
const{user,setUser}=useContext(UserContext)
const handleClick=()=>{
setUser({
    name:"juan",
    lastNAme:"Zarate"
})
    
}


  return (
   
    <Grid
    container
    alignItems="center"
    justifyContent="center">
     <Grid item md ={6}>
        <h4>{user.name} {user.lastNAme}</h4>
       <img src="https://i.postimg.cc/W44QhdV9/logo-tec.jpg" alt="" />
     </Grid>
     <Grid item md={6}>        
         <Card>
             <CardContent>
                 <h5>Bienvenidos a codigo</h5>
                 <p>Bienvenido a la comunidad del grupo 24</p>
                 <Grid container sapacing ={3} mt={5}>
                     <TextField
                     label="Email"
                     fullWidth
                     name="email"/>
                 </Grid>
                 <Grid item md={12} mt={5}>
                     <TextField
                     label="Password"
                     fullWidth
                     name="password"/>
                 </Grid>
                 <Grid item md={12} mt={3}>
                     <Button
                     sx={{backGroundColor: "#000"}}
                     variant="contained"
                     fullWidth
                     size="large"
                     onClick={handleClick}
                    >
                         Inicia Sesion
                     </Button>
                 </Grid>
             </CardContent>
         </Card>
     </Grid>
     

    </Grid>
  );
};

export default Login;
