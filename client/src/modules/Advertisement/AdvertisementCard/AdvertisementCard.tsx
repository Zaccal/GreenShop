import { Card } from '@/components/ui/card';
import styles from './AdvertisementCard.module.css';
import { Button } from '@/components/ui/button';
import { FaArrowRightLong } from 'react-icons/fa6';

export interface IAdvertisementCard {
    src: string;
    title: string;
    subtitle: string;
}

const AdvertisementCard = ({ src, title, subtitle }: IAdvertisementCard) => {
    return (
        <Card className={styles.Card}>
            <img src="/Mask Group.png" className={styles.design} />
            <img className={styles.preview} src={src} alt="Plant img" />
            <div className={styles.content}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.subtitle}>{subtitle}</p>
                <Button className={styles.button}>
                    <span>Find more</span>
                    <FaArrowRightLong />
                </Button>
            </div>
        </Card>
    );
};

export default AdvertisementCard;
