import React from 'react';
import styles from './Total.module.scss'; 

export const Total = ({ transactions }) => {
    const total = transactions.reduce((acc, transaction) => {
        return transaction.tipo === 'entrada' ? acc + transaction.valor : acc - transaction.valor;
    }, 0);

    return (
        <div className={styles.totalGrid}>
            <div className={styles.valor}>
                <h3>Valor total:</h3>
            <p>O valor se refere ao saldo</p>
            </div>
            <div>
                <p className={styles.totalP}>R$ {total.toFixed(2)}</p>                
            </div>            
        </div>
    );
};
