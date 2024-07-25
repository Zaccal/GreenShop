import { IProduct } from '@/types/Product.type';
import ProductPreviewImgs from './ProductPreviewImgs/ProductPreviewImgs';
import { useState } from 'react';
import styles from './ProductPreview.module.css';
import AsyncImage from '@/components/custom/AsyncImage/AsyncImage';
import ProductPreviewDialog from '../HomeProductsPreview/ProductCard/ProductPreviewDialog';
import ProductPreviewInfo from './ProductPreviewInfo/ProductPreviewInfo';

const productTest: IProduct = {
    title: 'Barberton Daisy',
    cost: 119.0,
    discount: 0,
    oldCost: 0,
    shortDescription:
        'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
    fullDescription: '',
    mainPreview: '23e759d7-539b-4bd7-b2ca-eee0186659e8.jpg',
    previews: [
        '8e804ddc-a611-4757-bc56-6733c181f654.jpg',
        '6443046e-5e22-405b-91ac-1eab3af6a84c.jpg',
        '431cb07e-4b76-4246-b6f9-4445b251eccb.jpg'
    ],
    rating: 4,
    tags: ['Home', 'Garden', 'Plants'],
    sku: '1995751877966',
    categoriesId: 1,
    id: 1
};

const ProductPreview = () => {
    const [currentPreview, setCurrentPreview] = useState(
        productTest.mainPreview
    );

    return (
        <div className={styles.container}>
            <ProductPreviewImgs
                setCurrentPreview={setCurrentPreview}
                mainPreview={productTest.mainPreview}
                previews={productTest.previews}
            />
            <div className={styles.currentPreviewContainer}>
                <div className={styles.diolog}>
                    <ProductPreviewDialog
                        className="rounded-full"
                        src={currentPreview}
                    />
                </div>

                <AsyncImage
                    className={styles.currentPreview}
                    skiletonClassname={styles.skilleton}
                    fallbackImageClassName={styles.fallback}
                    url={`http://localhost:5000/api/${currentPreview}`}
                />
            </div>
            <ProductPreviewInfo {...productTest} />
        </div>
    );
};

export default ProductPreview;
