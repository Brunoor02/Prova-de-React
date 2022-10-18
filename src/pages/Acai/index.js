import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { calcularAcai } from "../../services";

export default function Acai() {
  const [qtdPequena, setQtdPequena] = useState(0);
  const [qtdMedia, setQtdMédia] = useState(0);
  const [qtdGrande, setQtdGrande] = useState(0);

  const [desconto, setDesconto] = useState(0);
  const [resultado, setResultado] = useState(0);

  function Calcular() {
    let x = calcularAcai(qtdPequena, qtdMedia, qtdGrande, desconto)
    setResultado(x)
  }

  useEffect(() => {
    Calcular()
  }, [qtdPequena, qtdMedia, qtdGrande, desconto])


  return (

    <main className='acaiPag'>
      <div className='tituloAcai'>
        <img src='/assets/images/fruta.png' className='acai1' />
        <h1>Banca do Açaí</h1>
        <img src='/assets/images/fruta.png' className='acai2' />
      </div>
      <div className='eita'>

        <div className='inputsAcai'>
          <div>
            <p>Quantidade de Açaí pequeno <input type='number' value={qtdPequena} onChange={e => setQtdPequena(e.target.value)} /></p>
          </div>
          <div>
            <p>Quantidade de Açaí Média <input type='number' value={qtdMedia} onChange={e => setQtdMédia(e.target.value)} /></p>
          </div>
          <div>
            <p>Quantidade de Açaí Grande <input type='number' value={qtdGrande} onChange={e => setQtdGrande(e.target.value)} /></p>
          </div>
          <div>
            <p>Desconto <input type='number' value={desconto} onChange={e => setDesconto(e.target.value)} /></p>
          </div>
          <div>
            <p>{resultado}</p>
          </div>
        </div>
      </div>

      <Link to='/'> Voltar para Home </Link>
    </main>
  );
}