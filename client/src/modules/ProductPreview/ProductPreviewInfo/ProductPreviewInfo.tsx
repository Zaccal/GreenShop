import Rating from '@/components/custom/Rating/Rating';
import { Separator } from '@/components/ui/separator';
import { isFullCost } from '@/modules/HomeProductsPreview/utils';
import { IProduct } from '@/types/Product.type';
import styles from './ProductPreviewInfo.module.css';
import ProductSize from './ProductSize/ProductSize';
import ProductCount from './ProductCount/ProductCount';
import { Button } from '@/components/ui/button';
import { CiHeart } from 'react-icons/ci';
import ProductInfoList from './ProductInfoList/ProductInfoList';

interface IProductPreviewInfo
    extends Omit<IProduct, 'mainPreview' | 'previews' | 'fullDescription'> {}

const ProductPreviewInfo = ({ ...productInfo }: IProductPreviewInfo) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{productInfo.title}</h2>
            <div className={styles.cost_and_rating_container}>
                <h4 className={styles.cost}>${isFullCost(productInfo.cost)}</h4>
                <Rating reviews={19} value={productInfo.rating} />
            </div>

            <Separator className="mt-3 mb-4" />

            <h5 className={styles.subtitle}>Short Description:</h5>
            <p className={styles.shortDescription}>
                {productInfo.shortDescription}
            </p>

            <h5 className={styles.subtitle}>Size:</h5>
            <ProductSize className="mt-3" />

            <div className={styles.count_functions_container}>
                <ProductCount />
                <div className={styles.buttons_container}>
                    <Button className={styles.button}>Buy now</Button>
                    <Button
                        className={styles.button}
                        variant={'outlinePrimary'}
                    >
                        Add to card
                    </Button>
                    <Button className="px-2" variant={'outlinePrimary'}>
                        <CiHeart className="w-7 h-7" />
                    </Button>
                </div>
            </div>

            <ProductInfoList {...productInfo} />
        </div>
    );
};

export default ProductPreviewInfo;
