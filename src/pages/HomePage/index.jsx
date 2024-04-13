import { FinanceForm } from "../../components/FinanceForm";
import { FinanceList } from "../../components/FinanceList";
import { Header } from "../../components/Header";
import { Total } from "../../components/Total";
import styles from "./style.module.scss";



export const HomePage = () => {
    return (
        <>
            <Header/>
            <main className={styles.mainContainer}>
                <div>
                    <FinanceForm />
                    <div>
                       <Total /> 
                    </div>
                </div>
                <div>
                  <FinanceList />  
                    </div>                 
            </main>
        </>
    )
}