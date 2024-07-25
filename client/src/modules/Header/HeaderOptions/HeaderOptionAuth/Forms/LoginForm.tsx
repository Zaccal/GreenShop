import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import styles from './Form.module.css';
import InputPassword from '@/components/custom/InputPassword/InputPassword';

const LoginForm = () => {
    return (
        <>
            <h4>Enter your username and password to login.</h4>
            <form>
                <Input
                    className="mt-[14px]"
                    type="email"
                    placeholder="almamun_uxui@outlook.com"
                />
                <InputPassword />

                <a href="#" className={styles.forget_password}>
                    Forgot Password?
                </a>

                <Button className={styles.require_btn}>Login</Button>

                <h5 className={styles.text_through_line}>
                    <span className="bg-white px-[10px]">Or login with</span>
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

export default LoginForm;
