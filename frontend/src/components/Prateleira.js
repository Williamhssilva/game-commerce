import React from 'react';
import Queijo from './Queijo';
import './Prateleira.css';

const Prateleira = ({ queijos }) => {
  return (
    <div className="prateleira">
      {queijos.map((queijo, index) => (
        <Queijo key={index} {...queijo} />
      ))}
    </div>
  );
};

export default Prateleira;