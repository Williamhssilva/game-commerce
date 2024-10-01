import React from 'react';
import { Link } from 'react-router-dom';
import { useCave } from '../context/CaveContext';
import StoreIcon from '@mui/icons-material/Store';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import './Footer.css';

const Footer = () => {
  const { queijosNaCave } = useCave();

  return (
    <footer className="footer">
      <nav>
        <Link to="/"><StoreIcon /> Loja</Link>
        <Link to="/cave"><LocalMallIcon /> Cave ({queijosNaCave.length})</Link>
        <Link to="/checkout"><ShoppingCartIcon /> Checkout</Link>
        <Link to="/perfil"><PersonIcon /> Perfil</Link>
      </nav>
    </footer>
  );
};

export default Footer;