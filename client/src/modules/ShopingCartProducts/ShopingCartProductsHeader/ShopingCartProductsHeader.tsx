import { Separator } from '@/components/ui/separator';

const ShopingCartProductsHeader = () => {
    return (
        <div className="mb-3 w-full">
            <div className="grid grid-cols-2/4 items-center pb-3">
                <p className="font-bold">Products</p>
                <p className="font-bold">Price</p>
                <p className="font-bold">Quantity</p>
                <p className="font-bold">Total</p>
            </div>
            <Separator />
        </div>
    );
};

export default ShopingCartProductsHeader;
