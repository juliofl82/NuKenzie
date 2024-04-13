import styles from "./style.module.scss";

export const FinanceCard = ({item, onDelete}) => {
    return (
        <div className={styles.financeCard}>
            <p>Descrição: {item.descricao}</p>
            <p>Valor: R${item.valor}</p>
            <p>Tipo: {item.tipo}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};