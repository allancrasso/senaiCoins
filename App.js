// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css'; // Importe o arquivo de estilos

import Menu from './components/Menu';
import Footer from './components/Footer';
import CadastroUsuario from './components/CadastroUsuario';
import CadastroProfessor from './components/CadastroProfessor';
import Depositos from './components/Depositos';
import Extratos from './components/Extratos';
import Saldos from './components/Saldos';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Banco Digital para Alunos e Professores</h1>
                <Menu />
                <Routes>
                    <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
                    <Route path="/cadastro-professor" element={<CadastroProfessor />} />
                    <Route path="/depositos" element={<Depositos />} />
                    <Route path="/extratos" element={<Extratos />} />
                    <Route path="/saldos" element={<Saldos />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
