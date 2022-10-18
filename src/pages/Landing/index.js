import { Link } from "react-router-dom";
import './index.scss'




export default function Home() {
    return (
        <main className="homeMain">
            <div className="tituloHome">
                <img src="/assets/images/casa.png" height={60} width={60} />
                <h1>HOME DA PROVA</h1>
                <img src="/assets/images/casa.png" height={60} width={60} />
            </div>
            <div className="links">

                <div className="linksPags">
                    <Link to='/Acai'>Açaí</Link>
                    <Link to='Sorvete'>Sorveteria</Link>
                    <Link to='/Signo'>Signo</Link>
                    <Link to='/Ingresso'>Ingresso</Link>
                    <Link to='/Contar'>Contar</Link>
                    <Link to='/Retangulo'>Retangulo</Link>
                </div>
                <div className="linksPags">
                    <Link to='/Salario'>Salario</Link>
                    <Link to='/Paradas'>Paradas</Link>
                    <Link to='/Temperatura'>Temperatura</Link>
                    <Link to='/Orcamento'>Orçamento</Link>
                    <Link to='/Linha'>Linha</Link>                    
                </div>
            </div>
        </main>


    )
}