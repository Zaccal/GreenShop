import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import styles from './FooterEmailForm.module.css';

const FooterEmailForm = () => {
    return (
        <div className={styles.container}>
            <Input
                type="email"
                placeholder="enter your email address..."
                className={styles.input}
            />
            <Button className={styles.btn}>join</Button>
        </div>
    );
};

export default FooterEmailForm;
