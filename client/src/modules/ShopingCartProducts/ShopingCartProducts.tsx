import { ScrollArea } from '@/components/ui/scroll-area';
import { IProduct } from '@/types/Product.type';
import ShopingCartProductsCart from './ShopingCartProductsCart/ShopingCartProductsCart';
import ShopingCartProductsHeader from './ShopingCartProductsHeader/ShopingCartProductsHeader';

const products: IProduct[] = new Array(3)
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

const ShopingCartProducts = () => {
    return (
        <div>
            <ShopingCartProductsHeader />
            <ScrollArea className="h-[200] w-full">
                {products.map((productData) => (
                    <ShopingCartProductsCart
                        {...productData}
                        count={1}
                        size="S"
                    />
                ))}
            </ScrollArea>
        </div>
    );
};

export default ShopingCartProducts;
