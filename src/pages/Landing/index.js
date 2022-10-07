import { Link } from "react-router-dom";
import './index.scss'



export default function Home(){
    return(
        <main>
            <h1>HOME DA PROVA</h1>
        <div className="linksPags">
            <Link to='/Acai'>Açaí</Link>
            <Link to='Sorvete'>Sorveteria</Link>
            <Link to='/Signo'>Signo</Link>
        </div>
        </main>


    )
}