import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Primaria from './pages/corPrimaria';
import Frequencia from './pages/frequencia';
import MaiorNumero from './pages/maiorNumero';
import Soma from './pages/Soma';
import Dobro from './pages/dobro';
import Temperatura from './pages/temperatura';
import Media from './pages/media';
import Ingresso from './pages/ingresso';


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/corPrimaria' element={ <Primaria/> } />
                <Route path='/frequencia' element={ <Frequencia/> } />
                <Route path='/maiorNumero' element={ <MaiorNumero/> } />
                <Route path='/soma' element={ <Soma/> } />
                <Route path='/dobro' element={ <Dobro/> } />
                <Route path='/temperatura' element={ <Temperatura/> } />
                <Route path='/media' element={ <Media/> } />
                <Route path='/ingresso' element={ <Ingresso/> } />
            </Routes>
        </BrowserRouter>
    );
}