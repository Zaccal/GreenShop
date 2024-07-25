import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CardTotalCoupon = () => {
    return (
        <>
            <p className="mt-3 mb-2 text-md">Coupon Apply</p>
            <div className="flex justify-between w-full max-w-sm items-center space-x-2">
                <Input
                    className="w-full"
                    placeholder="Enter coupon code here..."
                />
                <Button className="font-semibold">Apply</Button>
            </div>
        </>
    );
};

export default CardTotalCoupon;
