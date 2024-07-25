import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';
import CardTotalCostData from './CardTotalCostData';
import CardTotalCoupon from './CardTotalCoupon';

const CardTotals = () => {
    const nav = useNavigate();

    return (
        <div className="">
            <h3 className="font-bold pb-3">Cart Totals:</h3>
            <Separator />
            <CardTotalCoupon />

            <CardTotalCostData />

            <Button
                onClick={() => nav('/Shop/checkout')}
                className="mt-7 w-full"
            >
                Proceed To Checkout
            </Button>
            <Button
                onClick={() => nav('/')}
                variant={'link'}
                className="mt-1 w-full"
            >
                Continue Shopping
            </Button>
        </div>
    );
};

export default CardTotals;
