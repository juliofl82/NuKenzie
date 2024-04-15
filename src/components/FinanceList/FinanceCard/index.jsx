import React from 'react';
import styles from './FinanceCard.module.scss'; 

export const FinanceCard = ({ transaction, onDelete }) => {
    return (
        <div className={styles.financeCard}>
            <div className={styles.descricao}>
                <p>Descrição: {transaction.descricao}</p>
                <p>Tipo: {transaction.tipo}</p>
            </div>
            <div className={styles.valor}>
                <p>R${transaction.valor.toFixed(2)}</p>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};
