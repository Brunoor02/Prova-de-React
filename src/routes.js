import { BrowserRouter, Routes, Route } from 'react-router-dom'


import LandingPage from './pages/Landing/index.js'
import Açaí from './pages/Acai/index.js'
import Sorveteria from './pages/Sorveteria/index.js'
import Signo from './pages/Signo/index.js'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/Acai' element={<Açaí />} />
                <Route path='/Signo' element={<Signo />} />
                <Route path='/Sorvete' element={<Sorveteria />} />

            </Routes>
        </BrowserRouter>

    )
}