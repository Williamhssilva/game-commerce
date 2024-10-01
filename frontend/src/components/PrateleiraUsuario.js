import React from 'react';
import { useCave } from '../context/CaveContext';
import Queijo from './Queijo';
import './PrateleiraUsuario.css';

const PrateleiraUsuario = () => {
  const { queijosNaCave, adicionarQueijo, removerQueijo } = useCave();

  const handleDrop = (e) => {
    e.preventDefault();
    const queijoData = JSON.parse(e.dataTransfer.getData('text'));
    adicionarQueijo(queijoData);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div 
      className="prateleira-usuario"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {queijosNaCave.map((queijo, index) => (
        <div key={index} className="queijo-container">
          <Queijo {...queijo} isDraggable={false} />
          <button 
            className="remover-queijo" 
            onClick={() => removerQueijo(index)}
          >
            X
          </button>
        </div>
      ))}
      {queijosNaCave.length === 0 && (
        <p className="prateleira-vazia">Arraste os queijos para cá!</p>
      )}
    </div>
  );
};

export default PrateleiraUsuario;