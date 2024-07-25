import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { IProduct } from '@/types/Product.type';
import ProductCard from './ProductCard/ProductCard';
import styles from './ReletedProducts.module.css';
import { Separator } from '@/components/ui/separator';

const products: IProduct[] = new Array(10)
    .fill({
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
    })
    .map((value, index) => ({ ...value, id: index }));

const randomProductIndex = Math.floor(Math.random() * products.length);

products[randomProductIndex].discount = 15;
products[randomProductIndex].oldCost = 299;

const ReletedProducts = () => {
    return (
        <div>
            <h3 className={styles.title}>Releted Products</h3>
            <Separator className="mt-3 mb-11" />
            <Swiper
                modules={[Pagination]}
                slidesPerView={5}
                slidesPerGroup={2}
                spaceBetween={26}
                initialSlide={1}
                pagination={{
                    clickable: true,
                    horizontalClass: styles.pagination,
                    bulletClass: styles['slider-bullet'],
                    bulletActiveClass: styles['slider-bullet-active']
                }}
            >
                {products.map((productData) => (
                    <SwiperSlide key={productData.id}>
                        <ProductCard {...productData} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ReletedProducts;
