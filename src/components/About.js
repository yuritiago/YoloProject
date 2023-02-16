import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <h1>O que é coliving?</h1>
      <p>Coliving é um estilo de vida que envolve morar em <br></br>
      espaços compartilhados com outras pessoas.<br></br>
        É uma alternativa ao modelo tradicional de moradia, <br></br>
        oferecendo mais socialização e uma comunidade mais unida.</p>
      <h2>Benefícios do coliving</h2>
      <ul>
        <li>Compartilhamento de espaços</li>
        <li>Maior socialização</li>
        <li>Maior conveniência</li>
        <li>Custos mais baixos</li>
        <li>Maior sustentabilidade</li>
      </ul>
      <img src="https://imagens-revista-pro.vivadecora.com.br/uploads/2020/02/O-que-%C3%A9-Coliving-1.png" alt="Imagem de coliving" />
      <p>Para saber mais sobre coliving, visite nossos recursos recomendados abaixo:</p>
      <ul>
        <li><a href="https://pt.wikipedia.org/wiki/Coliving#:~:text=Coliving%20%C3%A9%20um%20tipo%20de,pessoas%20com%20afinidades%20de%20inten%C3%A7%C3%B5es.">O que é coliving</a></li>
        <li><a href="https://blog.movingimoveis.com.br/coliving/">Benefícios do coliving</a></li>
        <li><a href="https://example.com/coliving-communities">Comunidades de coliving</a></li>
      </ul>
    </div>
  );
}

export default About;
