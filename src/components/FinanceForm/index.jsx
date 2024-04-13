import { useState } from "react";
import styles from "./style.module.scss";

export const FinanceForm = ({ onSubmit }) => {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('entrada');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ descricao, valor, tipo });
    };

    return (
        <form className={styles.formGrid} onSubmit={handleSubmit}>
            <div className={styles.formInputsBox}>
                <div className={styles.inputDescricao}>
                    <label htmlFor="descricao">Descrição</label>
                    <input type="text" placeholder="Digite aqui sua descrição" id="descricao" value={descricao} onChange={e => setDescricao(e.target.value)} />
                    <span>Ex: Compra de roupas</span>
                </div>
                <div className={styles.inputType}>
                    <label htmlFor="valor">Valor (R$)</label>
                    <input type="number" id="valor" value={valor} onChange={e => setValor(e.target.value)} />
                </div>
                <div className={styles.input}>
                    <select className={styles.select} value={tipo} onChange={e => setTipo(e.target.value)}>
                        <option value="entrada">Entrada</option>
                        <option value="despesa">Despesa</option>
                    </select>
                </div>
                <button type="submit">Inserir valor</button>
            </div >
        </form>
    );
};