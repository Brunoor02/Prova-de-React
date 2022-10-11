import './index.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Salario(){

    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [total, setTotal] = useState(0)


    function calcularSalario(){
        try {
            let sal = salario * bonus / 100;
            let r = salario + sal - desconto;
            
    
            let mensagem = 'Seu salário liquido é de: ' + r;
    
            if(salario < 0 || bonus < 0 || desconto < 0 ){
                mensagem = 'Valores inválidos'
            }
    
            
            setTotal(mensagem)
            
        } catch (err) {
            setTotal(err.message)
        }

    }

    useEffect(() => {
        calcularSalario()
    }, [salario, bonus, desconto])

    return(
        <main>
            <h1> Calcular Salário Liquido </h1>
            <p> Insira o Salário: <input type='number' value={salario} onChange={e => setSalario (Number(e.target.value))} /></p>
            <p> Insira o Bonus: <input type='number' value={bonus} onChange={e => setBonus(Number(e.target.value))} /></p>
            <p> Insira o Desconto: <input type='number' value={desconto} onChange={e => setDesconto(Number(e.target.value))} /></p>
            <h3>{total}</h3>

            <Link to='/'> Voltar para Home </Link>
        </main>


    )



}