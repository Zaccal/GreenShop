import { Separator } from '@/components/ui/separator';
import { isFullCost } from '@/modules/HomeProductsPreview/utils';
import dateFormat from 'dateformat';

interface IPaymentDetails {
    orderNumber: number;
    date: Date;
    total: number;
    paymentMethod: string;
}

const PaymentDetails = ({
    date,
    orderNumber,
    paymentMethod,
    total
}: IPaymentDetails) => {
    return (
        <div className="px-10 py-4 flex items-center gap-[22px] border-b">
            <div className="text-md text-muted">
                <p>Order number</p>
                <p className="font-bold">{orderNumber}</p>
            </div>
            <Separator orientation="vertical" />
            <div className="text-md text-muted">
                <p>Date</p>
                <p className="font-bold">{dateFormat(date, 'd mmm, yyyy')}</p>
            </div>
            <Separator orientation="vertical" />
            <div className="text-md text-muted">
                <p>Total</p>
                <p className="font-bold">{isFullCost(total)}</p>
            </div>
            <Separator orientation="vertical" />
            <div className="text-md text-muted">
                <p>Payment Method</p>
                <p className="font-bold">{paymentMethod}</p>
            </div>
        </div>
    );
};

export default PaymentDetails;
