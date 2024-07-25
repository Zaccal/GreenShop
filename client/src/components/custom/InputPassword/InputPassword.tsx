import { Input } from '@/components/ui/input';
import { GoEye, GoEyeClosed } from 'react-icons/go';
import { InputHTMLAttributes, useState } from 'react';
import styles from './InputPassword.module.css';

interface IInputPassword extends InputHTMLAttributes<HTMLInputElement> {}

const InputPassword = ({
    className,
    placeholder = 'Password',
    ...props
}: IInputPassword) => {
    const [isShowPassoword, setIsShowPassoword] = useState(false);
    const switchShowPasswordHandle = () => setIsShowPassoword(!isShowPassoword);

    return (
        <>
            <Input
                {...props}
                className={`${className} my-[14px]`}
                type={isShowPassoword ? 'text' : 'password'}
                icon={
                    isShowPassoword ? (
                        <GoEye
                            onClick={switchShowPasswordHandle}
                            className={styles.input_icon}
                        />
                    ) : (
                        <GoEyeClosed
                            onClick={switchShowPasswordHandle}
                            className={styles.input_icon}
                        />
                    )
                }
                iconSide="right"
                placeholder={placeholder}
            />
        </>
    );
};

export default InputPassword;
