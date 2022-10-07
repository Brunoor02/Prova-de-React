import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function Acai () {
  const [qtdPequena, setQtdPequena] = useState(0);
  const [qtdMedia, setQtdMédia] = useState(0);
  const [qtdGrande, setQtdGrande] = useState(0);

  const [desconto, setDesconto] = useState(0);
  const [resultado, setResultado] = useState(0);

  function calcular(){
    let total = qtdPequena * 13.50 + qtdMedia * 15 + qtdGrande * 17.50;
    let desc = total * desconto / 100;

    let r = total - desc
    setResultado(r);
  }

  useEffect(() =>{
    calcular()
  }, [qtdPequena, qtdMedia, qtdGrande, desconto])

  return (
    
    <main>
      <h1>Banca do Açaí</h1>
        <div>
          <p>Quantidade de Açaí pequeno <input type='number' value={qtdPequena} onChange={e=> setQtdPequena(e.target.value)}/></p>
        </div>
        <div>
          <p>Quantidade de Açaí Média <input type='number' value={qtdMedia} onChange={e=> setQtdMédia(e.target.value)}/></p>
        </div>
        <div>
          <p>Quantidade de Açaí Grande <input type='number' value={qtdGrande} onChange={e=> setQtdGrande(e.target.value)}/></p>
        </div>
        <div>
          <p>Desconto <input type='number' value={desconto} onChange={e=> setDesconto(e.target.value)}/></p>
        </div>
        <div>
          <p>Total {resultado}</p>
        </div>

        <Link to='/'> Voltar para Home </Link>
    </main>
  );
}