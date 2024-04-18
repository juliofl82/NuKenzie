import React, { useState } from 'react';
import styles from './FinanceForm.module.scss'; 

export const FinanceForm = ({ onAddTransaction }) => {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('entrada');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!descricao.trim() || !valor.trim()) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        const valorNumerico = parseFloat(valor);
        if (isNaN(valorNumerico) || valorNumerico <= 0) {
            alert("Por favor, insira um valor positivo.");
            return; 
        }

        onAddTransaction({
            descricao,
            valor: valorNumerico, 
            tipo
        });
        
        setDescricao('');
        setValor('');
        setTipo('entrada');
    };

    return (
        <form className={styles.formGrid} onSubmit={handleSubmit}>
            <div className={styles.inputDescricao}>
                <label htmlFor="descricao">Descrição</label>
                <input
                    type="text"
                    placeholder="Digite aqui sua descrição"
                    id="descricao"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <p className={styles.exTypo}>Ex: Compra de roupas</p>
            </div>
            <div className={styles.inputType}>
                <label htmlFor="valor">Valor (R$)</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    id="valor"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />
            </div>
            <div className={styles.input}>
                <label htmlFor="tipo">Tipo</label>
                <select
                    id="tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                >
                    <option value="entrada">Entrada</option>
                    <option value="despesa">Despesa</option>
                </select>
            </div>
            <button className={styles.buttonForm} type="submit">Inserir valor</button>
        </form>
    );
};
