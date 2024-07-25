import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import OrderDetails from './OrderDetails/OrderDetails';
import PaymentDetails from './PaymentDetails/PaymentDetails';
import TotalOrderPrice from './TotalOrderPrice/TotalOrderPrice';

const ReceiptCheckoutModal = () => {
    const [isThankModal, setIsThankModal] = useState(true);

    return (
        <>
            <Dialog
                onOpenChange={(isOpen) => setIsThankModal(isOpen)}
                open={isThankModal}
            >
                <DialogContent className="p-0 max-w-[35rem] border-b-[10px] border-b-primary">
                    <DialogHeader
                        className="p-7 flex justify-center items-center"
                        style={{
                            background: 'rgba(70, 163, 88, 0.06)'
                        }}
                    >
                        <div className="">
                            <img
                                src="../../../ThankLetter.svg"
                                alt="thank-logo-letter"
                                className="w-[65px] mx-auto"
                            />
                            <p className="mt-4">Your order has been received</p>
                        </div>
                    </DialogHeader>

                    <PaymentDetails
                        date={new Date()}
                        orderNumber={19586687}
                        paymentMethod="Cash on Dilivery"
                        total={2699}
                    />

                    <div className="px-10 mt-[18px]">
                        <OrderDetails />

                        <TotalOrderPrice />

                        <Separator className="mb-[18px]" />

                        <p className="text-center text-subtitle text-sm mb-[50px]">
                            Your order is currently being processed. You will
                            receive an order confirmation email shortly with the
                            expected delivery date for your items.
                        </p>

                        <div className="flex justify-center mb-12">
                            <Button className="font-bold">
                                Track your order
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ReceiptCheckoutModal;
