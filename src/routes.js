 
import { BrowserRouter,  Routes, Route } from "react-router-dom"
import Header from "./comp/Header"
import Rodape from "./comp/Rodape"
import PesquisaProvider from "./context/Pesquisa"
import Inicio from "./pages/Inicio"
import Pesquisa from "./pages/Pesquisa"

function AppRoutes() {
    return (
        <BrowserRouter> 
            <Header />
            <PesquisaProvider>
            <Routes> 
                <Route path="/" element={<Inicio />} /> 
                <Route path="/pesquisa" element={<Pesquisa />} /> 
            </Routes>
            </PesquisaProvider>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes
