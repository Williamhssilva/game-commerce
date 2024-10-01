import React, { useState, useEffect, useRef } from 'react';
import QueijoSVG from './QueijoSVG';
import './Queijo.css';

const Queijo = ({ nome, tempoMaturacao, descricao, preco, isDraggable = true }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const queijoRef = useRef(null);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text', JSON.stringify({ nome, tempoMaturacao, descricao, preco }));
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setShowTooltip(!showTooltip);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (queijoRef.current && !queijoRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [queijoRef]);

  return (
    <div 
      ref={queijoRef}
      className="queijo"
      draggable={isDraggable}
      onDragStart={handleDragStart}
      onClick={handleClick}
    >
      <QueijoSVG color={`hsl(${tempoMaturacao * 2}, 100%, 50%)`} />
      <span className="queijo-nome">{nome}</span>
      {showTooltip && (
        <div className="queijo-tooltip">
          <h3>{nome}</h3>
          <p>Tempo de Maturação: {tempoMaturacao} dias</p>
          <p>{descricao}</p>
          <p>Preço: R$ {preco.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Queijo;