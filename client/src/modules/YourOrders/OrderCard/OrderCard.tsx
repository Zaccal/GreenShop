import AsyncImage from '@/components/custom/AsyncImage/AsyncImage';
import { IProduct } from '@/types/Product.type';

export interface IOrderCard
    extends Pick<IProduct, 'mainPreview' | 'cost' | 'title' | 'sku'> {
    quontity: number;
}

const OrderCard = () => {
    return (
        <div className="flex items-center justify-between bg-muted pl-1 pr-4 mt-3">
            <div className="flex items-center">
                <AsyncImage
                    url="http://localhost:5000/api/23e759d7-539b-4bd7-b2ca-eee0186659e8.jpg"
                    className="w-[70px] h-[70px] mix-blend-multiply mr-3"
                />
                <div className="">
                    <p className="font-medium text-[16px]">Barberton Daisy</p>
                    <p className="text-md">
                        <span className="text-[#a5a5a5]">SKU:</span>{' '}
                        <span className="text-gray-500">1995751877966</span>
                    </p>
                </div>
            </div>
            <p className="text-[#a5a5a5]">(x 2)</p>
            <p className="text-primary font-bold">$238.00</p>
        </div>
    );
};

export default OrderCard;
