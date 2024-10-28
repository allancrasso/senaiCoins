// src/components/Menu.js

import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/cadastro-usuario">Cadastro de Usuário</Link></li>
                <li><Link to="/cadastro-professor">Cadastro de Professor</Link></li>
                <li><Link to="/depositos">Depósitos</Link></li>
                <li><Link to="/extratos">Extratos</Link></li>
                <li><Link to="/saldos">Saldos</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
