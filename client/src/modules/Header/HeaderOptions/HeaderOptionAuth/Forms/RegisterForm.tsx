import InputPassword from '@/components/custom/InputPassword/InputPassword';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import styles from './Form.module.css';

const RegisterForm = () => {
    return (
        <>
            <h4>Enter your email and password to register.</h4>
            <form>
                <Input className="my-[14px]" placeholder="Username" />
                <Input
                    className="my-[14px]"
                    placeholder="Enter your email address"
                />
                <InputPassword />
                <InputPassword placeholder="Confirm Password" />
                <Button className={styles.require_btn}>Register</Button>

                <h5 className={styles.text_through_line}>
                    <span className={styles.inner_text_through_line}>
                        Or register with
                    </span>
                </h5>

                <Button variant={'outline'} className="mt-6 w-full">
                    <img src="/google.svg" alt="Google-icon" />
                    <span className="ml-[10px]">Login with Google</span>
                </Button>
                <Button variant={'outline'} className="mt-3 w-full">
                    <img src="/facebook.svg" alt="Google-icon" />
                    <span className="ml-[10px]">Login with Facebook</span>
                </Button>
            </form>
        </>
    );
};

export default RegisterForm;
