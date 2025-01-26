// src/pages/Cadastro.js
import './styles/Cadastro.css';
import React, { useState } from 'react';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para cadastro
    console.log('Cadastro realizado:', { nome, email, senha });
  };

  return (
    <div className="cadastro">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;