import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './index.scss'


export default function Sorveteria(){
    
    const [gramas, setGramas] = useState(0);
    const [resultado, setResultado] = useState(0);

    function Calcular(){
        try {
            let total = 0
    
            if(gramas > 1000) {
                total = (gramas / 100 ) * 3
            }
            else{
                total = (gramas / 100) * 3.50
            }
            setResultado(total)
            
        } catch (err) {
            setResultado(err.message)
        }
    }

    useEffect(() =>{
        Calcular()
    }, [gramas])
    return(
        <main className="sorvPag">
            <div className="tituloSorv">
                <img src="/assets/images/casquinha.png"/>
                <h1>BANCA DE SORVETE</h1>
                <img src="/assets/images/casquinha.png"/>
            </div>
                <div>
                    <p>Gramas: <input type='number' value={gramas} onChange={e => setGramas(e.target.value)} /> </p>
                    <p>Total: {resultado}</p>
                </div>

            <Link to='/'> Voltar para Home </Link>

        </main>

    )
}