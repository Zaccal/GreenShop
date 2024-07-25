import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InputHTMLAttributes } from 'react';
import styles from './AddressFormInput.module.css';

interface IAddressFormInput extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    isMandatory?: boolean;
}

const AddressFormInput = ({
    label,
    isMandatory,
    ...props
}: IAddressFormInput) => {
    return (
        <div className="flex flex-col gap-3 w-full">
            {label && (
                <Label htmlFor={styles.label}>
                    {label}{' '}
                    {isMandatory ? (
                        <span className="text-red-500 font-bold">*</span>
                    ) : (
                        ''
                    )}
                </Label>
            )}
            <Input id={styles.label} {...props} />
        </div>
    );
};

export default AddressFormInput;
