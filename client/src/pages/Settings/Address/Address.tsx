import { Button } from '@/components/ui/button';
import AddressForm from '@/modules/AddressForm/AddressForm';

const Address = () => {
    return (
        <div>
            <AddressForm isNotOrder />
            <Button className="mt-4">Save address</Button>
            Lorem
        </div>
    );
};

export default Address;
