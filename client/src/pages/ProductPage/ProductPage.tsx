import CurrentLocation from '@/modules/CurrentLocation/CurrentLocation';
import ProductDescriptionAndReviews from '@/modules/ProductDescriptionAndReviews/ProductDescriptionAndReviews';
import ProductPreview from '@/modules/ProductPreview/ProductPreview';
import ReletedProducts from '@/modules/ReletedProducts/ReletedProducts';

const ProductPage = () => {
    return (
        <>
            <CurrentLocation />
            <ProductPreview />
            <ProductDescriptionAndReviews />
            <ReletedProducts />
        </>
    );
};

export default ProductPage;
