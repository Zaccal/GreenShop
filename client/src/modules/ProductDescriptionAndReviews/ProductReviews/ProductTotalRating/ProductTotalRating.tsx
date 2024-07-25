import { Separator } from '@/components/ui/separator';
import { getParseCountReviews, getParseRating } from './utils';
import Rating from '@/components/custom/Rating/Rating';
import styles from './ProductTotalRating.module.css';

interface IProductTotalRating {
    avarageRating: number;
    totalReviews: number;
}

const ProductTotalRating = ({
    avarageRating,
    totalReviews
}: IProductTotalRating) => {
    return (
        <div className="">
            <div className={styles.wrapper}>
                <div className={styles.sector}>
                    <span className={styles.title}>
                        {getParseCountReviews(totalReviews)}
                    </span>
                    <span className={styles.subtitle}>Total reivews</span>
                </div>

                <Separator orientation="vertical" />

                <div className={styles.sector}>
                    <div className={styles.section_inner}>
                        <span className={styles.title}>
                            {getParseRating(avarageRating)}
                        </span>
                        <Rating value={avarageRating} />
                    </div>
                    <span className={styles.subtitle}>Avarage rating</span>
                </div>
            </div>
            <Separator />
        </div>
    );
};

export default ProductTotalRating;
