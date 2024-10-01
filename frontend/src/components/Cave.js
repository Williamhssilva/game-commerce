import React from 'react';
import { Link } from 'react-router-dom';
import { useCave } from '../context/CaveContext';
import Queijo from './Queijo';
import './Cave.css';

const Cave = () => {
  const { queijosNaCave, removerQueijo } = useCave();

  const calcularTotal = () => {
    return queijosNaCave.reduce((total, queijo) => total + queijo.preco, 0);
  };

  const handleFinalizarCompra = () => {
    // Implementaremos isso em breve
    console.log("Finalizando compra...");
  };

  return (
    <div className="cave">
      <h2>Sua Cave de Queijos</h2>
      <div className="cave-prateleiras">
        {queijosNaCave.map((queijo, index) => (
          <div key={index} className="cave-item">
            <Queijo {...queijo} isDraggable={false} />
            <p>Preço: R$ {queijo.preco.toFixed(2)}</p>
            <button onClick={() => removerQueijo(index)}>Remover</button>
          </div>
        ))}
      </div>
      {queijosNaCave.length === 0 && <p>Sua cave está vazia. Adicione alguns queijos!</p>}
      {queijosNaCave.length > 0 && (
        <div className="cave-summary">
          <p>Total: R$ {calcularTotal().toFixed(2)}</p>
          <Link to="/checkout">
            <button>Finalizar Compra</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cave;