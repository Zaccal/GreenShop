import AsyncImage from '@/components/custom/AsyncImage/AsyncImage';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { isFullCost } from '@/modules/HomeProductsPreview/utils';
import { IProduct } from '@/types/Product.type';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

interface IProductCard
    extends Pick<
        IProduct,
        'id' | 'title' | 'cost' | 'discount' | 'oldCost' | 'mainPreview'
    > {}

const ProductCard = ({
    id,
    title,
    cost,
    oldCost,
    discount,
    mainPreview
}: IProductCard) => {
    return (
        <Link to={`/Shop/${id}`}>
            <Card className={styles.card}>
                <CardHeader className={styles.card_header}>
                    {discount ? (
                        <div className={styles.CardDisCount}>
                            <span>{discount}% OFF</span>
                        </div>
                    ) : (
                        <></>
                    )}

                    <AsyncImage
                        className={styles.card_img}
                        fallbackImageClassName={styles.fallback}
                        skiletonClassname={styles.skilleton}
                        url={`http://localhost:5000/api/${mainPreview}`}
                    />
                </CardHeader>
                <CardContent className={styles.card_content}>
                    <p className={styles.card_title}>{title}</p>
                    <div className={styles.costContainer}>
                        <p className={styles.cost}>${isFullCost(cost)}</p>
                        {oldCost ? (
                            <p className={styles.oldCost}>
                                ${isFullCost(oldCost)}
                            </p>
                        ) : (
                            <></>
                        )}
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ProductCard;
