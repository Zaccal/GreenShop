import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface IPaymentMethodCard {
    isChecked: boolean;
    setIsChecked: (isChecked: boolean) => void;
    by: 'BANK' | 'DORECT_BANK_TRANSFER' | 'CASH_ON_DELIVERY';
}

const PaymentMethodCard = ({
    isChecked,
    setIsChecked,
    by
}: IPaymentMethodCard) => {
    const getLabelValue = () => {
        switch (by) {
            case 'BANK':
                return (
                    <img
                        className="w-full"
                        src="../../../bankPaymentMethod.png"
                        alt="banks"
                    />
                );
            case 'DORECT_BANK_TRANSFER':
                return <p>Dorect bank transfer</p>;
            case 'CASH_ON_DELIVERY':
                return <p>Cash on delivery</p>;
        }
    };

    return (
        <div
            onClick={() => setIsChecked(!isChecked)}
            className="flex items-center gap-3 cursor-pointer border mb-4 px-[11px] py-[14px]"
        >
            <Checkbox className="cursor-pointer" checked={isChecked} />
            <Label className="cursor-pointer">{getLabelValue()}</Label>
        </div>
    );
};

export default PaymentMethodCard;
