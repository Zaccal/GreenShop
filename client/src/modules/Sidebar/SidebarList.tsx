import styles from './Sidebar.module.css';

const SidebarList = () => {
    return (
        <ul className={styles.list}>
            <li className={`${styles.option} ${styles.active}`}>
                <span>House Plants</span>
                <span>(33)</span>
            </li>
            <li className={styles.option}>
                <span>Potter Plants</span>
                <span>(12)</span>
            </li>
            <li className={styles.option}>
                <span>Seeds</span>
                <span>(65)</span>
            </li>
            <li className={styles.option}>
                <span>Small Plants</span>
                <span>(39)</span>
            </li>
            <li className={styles.option}>
                <span>Big Plants</span>
                <span>(23)</span>
            </li>
            <li className={styles.option}>
                <span>Succulents</span>
                <span>(17)</span>
            </li>
            <li className={styles.option}>
                <span>Trerrariums</span>
                <span>(19)</span>
            </li>
            <li className={styles.option}>
                <span>Gardening</span>
                <span>(13)</span>
            </li>
            <li className={styles.option}>
                <span>Accessories</span>
                <span>(18)</span>
            </li>
        </ul>
    );
};

export default SidebarList;
