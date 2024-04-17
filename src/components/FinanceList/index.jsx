import React from 'react';
import { FinanceCard } from './FinanceCard';
import styles from './FinanceList.module.scss';


export const FinanceList = ({ transactions, onDeleteTransaction }) => {
    return (
        <>
            <h2 className={styles.listTitle}>Resumo financeiro</h2>
            <div className={styles.financeList}>
                {transactions.length > 0 ? (
                    transactions.map((transaction, index) => (
                        <FinanceCard
                            key={index}
                            transaction={transaction}
                            onDelete={() => onDeleteTransaction(index)}
                        >
                            <p className={styles.descricao}>Descrição: {transaction.descricao}</p>
                            <p className={styles.tipoEntrada}>Tipo: {transaction.tipo}</p>
                        </FinanceCard>
                    ))
                ) : (
                    <p className={styles.empty}>Você ainda não possui nenhum lançamento</p>
                )}
            </div>
        </>
    );
};
