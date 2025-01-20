// src/pages/Servicos.js
import React from 'react';

const Servicos = () => {
  const servicos = [
    { id: 1, nome: 'Limpeza', descricao: 'Limpeza geral da casa' },
    { id: 2, nome: 'Jardinagem', descricao: 'Cuidados com o jardim' },
    // Adicione mais serviços conforme necessário
  ];

  return (
    <div className="servicos">
      <h1>Serviços Disponíveis</h1>
      <ul>
        {servicos.map(servico => (
          <li key={servico.id}>
            <h2>{servico.nome}</h2>
            <p>{servico.descricao}</p>
            <button>Agendar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Servicos;