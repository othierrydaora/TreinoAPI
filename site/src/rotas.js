import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Primaria from './pages/corPrimaria';
import Frequencia from './pages/frequencia';
import MaiorNumero from './pages/maiorNumero';


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/corPrimaria' element={ <Primaria/> } />
                <Route path='/frequencia' element={ <Frequencia/> } />
                <Route path='/ingresso' element={ <MaiorNumero/> } />
            </Routes>
        </BrowserRouter>
    );
}