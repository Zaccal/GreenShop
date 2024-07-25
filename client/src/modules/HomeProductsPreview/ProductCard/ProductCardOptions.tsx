import styles from '../HomeProductsPreview.module.css';
import IconButton from '@/components/custom/IconButton/IconButton';
import { SlBasket } from 'react-icons/sl';
import { CiHeart } from 'react-icons/ci';
import { IoMdHeart } from 'react-icons/io';
import { useState } from 'react';
import ProductPreviewDialog, {
    IProductPreviewDialog
} from './ProductPreviewDialog';

const ProductCardOptions = ({ src }: IProductPreviewDialog) => {
    const [isInBasket, setIsInBasket] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className={styles.CardButtons}>
            <IconButton
                onClick={() => setIsInBasket(!isInBasket)}
                className="bg-white p-2 rounded"
            >
                {isInBasket ? (
                    <SlBasket className="text-primary" />
                ) : (
                    <SlBasket />
                )}
            </IconButton>
            <IconButton
                onClick={() => setIsLiked(!isLiked)}
                className="bg-white p-2 rounded"
            >
                {isLiked ? <IoMdHeart className="text-primary" /> : <CiHeart />}
            </IconButton>
            <ProductPreviewDialog src={src} />
        </div>
    );
};

export default ProductCardOptions;
