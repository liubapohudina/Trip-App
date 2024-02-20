import styles from './header.module.css';

const Header = () => {
    return (
        <header className="container">
            <div className={styles.boxHeader}>
                <h1 className={styles.h1}>Weather<strong> Forecast</strong></h1>
            </div>    
        </header>
    )
}

export default Header;