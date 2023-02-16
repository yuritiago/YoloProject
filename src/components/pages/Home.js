import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Sistema de Coliving</h1>
      <p>Encontre seu próximo lar compartilhado.</p>
      <h2>Como funciona:</h2>
      <ul>
        <li>Cadastre seu imóvel para oferecer vagas compartilhadas</li>
        <li>Procure por imóveis disponíveis para morar com outras pessoas</li>
        <li>Conecte-se com pessoas e escolha seu novo lar compartilhado</li>
      </ul>
      <Link to="/Registration"><button>Cadastrar Imóvel</button></Link>
      <Link to="/Property"><button>Buscar Imóveis</button></Link>
    </div>
  );
}

export default HomePage;
