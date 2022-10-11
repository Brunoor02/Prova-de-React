import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Temperatura(){

    const [temperatura, setTemperatura] = useState();
    const [total, setTotal] = useState('')

    function medirTemp(){
        try {
            let msg = ''

            if(temperatura <= 33){
                msg = 'foi de comes e bebes'
            }
            if(temperatura <= 36 && temperatura > 33){
                msg = 'Hipotermia'
            }
            if(temperatura >= 36 && temperatura <= 37.6){
                msg = 'Temperatura normal'
            }
            if(temperatura >= 37.6 && temperatura <= 39){
                msg = 'Febril'
            }
            if(temperatura >= 39.6 && temperatura <= 40){
                msg = 'Febre Alta'
            }
            if(temperatura >= 41){
                msg = 'Hipertermia'
            }

            setTotal(msg)
            
        } catch (err) {
            setTotal(err.message)
        }
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