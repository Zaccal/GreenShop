import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import styles from '../HomeProductsPreview.module.css';
import { IProduct } from '@/types/Product.type';
import { isFullCost } from '../utils';
import ProductCardOptions from './ProductCardOptions';
import AsyncImage from '@/components/custom/AsyncImage/AsyncImage';

const ProductCard = ({ ...product }: IProduct) => {
    return (
        <Card className={styles.Card}>
            <CardHeader className={styles.CardPreview}>
                {product.discount ? (
                    <div className={styles.CardDisCount}>
                        <span>{product.discount}% OFF</span>
                    </div>
                ) : (
                    <></>
                )}

                <AsyncImage
                    fallbackImageClassName={`fallback ${styles.CardPreviewFallBack}`}
                    className={styles.preview}
                    url={`http://localhost:5000/api/${product.mainPreview}`}
                    alt="Product preview"
                />
                <ProductCardOptions src={product.mainPreview} />
            </CardHeader>
            <CardContent className={styles.CardContent}>
                <CardTitle className={styles.CardTitle}>
                    {product.title}
                </CardTitle>
                <CardDescription>
                    <div className={styles.costContainer}>
                        <span className={styles.CardCost}>
                            ${isFullCost(product.cost)}
                        </span>
                        {product.oldCost ? (
                            <span className={styles.CardOldCost}>
                                ${isFullCost(product.oldCost)}
                            </span>
                        ) : undefined}
                    </div>
                </CardDescription>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
