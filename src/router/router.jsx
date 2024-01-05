import { BrowserRouter,Routes,Route } from "react-router-dom";
import Pokemon from "../components/pokemon";
import Git from "../Git";
import FormRegister from "../FormRegister";
import Header from "../components/Header";


const Router=()=>{

    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<FormRegister/>}/>
            <Route path="/Pokemon" element={<Pokemon/>}/>
            <Route path="/Git" element={<Git/>}/>
        </Routes>
        </BrowserRouter>
    )
}


export default Router;