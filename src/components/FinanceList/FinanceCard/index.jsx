import React from 'react';
import styles from './FinanceCard.module.scss';

export const FinanceCard = ({ transaction, onDelete, children }) => {

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };
    const colorClass = transaction.tipo === "entrada" ? styles.entrada : styles.despesa;

    return (
        <div className={styles.financeCard}>
            <div className={`${styles.colorCard} ${colorClass}`}>
            </div>
            <div className={styles.descricao}>
                {children}                
            </div>
            <div className={styles.valor}>
                <p>{formatCurrency(transaction.valor)}</p>
                <button onClick={onDelete}>Excluir</button>
            </div>
        </div>
    );
};
