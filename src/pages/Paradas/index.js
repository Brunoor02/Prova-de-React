import './index.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Paradas(){

    const [capac, setCapac] = useState(0)
    const [consumo, setConsumo] = useState(0)
    const [dist, setDist] = useState(0)
    const [total, setTotal] = useState(0);

    function totalParadas(){
        
        try {
            let litros = dist / consumo;
            let qtdParads = litros / capac;
    
            qtdParads = Math.ceil(qtdParads);
    
            let msg = 'Você vai precisar fazer ' + qtdParads + ' paradas para abastecer';
            if(capac <= 0 || consumo <= 0 || dist <= 0){
                msg = 'Valor invalido'
            }

            setTotal(msg)

        } catch (err) {
            setTotal(err.message)
        }
    }

    useEffect(() => {
        totalParadas()
    }, [capac, consumo, dist])

    return(
        <main>
            <h1>Quantidade de paradas</h1>
            <p>Capacidade do tanque: <input type='number' value={capac} onChange={e => setCapac(Number(e.target.value)) }/></p>
            <p>Consumo: <input type='number' value={consumo} onChange={e => setConsumo(Number(e.target.value)) }/></p>
            <p>Distancia: <input type='number' value={dist} onChange={e => setDist (Number(e.target.value)) }/></p>

            <h3>{total}</h3>

            <Link to='/'>Voltar para Home</Link>


        </main>

    )

}