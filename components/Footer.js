// src/components/Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Banco Digital para Alunos e Professores. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;
