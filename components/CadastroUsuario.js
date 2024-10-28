// src/components/CadastroUsuario.js

import React, { useState } from 'react';
import { database } from '../firebase';
import { ref, push } from 'firebase/database';

const CadastroUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [turma, setTurma] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !email || !turma) {
            setFeedback("Todos os campos são obrigatórios.");
            return;
        }

        try {
            const novoUsuario = {
                nome,
                email,
                turma,
                coins: 0 // Inicia com zero coins
            };

            // Referência ao nó "usuarios" no banco de dados
            const usuariosRef = ref(database, 'usuarios');

            // Salva no Firebase
            await push(usuariosRef, novoUsuario);

            // Limpa o formulário e exibe mensagem de sucesso
            setNome('');
            setEmail('');
            setTurma('');
            setFeedback("Cadastro realizado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar usuário: ", error);
            setFeedback("Ocorreu um erro ao cadastrar o usuário.");
        }
    };

    return (
        <div>
            <h2>Cadastro de Usuário</h2>
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
                    Turma:
                    <input
                        type="text"
                        value={turma}
                        onChange={(e) => setTurma(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Cadastrar</button>
            </form>
            {feedback && <p style={{ color: 'green' }}>{feedback}</p>}
        </div>
    );
};

export default CadastroUsuario;
