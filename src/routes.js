import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Contatos from './Pages/contato';
import HomePageFruta from './Pages/HomePageFruta.js'
import HomePageDiversos from './Pages/HomePageDiversos.js'
import HomePageVerdura from './Pages/HomePageVerdura.js'
import HomePageLegume from './Pages/HomePageLegume.js'

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
             <Route
                path="/fruta"
                element={<HomePageFruta />}
            />
            <Route
                path="/diversos"
                element={<HomePageDiversos />}
            />
            <Route
                path="/verdura"
                element={<HomePageVerdura />}
            />
            <Route
                path="/legume"
                element={<HomePageLegume />}
            />
            <Route
                path="/contato"
                element={<Contatos />}
            />
        </Routes>
    )
}

export default MainRoutes;
