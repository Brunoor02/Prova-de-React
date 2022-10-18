import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Febre } from "../../services";

export default function Temperatura(){

    const [temperatura, setTemperatura] = useState();
    const [total, setTotal] = useState('')

    function medirTemp() {
        let x = Febre(temperatura)
        setTotal(x);
    }
    
    useEffect(() =>{
        medirTemp()
    }, [temperatura])

    return(
        <main>
            <h1>Medir Temperatura</h1>

            <p>Temperatura<input type='number' value={temperatura} onChange={e => setTemperatura(Number(e.target.value))}/></p>
            <h3>A situação da sua temperatura é: {total}</h3>
            <Link to='/'>Voltar para Home</Link>
        </main>

    )
}