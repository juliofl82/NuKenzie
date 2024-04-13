import Logo from "../../assets/logo.svg";
import styles from "./style.module.scss";

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <nav className={styles.navContainer}>
                <img className="logoImage" src={Logo} alt="Imagem da logo" />
            </nav>
        </header>
    );
};