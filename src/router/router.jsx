import { BrowserRouter,Routes,Route } from "react-router-dom";
import Pokemon from "../pages/pokemon";
import Git from "../Git";
import FormRegister from "../FormRegister";
import Header from "../components/Header";
import Flags from "../pages/Flags";


const Router=()=>{

    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<FormRegister/>}/>
            <Route path="/Pokemon" element={<Pokemon/>}/>
            <Route path="/Git" element={<Git/>}/>
            <Route path="/banderas" element={<Flags/>}/>
        </Routes>
        </BrowserRouter>
    )
}


export default Router;