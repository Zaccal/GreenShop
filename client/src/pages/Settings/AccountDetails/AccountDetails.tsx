import InputPassword from '@/components/custom/InputPassword/InputPassword';
import { Button } from '@/components/ui/button';
import AddressFormInput from '@/modules/AddressForm/AddressFormInput/AddressFormInput';
import styles from './AccountDetails.module.css';
import InputAvatar from './InputAvatar/InputAvatar';

const AccountDetails = () => {
    return (
        <div>
            <p className="font-semibold">Personal Information</p>
            <div className="mt-5 mb-9">
                <div className={styles.input_container}>
                    <AddressFormInput label="First name" isMandatory />
                    <AddressFormInput label="Last name" isMandatory />
                </div>
                <div className={styles.input_container}>
                    <AddressFormInput
                        label="Email address"
                        type="email"
                        isMandatory
                    />
                    <AddressFormInput
                        label="Phone number"
                        type="tel"
                        isMandatory
                    />
                </div>
                <div className={styles.input_container}>
                    <AddressFormInput label="Username" isMandatory />
                    <InputAvatar />
                </div>
            </div>
            <p className="font-semibold">Password change</p>
            <div className="max-w-sm">
                <InputPassword placeholder="Current password" />
                <InputPassword placeholder="New password" />
                <InputPassword placeholder="Confirm new password" />
            </div>
            <Button className="mt-4">Save change</Button>
        </div>
    );
};

export default AccountDetails;
