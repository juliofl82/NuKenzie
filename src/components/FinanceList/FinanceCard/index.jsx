import React from 'react';
import styles from './FinanceCard.module.scss'; 

export const FinanceCard = ({ transaction, onDelete }) => {

    const colorClass = transaction.tipo === "entrada" ? styles.entrada : styles.despesa;

    return (
        <div className={styles.financeCard}>
            <div className={`${styles.colorCard} ${colorClass}`}>                
            </div>
            <div className={styles.descricao}>
                <p>Descrição: {transaction.descricao}</p>
                <p className={styles.tipoEntrada} >{transaction.tipo}</p>
            </div>
            <div className={styles.valor}>
                <p>R${transaction.valor.toFixed(2)}</p>
                <button onClick={onDelete}>Excluir</button>
            </div>
        </div>
    );
};
