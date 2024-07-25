import { useState } from 'react';
import PaymentMethodCard from './PaymentMethodCard/PaymentMethodCard';

export type TypeMethodToChange =
    | 'byBank'
    | 'byDorectBankTransfer'
    | 'byCashDelivery';

const PaymentMethod = () => {
    const [isMethodPayment, setIsMethodPayment] = useState({
        byBank: true,
        byDorectBankTransfer: false,
        byCashDelivery: false
    });

    const changeMethod = (type: TypeMethodToChange) => {
        const updatedMethods = Object.keys(isMethodPayment).reduce(
            (acc, method) => {
                acc[method] = method === type;
                return acc;
            },
            {} as Record<string, boolean>
        );

        setIsMethodPayment(
            updatedMethods as {
                byBank: boolean;
                byDorectBankTransfer: boolean;
                byCashDelivery: boolean;
            }
        );
    };

    return (
        <div className="mt-12">
            <p className="font-bold mb-5">Payment Method</p>
            <PaymentMethodCard
                by="BANK"
                isChecked={isMethodPayment.byBank}
                setIsChecked={() => changeMethod('byBank')}
            />
            <PaymentMethodCard
                by="DORECT_BANK_TRANSFER"
                isChecked={isMethodPayment.byDorectBankTransfer}
                setIsChecked={() => changeMethod('byDorectBankTransfer')}
            />
            <PaymentMethodCard
                by="CASH_ON_DELIVERY"
                isChecked={isMethodPayment.byCashDelivery}
                setIsChecked={() => changeMethod('byCashDelivery')}
            />
        </div>
    );
};

export default PaymentMethod;
