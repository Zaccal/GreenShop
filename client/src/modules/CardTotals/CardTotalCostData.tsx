import { Separator } from '@/components/ui/separator';

const CardTotalCostData = () => {
    return (
        <>
            <p className="mt-8 flex justify-between">
                Subtotal <span className="font-bold">$2,673.00</span>
            </p>
            <p className="py-4 flex justify-between">
                Coupon Discount <span>(-) 00.00</span>
            </p>
            <p className="flex justify-between">
                Shiping <span className="font-bold">$16.00</span>
            </p>
            <p className="text-primary text-md text-right mt-2">
                View shipping charge
            </p>
            <Separator className="mb-3 mt-4" />
            <p className="flex justify-between">
                <span className="font-bold">Total</span>{' '}
                <span className="font-bold text-primary">$2,699.00</span>
            </p>
        </>
    );
};

export default CardTotalCostData;
