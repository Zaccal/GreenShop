import { Button } from '@/components/ui/button';
import styles from './Banner1.module.css';

const Banner1 = () => {
    return (
        <div className={styles.banner}>
            <div className="">
                <h4 className={styles.uptitle}>Welcome to GreenShop</h4>
                <h1 className={styles.title}>
                    Let’s Make a Better
                    <span className="text-primary"> Planet</span>
                </h1>
                <p className={styles.subtitle}>
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                </p>
                <Button className={styles.button}>shop now</Button>
            </div>
            <img src="/Banner.png" alt="Banner_plant" />
        </div>
    );
};

export default Banner1;
