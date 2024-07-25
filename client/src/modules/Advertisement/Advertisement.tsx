import styles from './Advertisement.module.css';
import AdvertisementCard, {
    IAdvertisementCard
} from './AdvertisementCard/AdvertisementCard';

const datasCard: IAdvertisementCard[] = [
    {
        title: 'Summer cactus & Succulents',
        subtitle:
            'We are an online plant shop offering a wide range of cheap and trendy plants',
        src: '/planet-2.jpg'
    },
    {
        title: 'Styling Trends & much more',
        subtitle:
            'We are an online plant shop offering a wide range of cheap and trendy plants',
        src: '/planet.jpg'
    }
];

const Advertisement = () => {
    return (
        <div className={styles.container}>
            {datasCard.map((data) => (
                <AdvertisementCard {...data} key={data.src} />
            ))}
        </div>
    );
};

export default Advertisement;
