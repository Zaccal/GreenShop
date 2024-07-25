import CardTotals from '@/modules/CardTotals/CardTotals';
import CurrentLocation from '@/modules/CurrentLocation/CurrentLocation';
import ReletedProducts from '@/modules/ReletedProducts/ReletedProducts';
import ShopingCartProducts from '@/modules/ShopingCartProducts/ShopingCartProducts';
import styles from './ShopingCart.module.css';

const ShopingCart = () => {
    return (
        <>
            <CurrentLocation
                replace={[
                    {
                        name: 'shoping_cart',
                        value: 'Shoping Cart'
                    }
                ]}
            />

            <div className={styles.container}>
                <div className={styles.products}>
                    <ShopingCartProducts />
                </div>
                <div className={styles.total_card}>
                    <CardTotals />
                </div>
            </div>

            <ReletedProducts />
        </>
    );
};

export default ShopingCart;
