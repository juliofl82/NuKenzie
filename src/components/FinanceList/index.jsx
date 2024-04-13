import { FinanceCard } from "./FinanceCard";
import { financialItems } from "../../data";
import styles from "./style.module.scss";
import { useState } from "react";

export const FinanceList = () => {
const [items, setItems] = useState(financialItems);

const handleDelete = (index) => {
    const NewItens = items.filter((_, i) => i !== index);
    setItems(NewItens);
};

    return (
        <section className={styles.FinanceListSection}>
            <div>
                <h2>Resumo financeiro</h2>
            </div>
            <div>
            {items.map((item, index) => (
                <FinanceCard
                    key={index}
                    item={item}
                    onDelete={() => handleDelete(index)}
                />
            ))}
            </div>
        </section>
    );
};