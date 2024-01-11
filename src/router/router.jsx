import { BrowserRouter,Routes,Route } from "react-router-dom";
import Pokemon from "../pages/pokemon";
import Git from "../Git";
// import FormRegister from "../FormRegister";
import Header from "../components/Header";
import Flags from "../pages/Flags";
import Detail from "../pages/Detail"
import Login from "../pages/Login/Login";

const Router=()=>{

    return(
        <BrowserRouter>
        <Header/>
        <Routes>
             <Route path="/" element={<Login/>}/>
            <Route path="/Pokemon" element={<Pokemon/>}/>
            <Route path="/Git" element={<Git/>}/>
            <Route path="/banderas" element={<Flags/>}/>
            <Route path="/banderas/detail/:name" element={<Detail/>}/>
          
        </Routes>
        </BrowserRouter>
    )
}


export default Router;