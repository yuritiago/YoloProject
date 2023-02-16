import React, { useState } from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';

const CadastrarImovel = () => {
  const [localizacao, setLocalizacao] = useState('');
  const [numeroQuartos, setNumeroQuartos] = useState(0);
  const [numeroBanheiros, setNumeroBanheiros] = useState(0);
  const [areaComum, setAreaComum] = useState('');
  const [mobiliaEquipamentos, setMobiliaEquipamentos] = useState('');
  const [servicos, setServicos] = useState('');
  const [regras, setRegras] = useState('');
  const [valorAluguel, setValorAluguel] = useState(0);
  const [respostaJson, setRespostaJson] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      localizacao: localizacao,
      numeroQuartos : numeroQuartos,
      numeroBanheiros: numeroBanheiros,
      areaComum: areaComum,
      mobiliaEquipamentos: mobiliaEquipamentos,
      servicos: servicos,
      regras: regras,
      valorAluguel: valorAluguel
    };
    fetch('http://localhost:3000/Registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => setRespostaJson(data))
    .catch(error => console.error(error));

    // eslint-disable-next-line no-lone-blocks
    {respostaJson && <pre>{JSON.stringify(respostaJson, null, 2)}</pre>}
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Localização:
        <input type="text" value={localizacao} onChange={(event) => setLocalizacao(event.target.value)} />
      </label>
      <label>
        Número de quartos:
        <input type="number" value={numeroQuartos} onChange={(event) => setNumeroQuartos(event.target.value)} />
      </label>
      <label>
        Número de banheiros:
        <input type="number" value={numeroBanheiros} onChange={(event) => setNumeroBanheiros(event.target.value)} />
      </label>
      <label>
        Área comum:
        <input type="text" value={areaComum} onChange={(event) => setAreaComum(event.target.value)} />
      </label>
      <label>
        Mobília e equipamentos disponíveis:
        <input type="text" value={mobiliaEquipamentos} onChange={(event) => setMobiliaEquipamentos(event.target.value)} />
      </label>
      <label>
        Serviços oferecidos:
        <input type="text" value={servicos} onChange={(event) => setServicos(event.target.value)} />
      </label>
      <label>
        Regras de convivência:
        <input type="text" value={regras} onChange={(event) => setRegras(event.target.value)} />
      </label>
      <label>
        Valor de aluguel:
        <input type="number" value={valorAluguel} onChange={(event) => setValorAluguel(event.target.value)} />
      </label>
      <Link to="/Property"><button type="submit">Cadastrar imóvel</button></Link>
      
    </form>
    
  );
};


export default CadastrarImovel;

