import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import CardTotalCostData from '../CardTotals/CardTotalCostData';
import CardTotalCoupon from '../CardTotals/CardTotalCoupon';
import OrderCard from './OrderCard/OrderCard';
import PaymentMethod from './PaymentMethod/PaymentMethod';

const YourOrders = () => {
    const [isHasCoupon, setIsHasCoupon] = useState(false);

    return (
        <div className="w-full col-start-7 col-end-11">
            <h3 className="font-bold mb-4">Your Order</h3>
            <div className="flex items-center justify-between">
                <p className="font-medium pb-2">Products</p>
                <p className="font-medium pb-2">Subtotal</p>
            </div>
            <Separator className="w-full" />
            <div className="">
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>
            {isHasCoupon ? (
                <CardTotalCoupon />
            ) : (
                <p className="text-right mt-4">
                    Have a coupon code?{' '}
                    <span
                        onClick={() => setIsHasCoupon(!isHasCoupon)}
                        className="text-primary cursor-pointer"
                    >
                        Click here
                    </span>
                </p>
            )}
            <CardTotalCostData />
            <PaymentMethod />
            <Button className="w-full font-bold mt-12">Place Order</Button>
        </div>
    );
};

export default YourOrders;
