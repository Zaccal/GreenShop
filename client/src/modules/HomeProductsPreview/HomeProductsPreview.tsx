import { IProduct } from '@/types/Product.type';
import styles from './HomeProductsPreview.module.css';
import HomeProductsPreviewNav from './HomeProductsPreviewNav';
import HomeProductsPreviewSort from './HomeProductsPreviewSort';
import ProductCard from './ProductCard/ProductCard';
import HomeProductsPreviewPagination from './HomeProductsPreviewPagination/HomeProductsPreviewPagination';

const productTest: IProduct = {
    title: 'Barberton Daisy',
    cost: 119.0,
    discount: 0,
    oldCost: 0,
    shortDescription: '',
    fullDescription: '',
    mainPreview: '23e759d7-539b-4bd7-b2ca-eee0186659e8.jpg',
    previews: [],
    rating: 0,
    tags: [],
    sku: '1995751877966',
    categoriesId: 1,
    id: 1
};

const products: IProduct[] = new Array(9);
products.fill(productTest);

const randomIndex = Math.floor(Math.random() * products.length);
products[randomIndex] = {
    title: 'Barberton Daisy',
    cost: 299.99,
    discount: 13,
    oldCost: 329.99,
    shortDescription: '',
    fullDescription: '',
    mainPreview: '23e759d7-539b-4bd7-b2ca-eee0186659e8.jpg',
    previews: [],
    rating: 0,
    tags: [],
    sku: '1995751877966',
    categoriesId: 1,
    id: 1
};

const HomeProductsPreview = () => {
    return (
        <>
            <div className={styles.header}>
                <HomeProductsPreviewNav />
                <HomeProductsPreviewSort />
            </div>
            <div className={styles.container}>
                {products.map((productData) => (
                    <ProductCard {...productData} key={productData.id} />
                ))}
            </div>
            <div className={styles['pagination-container']}>
                <HomeProductsPreviewPagination />
            </div>
        </>
    );
};

export default HomeProductsPreview;
