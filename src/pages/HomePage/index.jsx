import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { FinanceForm } from '../../components/FinanceForm';
import { FinanceList } from '../../components/FinanceList';
import { Total } from '../../components/Total';
import styles from './HomePage.module.scss'; 

export const HomePage = () => {
    const [transactions, setTransactions] = useState([]);

    const handleAddTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction]);
    };

    const handleDeleteTransaction = (index) => {
        setTransactions(transactions.filter((_, i) => i !== index));
    };

    return (
        <main>
            <Header />
            <div className={styles.mainContainer}>
                <div>
                    <section>
                        <FinanceForm onAddTransaction={handleAddTransaction} />
                    </section>
                    <section>
                        <Total transactions={transactions} />
                    </section>
                </div>
                <section>
                    <FinanceList transactions={transactions} onDeleteTransaction={handleDeleteTransaction} />
                </section>
            </div>
        </main>
    );
};
