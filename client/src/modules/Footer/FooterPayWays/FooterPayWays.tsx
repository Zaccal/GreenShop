import styles from './FooterPayWays.module.css';

const FooterPayWays = () => {
    return (
        <div className={styles.section}>
            <h4 className={styles.title}>We accept</h4>
            <div className={styles.container}>
                <a href="#" className={styles.pay}>
                    <img src="/PayPal.png" alt="PayPal" />
                </a>
                <a href="#" className={styles.pay}>
                    <img src="/master-card.png" alt="MasterCard" />
                </a>
                <a href="#" className={styles.pay}>
                    <img src="/visa.png" alt="Visa" />
                </a>
                <a href="#" className={styles.pay}>
                    <img src="/american-express.png" alt="American Express" />
                </a>
            </div>
        </div>
    );
};

export default FooterPayWays;
