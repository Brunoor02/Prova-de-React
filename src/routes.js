import { BrowserRouter, Routes, Route } from 'react-router-dom'


import LandingPage from './pages/Landing/index.js'
import Açaí from './pages/Acai/index.js'
import Sorveteria from './pages/Sorveteria/index.js'
import Signo from './pages/Signo/index.js'
import Salario from './pages/Salario/index.js'
import Paradas from './pages/Paradas/index.js'
import Temperatura from './pages/Temperatura/index.js'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/Acai' element={<Açaí />} />
                <Route path='/Signo' element={<Signo />} />
                <Route path='/Sorvete' element={<Sorveteria />} />
                <Route path='/Salario' element={<Salario/>} />
                <Route path='/Paradas' element={<Paradas/>} />
                <Route path='/Temperatura' element={<Temperatura/>} />

            </Routes>
        </BrowserRouter>

    )
}