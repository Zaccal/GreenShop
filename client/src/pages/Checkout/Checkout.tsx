import AddressForm from '@/modules/AddressForm/AddressForm';
import CurrentLocation from '@/modules/CurrentLocation/CurrentLocation';
import ReceiptCheckoutModal from '@/modules/ReceiptCheckoutModal/ReceiptCheckoutModal';
import YourOrders from '@/modules/YourOrders/YourOrders';

const Checkout = () => {
    return (
        <>
            <CurrentLocation />
            <div className="mt-9 grid gap-9 grid-cols-10">
                <AddressForm />
                <YourOrders />
            </div>
            <ReceiptCheckoutModal />
        </>
    );
};

export default Checkout;
