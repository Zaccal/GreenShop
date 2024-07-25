import styles from './FooterLinks.module.css';

const FooterLinks = () => {
    return (
        <>
            <div className="">
                <h4 className={styles.title}>My Account</h4>
                <ul className={styles.list}>
                    <li>
                        <a href="#">My account</a>
                    </li>
                    <li>
                        <a href="#">Our stores</a>
                    </li>
                    <li>
                        <a href="#">Contact us</a>
                    </li>
                    <li>
                        <a href="#">Career</a>
                    </li>
                    <li>
                        <a href="#">Specials</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <h4 className={styles.title}>My Account</h4>
                <ul className={styles.list}>
                    <li>
                        <a href="#">Help & Guide</a>
                    </li>
                    <li>
                        <a href="#">How to buy</a>
                    </li>
                    <li>
                        <a href="#">Shipping & Delivery</a>
                    </li>
                    <li>
                        <a href="#">Product Prolicy</a>
                    </li>
                    <li>
                        <a href="#">How to Return</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <h4 className={styles.title}>Categories</h4>
                <ul className={styles.list}>
                    <li>
                        <a href="#">Houses Plants</a>
                    </li>
                    <li>
                        <a href="#">Potter Plants</a>
                    </li>
                    <li>
                        <a href="#">Seeds</a>
                    </li>
                    <li>
                        <a href="#">Small Plants</a>
                    </li>
                    <li>
                        <a href="#">Accessories</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default FooterLinks;
