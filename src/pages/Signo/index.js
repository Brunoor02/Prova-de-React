import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


export default function Signo(){
    
    const [mes, setMes] = useState(0);
    const [dia, setDia] = useState(0);
    const [resultado, setResultado] = useState(false);
    const [resultado1, setResultado1] = useState('')

    function eoSigno(){
        let r = '';
        let msg = ''

        if(dia > 22 && mes == 9 || mes == 10 && dia < 23 ){
            r = "true |"
            msg = 'O signo é libra'
    
        }
        else{
            r = "false |"
            msg = 'O seu signo não é libra'

        }
        setResultado(r);
        setResultado1(msg)
        
    }

    useEffect(() =>{
        eoSigno()
    }, [mes, dia])

    return(
        <main>
            <h1>Seu signo é Libra?</h1>

            <p>Dia <input type='text' value={dia} onChange={e => setDia(e.target.value)} /> </p>
            <p>Mês <input type='text' value={mes} onChange={e => setMes(e.target.value)} /></p>

            <p> {resultado} {resultado1}</p>

            <Link to='/'> Voltar para Home </Link>
        </main>
    )
}