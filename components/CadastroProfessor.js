// src/components/CadastroProfessor.js

import React, { useState } from 'react';
import { database } from '../firebase';
import { ref, push } from 'firebase/database';

const CadastroProfessor = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [especializacao, setEspecializacao] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !email || !especializacao) {
            setFeedback("Todos os campos são obrigatórios.");
            return;
        }

        try {
            const novoProfessor = {
                nome,
                email,
                especializacao,
            };

            // Referência ao nó "professores" no banco de dados
            const professoresRef = ref(database, 'professores');

            // Salva no Firebase
            await push(professoresRef, novoProfessor);

            // Limpa o formulário e exibe mensagem de sucesso
            setNome('');
            setEmail('');
            setEspecializacao('');
            setFeedback("Cadastro de professor realizado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar professor: ", error);
            setFeedback("Ocorreu um erro ao cadastrar o professor.");
        }
    };

    return (
        <div>
            <h2>Cadastro de Professor</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    E-mail:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Especialização:
                    <input
                        type="text"
                        value={especializacao}
                        onChange={(e) => setEspecializacao(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Cadastrar</button>
            </form>
            {feedback && <p style={{ color: 'green' }}>{feedback}</p>}
        </div>
    );
};

export default CadastroProfessor;
