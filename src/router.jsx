import React, { useState } from "react";
import { Routes,BrowserRouter as Router,Route} from "react-router-dom";
import { Home } from "./pages/home";
import { Procedimentos } from "./pages/Procedimentos";
import { Procedimento } from "./pages/Procedimento";
import {Profissionais} from "./pages/pageProfissionais"
import { Sobre } from "./pages/Sobre";

const AppRouter = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/Home"  element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
                <Route path="/Procedimentos/" element={<Procedimentos/>}/>
                <Route path="/Procedimento/:id" element={<Procedimento/>}/>
                <Route path="/Profissionais" element={<Profissionais/>}/>
            </Routes>
        </Router>
    )
}
export default AppRouter