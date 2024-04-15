import React from 'react';
import { FinanceCard } from './FinanceCard';
import styles from './FinanceList.module.scss'; // Assegure-se de ter o arquivo de estilos correspondente

export const FinanceList = ({ transactions, onDeleteTransaction }) => {
    return (
        <>
            <h2>Resumo financeiro</h2>
            <div className={styles.financeList}>
                {transactions.map((transaction, index) => (
                    <FinanceCard
                        key={index}
                        transaction={transaction}
                        onDelete={() => onDeleteTransaction(index)}
                    />
                ))}
            </div>
        </>
    );
};
