import styles from './Sidebar.module.css';

const SidebarSizeList = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.option}>Small</li>
            <li className={styles.option}>Medium</li>
            <li className={styles.option}>Large</li>
        </ul>
    );
};

export default SidebarSizeList;
