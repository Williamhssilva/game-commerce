import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Prateleira from './components/Prateleira';
import PrateleiraUsuario from './components/PrateleiraUsuario';
import Cave from './components/Cave';
import Checkout from './components/Checkout';
import Confirmacao from './components/Confirmacao';
import { CaveProvider } from './context/CaveContext';
import './App.css';

const queijosExemplo = [
  { 
    nome: 'Canastra Jovem', 
    tempoMaturacao: 14, 
    descricao: 'Queijo macio com sabor suave e levemente ácido.',
    preco: 45.90
  },
  { 
    nome: 'Canastra Meia Cura', 
    tempoMaturacao: 22, 
    descricao: 'Textura firme com sabor mais pronunciado.',
    preco: 52.90
  },
  { 
    nome: 'Canastra Curado', 
    tempoMaturacao: 30, 
    descricao: 'Sabor intenso e complexo, com notas de nozes.',
    preco: 59.90
  },
  { 
    nome: 'Canastra Extra Curado', 
    tempoMaturacao: 60, 
    descricao: 'Textura quebradiça e sabor muito intenso.',
    preco: 69.90
  },
];

function App() {
  return (
    <Router>
      <CaveProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <main>
                  <Prateleira queijos={queijosExemplo} />
                  <Prateleira queijos={queijosExemplo} />
                </main>
                <PrateleiraUsuario />
              </>
            } />
            <Route path="/cave" element={<Cave />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmacao" element={<Confirmacao />} />
          </Routes>
          <Footer />
        </div>
      </CaveProvider>
    </Router>
  );
}

export default App;