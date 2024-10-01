import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Confirmacao.css';

const Confirmacao = () => {
  const location = useLocation();
  const { pedido, total, cliente } = location.state || {};

  useEffect(() => {
    // Simular envio de e-mail de confirmação
    console.log(`Enviando e-mail de confirmação para ${cliente.email}`);
  }, [cliente]);

  if (!pedido) {
    return <div>Pedido não encontrado.</div>;
  }

  return (
    <div className="confirmacao">
      <h2>Pedido Confirmado!</h2>
      <p>Obrigado por sua compra, {cliente.nome}!</p>
      <h3>Resumo do Pedido:</h3>
      <ul>
        {pedido.map((queijo, index) => (
          <li key={index}>{queijo.nome} - R$ {queijo.preco.toFixed(2)}</li>
        ))}
      </ul>
      <p><strong>Total: R$ {total.toFixed(2)}</strong></p>
      <p>Um e-mail de confirmação foi enviado para {cliente.email}.</p>
      <p>Seu pedido será entregue em:</p>
      <address>
        {cliente.endereco}, {cliente.cidade} - {cliente.estado}, {cliente.cep}
      </address>
      <Link to="/">Voltar para a Loja</Link>
    </div>
  );
};

export default Confirmacao;