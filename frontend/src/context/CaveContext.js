import React, { createContext, useState, useContext } from 'react';

const CaveContext = createContext();

export const useCave = () => useContext(CaveContext);

export const CaveProvider = ({ children }) => {
  const [queijosNaCave, setQueijosNaCave] = useState([]);

  const adicionarQueijo = (queijo) => {
    setQueijosNaCave((prevQueijos) => {
      const queijoExistente = prevQueijos.find(q => q.nome === queijo.nome);
      if (queijoExistente) {
        return prevQueijos;
      } else {
        return [...prevQueijos, { ...queijo, preco: parseFloat(queijo.preco) }];
      }
    });
  };

  const removerQueijo = (index) => {
    setQueijosNaCave((prevQueijos) => prevQueijos.filter((_, i) => i !== index));
  };

  const limparCave = () => {
    setQueijosNaCave([]);
  };

  return (
    <CaveContext.Provider value={{ queijosNaCave, adicionarQueijo, removerQueijo, limparCave }}>
      {children}
    </CaveContext.Provider>
  );
};