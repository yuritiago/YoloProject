import React from 'react';

const PropertyDetails = ({ property }) => {
  return (
    <div>
      <h2>Detalhes do imóvel</h2>
      <table>
        <tbody>
          <tr>
            <td>Localização:</td>
            <td>{property.localizacao}</td>
          </tr>
          <tr>
            <td>Número de quartos:</td>
            <td>{property.numeroQuartos}</td>
          </tr>
          <tr>
            <td>Número de banheiros:</td>
            <td>{property.numeroBanheiros}</td>
          </tr>
          <tr>
            <td>Área comum:</td>
            <td>{property.areaComum}</td>
          </tr>
          <tr>
            <td>Mobília e equipamentos disponíveis:</td>
            <td>{property.mobiliaEquipamentos}</td>
          </tr>
          <tr>
            <td>Serviços oferecidos:</td>
            <td>{property.servicos}</td>
          </tr>
          <tr>
            <td>Regras de convivência:</td>
            <td>{property.regras}</td>
          </tr>
          <tr>
            <td>Valor de aluguel:</td>
            <td>{property.valorAluguel}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PropertyDetails;

