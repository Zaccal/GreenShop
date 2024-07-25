import AsyncImage from '@/components/custom/AsyncImage/AsyncImage';
import { Button } from '@/components/ui/button';
import { isFullCost } from '@/modules/HomeProductsPreview/utils';
import ProductCount from '@/modules/ProductPreview/ProductPreviewInfo/ProductCount/ProductCount';
import { TypeProductSize } from '@/modules/ProductPreview/ProductPreviewInfo/ProductSize/ProductSize';
import { IProduct } from '@/types/Product.type';
import { useState } from 'react';
import { GoTrash } from 'react-icons/go';
import styles from './ShopingCartProductsCart.module.css';

interface IShopingCartProductsCart
    extends Omit<
        IProduct,
        'fullDescription' | 'rating' | 'shortDescription' | 'tags'
    > {
    count: number;
    size: TypeProductSize;
}

const ShopingCartProductsCart = ({ ...product }: IShopingCartProductsCart) => {
    const [productCount, setProductCount] = useState(product.count);

    return (
        <div className={styles.wrapper}>
            <div className={styles.product_preview}>
                <AsyncImage
                    className={styles.product_preview_img}
                    skiletonClassname={styles.product_preview_img_skelleton}
                    fallbackImageClassName={styles.product_preview_img_fallback}
                    url={`http://localhost:5000/api/${product.mainPreview}`}
                />
                <div className="">
                    <p className={styles.title}>{product.title}</p>
                    <p className={styles.sku}>SKU: {product.sku}</p>
                </div>
            </div>
            <p className="text-subtitle">${isFullCost(product.cost)}</p>
            <ProductCount
                initialCount={productCount}
                onChange={(count) => setProductCount(count)}
                classNameBtns="w-5 h-6"
            />
            <div className="flex items-center justify-between">
                <p className="font-bold text-primary">
                    ${isFullCost(product.cost * productCount || product.cost)}
                </p>
                <Button variant={'ghost'} className="pr-6">
                    <GoTrash size={18} color="#727272" />
                </Button>
            </div>
        </div>
    );
};

export default ShopingCartProductsCart;
