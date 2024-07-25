import { Button } from '@/components/ui/button';
import { TypeReactChildren } from '@/types/ReactChildren.type';
import styles from './ButtonIcon.module.css';

interface IButtonIcon {
    children: string;
    icon: TypeReactChildren;
    postion?: 'left' | 'right';
}

const ButtonIcon = ({ children, icon, postion = 'left' }: IButtonIcon) => {
    return (
        <Button className={styles.button}>
            {postion === 'left' && icon}
            <span className="pb-1">{children}</span>
            {postion === 'right' && icon}
        </Button>
    );
};

export default ButtonIcon;
