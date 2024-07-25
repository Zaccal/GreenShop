import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import AddressFormInput from './AddressFormInput/AddressFormInput';

interface IAddressForm {
    isNotOrder?: boolean;
}

const AddressForm = ({ isNotOrder }: IAddressForm) => {
    return (
        <div className="col-start-1 col-end-7">
            <h3 className="font-bold">Billing Address</h3>
            {isNotOrder && (
                <p className="text-subtitle mt-1">
                    The following addresses will be used on the checkout page by
                    default.
                </p>
            )}
            <div className="flex items-start gap-6 mt-5">
                <AddressFormInput
                    className="w-full"
                    label="First Name"
                    isMandatory
                />
                <AddressFormInput
                    className="w-full"
                    label="Last Name"
                    isMandatory
                />
            </div>
            <div className="flex items-start gap-6 mt-7">
                <AddressFormInput
                    className="w-full"
                    label="Country / Region"
                    isMandatory
                />
                <AddressFormInput
                    className="w-full"
                    label="Town / City"
                    isMandatory
                />
            </div>
            <div className="flex items-start gap-6 mt-7">
                <AddressFormInput
                    className="w-full"
                    label="Street Address"
                    isMandatory
                />
                <AddressFormInput
                    className="w-full mt-6"
                    placeholder="Appartment, suite, unit, etc. (optional)"
                    isMandatory
                />
            </div>
            <div className="flex items-start gap-6 mt-7">
                <AddressFormInput
                    className="w-full"
                    label="State"
                    isMandatory
                />
                <AddressFormInput className="w-full" label="Zip" isMandatory />
            </div>
            <div className="flex items-start gap-6 mt-7">
                <AddressFormInput
                    className="w-full"
                    label="Email address"
                    isMandatory
                />
                <AddressFormInput
                    className="w-full"
                    label="Phone number"
                    type="tel"
                    isMandatory
                />
            </div>
            {!isNotOrder && (
                <>
                    <div className="flex items-center space-x-2 mt-8">
                        <Checkbox id="different_address" />
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="different_address"
                        >
                            Ship to a different address?
                        </label>
                    </div>
                    <div className="mt-14">
                        <p className="mb-2">Order notes (optional)</p>
                        <Textarea />
                    </div>
                </>
            )}
        </div>
    );
};

export default AddressForm;
