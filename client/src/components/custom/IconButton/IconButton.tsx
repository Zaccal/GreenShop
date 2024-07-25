import { TypeReactChildren } from '@/types/ReactChildren.type';
import styles from './IconButton.module.css';
import { MouseEventHandler } from 'react';

interface IIconButton {
    children: TypeReactChildren;
    count?: number | string;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ children, count, className, onClick }: IIconButton) => {
    return (
        <button onClick={onClick} className={`${className} ${styles.button}`}>
            {children}
            {count && (
                <div className={styles.count}>
                    <span>{Number(count) > 99 ? '99+' : count}</span>
                </div>
            )}
        </button>
    );
};

export default IconButton;
