import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCave } from '../context/CaveContext';
import './Checkout.css';

const Checkout = () => {
  const { queijosNaCave, limparCave } = useCave();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: '',
    metodoPagamento: 'cartao'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const calcularTotal = () => {
    return queijosNaCave.reduce((total, queijo) => total + queijo.preco, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular processamento do pagamento
    console.log('Processando pagamento...');
    setTimeout(() => {
      console.log('Pagamento processado com sucesso!');
      // Limpar a cave
      limparCave();
      // Redirecionar para a página de confirmação
      navigate('/confirmacao', { 
        state: { 
          pedido: queijosNaCave,
          total: calcularTotal(),
          cliente: formData
        } 
      });
    }, 2000);
  };

  return (
    <div className="checkout">
      <h2>Finalizar Compra</h2>
      <div className="checkout-container">
        <form onSubmit={handleSubmit} className="checkout-form">
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Nome completo"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="E-mail"
            required
          />
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleInputChange}
            placeholder="Endereço"
            required
          />
          <input
            type="text"
            name="cidade"
            value={formData.cidade}
            onChange={handleInputChange}
            placeholder="Cidade"
            required
          />
          <input
            type="text"
            name="estado"
            value={formData.estado}
            onChange={handleInputChange}
            placeholder="Estado"
            required
          />
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleInputChange}
            placeholder="CEP"
            required
          />
          <select
            name="metodoPagamento"
            value={formData.metodoPagamento}
            onChange={handleInputChange}
            required
          >
            <option value="cartao">Cartão de Crédito</option>
            <option value="boleto">Boleto Bancário</option>
            <option value="pix">PIX</option>
          </select>
          <button type="submit">Confirmar Pedido</button>
        </form>
        <div className="checkout-summary">
          <h3>Resumo do Pedido</h3>
          {queijosNaCave.map((queijo, index) => (
            <div key={index} className="checkout-item">
              <span>{queijo.nome}</span>
              <span>R$ {queijo.preco.toFixed(2)}</span>
            </div>
          ))}
          <div className="checkout-total">
            <strong>Total:</strong>
            <strong>R$ {calcularTotal().toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;